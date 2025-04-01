
"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
    CalenderIcon
} from "../../icons/index";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import * as XLSX from "xlsx";
import Alert from "../ui/alert/Alert"
import { BsPencil, BsInfoCircle, BsTrash3 } from "react-icons/bs";
interface School {
    id: number;
    sname: string;
    level: string;
    type: string;
    enroll: string;
    mobile: string;
    email: string;
    number_s: number;
    area: string;
    site: string;
    sitePsta: string;
    address1: string;
    address2: string;
    city: string;
    county: string;
    country: string;
    postalCode: number;
    descrip: string;
    createdAt: string;
    updatedAt: string;

}

export default function BasicTableOne() {

    const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);
    const [formData, setFormData] = useState({
        sname: "",
        level: "",
        type: "",
        enroll: "",
        site: "",
        email: "",
        number_s: "",
        area: "",
        postalCode: ""
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

    const [dateOfStart, setDateOfStart] = useState("");
    const [dateOfEnd, setDateOfEnd] = useState("");

    const handleStartDate = (date: Date[]) => {
        setDateOfStart(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    const handleEndDate = (date: Date[]) => {
        setDateOfEnd(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    const handleEditSchool = (school: School) => {
        setSelectedSchool(school);
        setIsEditOpen(true);
    };

    const closeEditModal = () => {
        setIsEditOpen(false);
        setSelectedSchool(null);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(
            schools.map((order) => ({
                name: order.sname,
                level: order.level,
                enrolled: order.type,
                type: order.enroll,
                site: order.site,
                email: order.email,
                number: order.mobile,
                area: order.area,
                postcode: order.postalCode,
            }))
        );
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Orders");
        XLSX.writeFile(wb, "table_data.xlsx");
    };

    //Add to Teachers
    const router = useRouter();

    const addtoSchool = () => {
        router.push("/addschool_ld"); // Navigate to the 'lead' page
    };

    const detailToSchool = async (id: number) => {
        router.push(`/detaschool_ld/${id}`);
    };
    const [schools, setSchools] = useState<School[]>([]);
    const [currentSchools, setCurrentSchools] = useState<School[]>([]);
    const [updateSchool, setUpdateSchool] = useState<School>();
    const [selectedLvl, setSelectedLvl] = useState("");
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        async function fetchSchools() {
            try {
                const response = await fetch(`/api/school_ld?page=${currentPage}&items=${itemsPerPage}&selectedLvl=${selectedLvl}&selectedType=${selectedType}`);

                const data = await response.json();
                if (data.school_data !== undefined) {
                    const totalPage = Math.ceil(data.totalSchool / itemsPerPage);
                    const lastIndex = currentPage * itemsPerPage;

                    setSchools(data.school_data);
                    setCurrentSchools(data.school_data.slice(lastIndex - itemsPerPage, lastIndex));
                    setFormData({
                        sname: data.school_data.sname,
                        level: data.school_data.level,
                        type: data.school_data.type,
                        enroll: data.school_data.enroll,
                        site: data.school_data.site,
                        email: data.school_data.email,
                        number_s: data.school_data.number_s,
                        area: data.school_data.area,
                        postalCode: data.school_data.postalCode,
                    });
                    setTotalPages(totalPage);
                } else {
                    setSchools([]); // Ensure leads remains an array
                    setCurrentSchools([]);

                }
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        }
        fetchSchools();
    }, [currentPage, itemsPerPage, updateSchool, selectedLvl, selectedType]);

    const [schoolLevel, setSchoolLevel] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "level") {
            setSchoolLevel(value);  // Updates academicYear separately
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const isSchoolType = () => {
        const type = schoolLevel;
        return type
    };



    ////////////////////////Pagination///////////////
    const getPageNumbers = (currentPage: number, totalPages: number) => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5];
        }

        if (currentPage >= totalPages - 2) {
            return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }

        return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    };

    const pageNumbers = getPageNumbers(currentPage, totalPages);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    //////////////////

    const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {

        const newItemsPerPage = Number(event.target.value);
        setSchools([]);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing rows per page
    };

    const saveEditedSchool = async (id: number) => {
        try {
            const response = await fetch(`/api/school_ld/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setUpdateSchool(await response.json());
                setAlert({
                    title: "Success!",
                    message: "School updated successfully!",
                    variant: "success",
                });
                closeEditModal();
            } else {
                setAlert({
                    title: "Warning!",
                    message: "Error updating School.",
                    variant: "warning",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setAlert({
                title: "Error!",
                message: "An error occurred.",
                variant: "error",
            });
        }
    };

    const cancelEditedSchool = () => {
        closeEditModal();
    };

    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);


    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">School Name:</label>
                        <input type="text" className="px-4 py-2 w-1/8 dark:bg-gray-900 text-gray-700 border rounded-lg" placeholder="Type a name" />
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Start Field */}
                        <div className="flatpickr-wrapper flex flex-col w-1/3"> {/* Adjusted width */}
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Start:
                            </label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr
                                    value={dateOfStart} // Set the value to the state
                                    onChange={handleStartDate} // Handle the date change
                                    options={{
                                        dateFormat: "Y-m-d", // Set the date format
                                    }}
                                    placeholder="Start Date"
                                    className="w-full py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md h-11 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                   dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
                                    <CalenderIcon />
                                </span>
                            </div>
                        </div>

                        {/* End Field */}
                        <div className="flatpickr-wrapper flex flex-col w-1/3"> {/* Adjusted width */}
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                End:
                            </label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr
                                    value={dateOfEnd} // Set the value to the state
                                    onChange={handleEndDate} // Handle the date change
                                    options={{
                                        dateFormat: "Y-m-d", // Set the date format
                                    }}
                                    placeholder="End Date"
                                    className="w-full py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md h-11 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                   dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
                                    <CalenderIcon />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="px-4 py-2 dark:bg-gray-900 text-gray-700 border rounded-lg text-sm text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div></div>
                    <div></div>

                    <div className="self-end">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-end space-x-2 mb-4">
                <div className="flex justify-end">
                    <span className="text-gray-900 dark:text-gray-300">Filter by first letter:</span>
                </div>
                <div className="flex justify-end gap-1">
                    {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
                        <button
                            key={letter}
                            onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                            className={`px-1 py-0.5 rounded-lg text-sm font-semibold transition duration-200 ${selectedLetter === letter ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
                                }`}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
                <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex justify-start">
                            <button
                                onClick={addtoSchool}
                                className="px-2 py-1 bg-blue-600 text-white rounded-lg"
                            >
                                Add School
                            </button>
                        </div>
                        <div className="relative z-20 bg-transparent">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500 dark:text-gray-400"> Show </span>
                                <select value={itemsPerPage}
                                    onChange={handleItemsPerPageChange}
                                    className="w-full py-2 pl-3 pr-6 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg appearance-none dark:bg-dark-900 h-9 bg-none shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                    <div className="max-w-full overflow-x-auto">
                        <div className="min-w-[1102px]">
                            <Table>
                                {/* Table Header */}
                                <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                    <TableRow>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Name
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"

                                        >
                                            <div className="flex flex-row items-center justify-center gap-1">
                                                <Label className="flex ">Level</Label>
                                                <select className="dark:bg-gray-900 px-4 py-2 dark:text-gray-500 text-xs w-6"
                                                    onChange={(e) => setSelectedLvl(e.target.value)}
                                                    value={selectedLvl}
                                                >
                                                    <option value="all">All</option>
                                                    <option value="Primary">Primary</option>
                                                    <option value="Secondary">Secondary</option>
                                                </select>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            <div className="flex flex-row items-center justify-center gap-1">
                                                <Label className="flex ">Type</Label>
                                                <select className="dark:bg-gray-900 px-4 py-2 dark:text-gray-500 text-xs w-6"
                                                    onChange={(e) => setSelectedType(e.target.value)}
                                                    value={selectedType}
                                                >
                                                    <option value="">--Select--</option>
                                                    <option value="Academy">Academy</option>
                                                    <option value="Comprehensive">Comprehensive</option>
                                                    <option value="Faith">Faith</option>
                                                    <option value="Grammar">Grammar</option>
                                                    <option value="Prep">Prep</option>
                                                    <option value="Private">Private</option>
                                                    <option value="State">State</option>
                                                </select>
                                            </div>
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Enrolled
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Website
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Email
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Number
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Area
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Postcode
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Action
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                {/* Table Body */}
                                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                    {Array.isArray(currentSchools) && currentSchools.length > 0 ? (
                                        currentSchools.map((school: School) => (
                                            <TableRow key={school.id}>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400 cursor-pointer" >
                                                    {school.sname}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.level}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.type}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.enroll}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.site}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.email}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.number_s}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.area}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {school.postalCode}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => handleEditSchool(school)}>
                                                            <BsPencil className="w-5 h-auto" />
                                                        </button>
                                                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => detailToSchool(school.id)}>
                                                            <BsInfoCircle className="w-5 h-auto" />
                                                        </button>
                                                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                                                            <BsTrash3 className="w-5 h-auto" />

                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (

                                        <TableRow className="text-blue-400 px-5 py-3 text-center text-theme-x1 text-gray-500 dark:text-gray-400">
                                            <TableCell>
                                                No results found
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className="border border-t-0 rounded-b-xl border-gray-100 py-4 pl-[18px] pr-4 dark:border-white/[0.05]">
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex justify-center mt-4 space-x-2 flex-grow">
                            {/* First Page Button - Disabled on first page */}
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className={`w-8 h-8  flex rounded-full items-center justify-center ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                            </button>

                            {/* Previous Page Button - Disabled on first page */}
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`w-8 h-8 flex rounded-full items-center justify-center ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                            >
                                <span><svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z" fill=""></path></svg></span>
                            </button>

                            {/* Page Numbers */}
                            {pageNumbers.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-8 h-8 rounded-full ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Ellipsis before the last page when necessary */}
                            {totalPages > 5 && currentPage < totalPages - 2 && <span className="w-8 h-8 flex items-center justify-center dark:text-gray-300">...</span>}

                            {/* Last Page Button when not already shown */}
                            {totalPages > 5 && !pageNumbers.includes(totalPages) && (
                                <button
                                    onClick={() => handlePageChange(totalPages)}
                                    className={`w-8 h-8 rounded-full ${currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                                >
                                    {totalPages}
                                </button>
                            )}

                            {/* Next Page Button - Disabled on last page */}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`w-8 h-8 flex rounded-full items-center justify-center ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                            ><span><svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z" fill=""></path></svg></span>
                            </button>

                            {/* Last Page Button - Disabled on last page */}
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className={`w-8 h-8 flex rounded-full items-center justify-center  ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                            </button>
                        </div>

                        {/* Export to Excel button (Right aligned) */}
                        <div className="flex justify-end">
                            <button
                                onClick={exportToExcel}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                            >
                                Export to Excel
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[1000px] p-5 lg:p-10">
                <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Ealing School</h2>
                {selectedSchool && (
                    <div>
                        <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                            School Information
                        </h4>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
                            <div className="col-span-1">
                                <Label>Name*:</Label>
                                <Input type="text" name="sname" defaultValue={selectedSchool.sname} onChange={handleChange} />
                                {/* <select
                                    className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full"
                                    name="name" defaultValue={selectedSchool.name} onChange={handleChange}>
                                    <option value="">All</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                </select> */}
                            </div>

                            <div className="col-span-1">
                                <Label>Principal:</Label>
                                <Input type="text" />
                            </div>

                            <div className="col-span-1">
                                <Label>Assistant:</Label>
                                <Input type="text" />
                            </div>

                            <div className="col-span-1">
                                <Label>Phone:</Label>
                                <Input type="text" placeholder="+09 363 398 46" />
                            </div>

                            <div className="col-span-1">
                                <Label>Email:</Label>
                                <Input type="email" name="email" defaultValue={selectedSchool.email} onChange={handleChange} placeholder="hasaneducationadvisor@gmail.com" />
                            </div>

                            <div className="col-span-1">
                                <Label>Website:</Label>
                                <Input type="text" name="site" defaultValue={selectedSchool.site} onChange={handleChange} />
                            </div>

                            <div className="col-span-1">
                                <Label>Website PSTA:</Label>
                                <Input type="text" />
                            </div>

                            <div className="col-span-1">
                                <Label>District:</Label>
                                <Input type="text" name="area" defaultValue={selectedSchool.area} onChange={handleChange} />
                            </div>

                            <div className="col-span-1">
                                <Label>School Level:</Label>
                                <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full"
                                    name="level"
                                    defaultValue={selectedSchool.level}
                                    onChange={handleChange}
                                >
                                    <option value="">--Select--</option>
                                    <option value="Primary">Primary</option>
                                    <option value="Secondary">Secondary</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <Label>School Type:</Label>
                                <select
                                    name="type"
                                    className={`px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full
                                ${isSchoolType() == "Secondary" ? "text-gray-900 dark:text-white" : "opacity-50 cursor-not-allowed"}`}
                                    disabled={isSchoolType() !== "Secondary"}
                                    defaultValue={selectedSchool.type}
                                    onChange={handleChange}

                                >
                                    <option value="">--Select--</option>
                                    <option value="Academy">Academy</option>
                                    <option value="Comprehensive">Comprehensive</option>
                                    <option value="Faith">Faith</option>
                                    <option value="Grammar">Grammar</option>
                                    <option value="Prep">Prep</option>
                                    <option value="Private">Private</option>
                                    <option value="State">State</option>
                                </select>
                            </div>

                            <div className="col-span-1">
                                <Label>Receptionist:</Label>
                                <Input type="text" />
                            </div>
                        </div>

                        {/* Line Separator */}
                        <hr className="my-6" />

                        {/* Address Information */}

                        <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                            Address Information
                        </h4>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                            <div className="col-span-1">
                                <Label>Street Address 1:</Label>
                                <Input type="text" placeholder="" />
                            </div>

                            <div className="col-span-1">
                                <Label>Street Address 2:</Label>
                                <Input type="text" placeholder="" />
                            </div>

                            <div className="col-span-1">
                                <Label>City:</Label>
                                <Input type="email" placeholder="England" />
                            </div>

                            <div className="col-span-1">
                                <Label>County:</Label>
                                <Input type="text" placeholder="" />
                            </div>

                            <div className="col-span-1">
                                <Label>Postal Code:</Label>
                                <Input type="text" name="postalCode" defaultValue={selectedSchool.postalCode} onChange={handleChange} placeholder="29407" />
                            </div>

                            <div className="col-span-1">
                                <Label>Country:</Label>
                                <Input type="email" placeholder="United Kingdom" />
                            </div>
                        </div>

                        <hr className="my-6" />

                        {/* Description Information */}

                        <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                            Description Information
                        </h4>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                            <div className="col-span-1">
                                <textarea rows={6} cols={80} className="dark:bg-gray-900 text-gray-600 border rounded-lg" placeholder="Type your description here..." />
                            </div>
                        </div>

                        <div className="flex items-center justify-end w-full gap-3 mt-6">
                            <Button size="sm" variant="outline" onClick={cancelEditedSchool}>
                                Cancel
                            </Button>
                            <Button size="sm" onClick={() => saveEditedSchool(selectedSchool.id)}>
                                Save
                            </Button>
                            {alert && (
                                <Alert
                                    title={alert.title}
                                    message={alert.message}
                                    variant={alert.variant}
                                    duration={2000}
                                    onClose={() => setAlert(null)} // Clear alert after timeout
                                />
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
