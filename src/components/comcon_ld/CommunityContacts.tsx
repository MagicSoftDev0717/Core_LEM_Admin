
"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
import * as XLSX from "xlsx";

interface Comcon {
    id: number;
    fname: string;
    lname: string;
    institution: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    mobile: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    postalCode: number;
    descrip: string;
}


export default function BasicTableOne() {

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(
            comcons.map((order) => ({
                "First Name": order.fname,
                "Last Name": order.lname,
                "Contact Type": order.institution,
                Subject: order.role,
                "Contact Info": order.mobile,
                Status: order.email,
                Priority: order.priority,
            }))
        );
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Orders");
        XLSX.writeFile(wb, "table_data.xlsx");
    };

    //Add to Community Contacts
    const router = useRouter();

    const addtoCommunityContact = () => {
        router.push("/addcomcon_cc"); // Navigate to the 'lead' page
    };

    const [comcons, setComcons] = useState<Comcon[]>([]);
    const [currentComcons, setCurrentComcons] = useState<Comcon[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchComcons() {
            try {
                const response = await fetch(`/api/comcon_ld?page=${currentPage}&items=${itemsPerPage}`);

                const data = await response.json();
                if (data.comcon_data !== undefined) {
                    const totalPage = Math.ceil(data.totalComcon / itemsPerPage);
                    const lastIndex = currentPage * itemsPerPage;

                    setComcons(data.comcon_data);
                    setCurrentComcons(data.comcon_data.slice(lastIndex - itemsPerPage, lastIndex));
                    // setFormData({
                    //     fname: data.teacher_data.fname,
                    //     lname: data.teacher_data.lname,
                    //     gender: data.teacher_data.gender,
                    //     email: data.teacher_data.email,
                    //     status: data.teacher_data.status,
                    //     mobile: data.teacher_data.mobile,
                    // });
                    setTotalPages(totalPage);

                } else {

                    setComcons([]); // Ensure leads remains an array
                    setCurrentComcons([]);

                }
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        }
        fetchComcons();
    }, [currentPage, itemsPerPage]);




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
        setComcons([]);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page when changing rows per page
    };


    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-4 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Community Contacts Name:</label>
                        <input type="text" className="px-4 py-2 w-1/8 dark:bg-gray-900 text-gray-700 border text-sm rounded-lg" placeholder="Search" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="px-4 py-2 dark:bg-gray-900 text-gray-700 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="self-end">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
                <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex justify-start">
                            <button
                                onClick={addtoCommunityContact}
                                className="px-2 py-1 bg-blue-600 text-white rounded-lg"
                            >
                                Add Community Contacts
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
                                            First Name
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Last Name
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Institution
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Role
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Description
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Phone Number
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                        >
                                            Email
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>
                                {/* Table Body */}
                                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                    {Array.isArray(currentComcons) && currentComcons.length > 0 ? (
                                        currentComcons.map((comcon: Comcon) => (
                                            <TableRow key={comcon.id}>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.fname}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.lname}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.institution}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.role}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.descrip}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.mobile}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                                    {comcon.email}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        // If no leads are found, display a "No results found" row
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


        </div>
    );
}
