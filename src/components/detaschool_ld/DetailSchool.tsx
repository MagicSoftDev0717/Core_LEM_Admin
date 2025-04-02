"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
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
import { BsSave2 } from "react-icons/bs";

// interface SchoolDetails {
//     id: number | null;
//     sname: string | null;
//     level: string | null;
//     type: string | null;
//     enroll: string | null;
//     createdAt: string | null;
//     updatedAt: string | null;
//     site: string | null;
//     email: string | null;
//     number_s: string | null;
//     area: string | null;
//     postalCode: string | null;
//     address1: string | null;
//     address2: string | null;
//     city: string | null;
//     county: string | null;

// }

interface SchoolVisits {
    id: number | null;
    school_id: number | null;
    v_date: string | null;
    reason: string | null;
    p_visiting: string | null;
    p_visited: string | null;
    leaflet: string | null;
    notes: string | null;

}


export default function BasicTableOne({ id }: { id: number }) {

    const router = useRouter();

    const handleSave = () => {
        router.push("/school_ld"); // Navigate to the 'Teacher' page
    };
    const handleCancel = () => {
        router.push("/school_ld"); // Navigate to the 'lead' page
    };
    const [school, setSchool] = useState({
        sname: "",
        level: "",
        type: "",
        enroll: "",
        site: "",
        email: "",
        number_s: "",
        area: "",
        postalCode: "",
        address1: "",
        address2: "",
        city: "",
        county: "",
        createdAt: "",
        updatedAt: ""
    });

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();
        const sec = String(date.getSeconds()).padStart(2, '0');
        const min = String(date.getMinutes() + 1).padStart(2, '0'); // Months are zero-indexed
        const hr = date.getHours();
        return `${year}-${month}-${day} ${hr}:${min}:${sec}`;
    };


    useEffect(() => {

        if (!id) return; // Prevent execution if id is not yet available
        async function fetchSchools() {

            try {
                const response = await fetch(`/api/details_sc/${id}`);
                const data = await response.json();
                if (data.school_data !== undefined) {
                    setSchool(data.school_data);
                } else {
                    console.error("API response is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching schools:", error);
            }
        }
        fetchSchools();

    }, [id]);


    const [showAddTable, setShowAddTable] = useState(false);
    const toggleVisitTable = () => {
        setShowAddTable((prev) => !prev);
        setShowAllTable(false);
    };

    const [visitRows, setVisitRows] = useState<SchoolVisits[]>([
        {
            id: null,
            v_date: "",
            reason: "",
            p_visiting: "",
            p_visited: "",
            leaflet: "",
            notes: "",
            school_id: Number(id)
        },

    ]);

    const addNewVisitRow = () => {
        setVisitRows([
            ...visitRows,
            {
                id: null,
                v_date: "",
                reason: "",
                p_visiting: "",
                p_visited: "",
                leaflet: "",
                notes: "",
                school_id: Number(id),
            },
        ]);
    };

    const saveVisitedLog = async (rowIndex: number) => {
        try {
            const row = visitRows[rowIndex]; // Get only the row being saved
            if (!row) return;

            const method = row.id ? "PUT" : "POST"; // If ID exists, update; otherwise, create
            const url = row.id ? `/api/school_visit/${row.id}` : "/api/school_visit";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(row),
            });

            if (!response.ok) throw new Error("Failed to save visit log");
            const data = await response.json();

            // 🔹 Update state with saved row data (including generated ID)
            setVisitRows((prevRows) =>
                prevRows.map((r, index) => (index === rowIndex ? { ...r, id: data.id } : r))
            );

            alert("Visit logs saved successfully!");
        } catch (error) {
            console.error("Error saving visit log:", error);
            alert("Error saving visit log.");
        }
    };

    const handleRowChange = (index: number, field: keyof SchoolVisits, value: string) => {
        const updatedRows = visitRows.map((row, i) =>
            i === index ? { ...row, [field]: value } : row
        );
        setVisitRows(updatedRows);
    };

    //////////////////////

    const [showAllTable, setShowAllTable] = useState(false);
    const [allVisits, setAllVisits] = useState<SchoolVisits[]>([]); // Store all visits from DB

    const toggleALLVisitTable = () => {
        setShowAllTable((prev) => !prev);
        setShowAddTable(false);

        if (!showAllTable) {
            fetchAllVisits(); // Fetch data only when showing "All Visits"
        }
    };

    const fetchAllVisits = async () => {
        try {
            const response = await fetch(`/api/school_visit/${id}`);
            if (!response.ok) throw new Error("Failed to fetch visits");
            const data = await response.json();
            setAllVisits(data);
        } catch (error) {
            console.error("Error fetching visits:", error);
        }
    };




    return (
        <div>
            <div className="grid grid-cols-6 gap-x-1 gap-y-1 mt-6">
                <Button size="sm" variant="outline" onClick={handleSave}>Save</Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>Cancel</Button>
            </div>

            <hr className="my-4" />
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="p-4 rounded-2xl bg-gray-300 dark:bg-gray-700">
                    <h4 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">
                        School Information
                    </h4>
                    {school ? (
                        <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">{school.sname}</h1>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        {school?.email}
                    </h5>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>School Name:</Label>
                        <Input type="text" defaultValue={school?.sname || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Email:</Label>
                        <Input type="text" defaultValue={school?.email || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Phone:</Label>
                        <Input type="text" />
                    </div>

                    <div className="col-span-1">
                        <Label>Website:</Label>
                        <Input type="text" defaultValue={school?.site || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Website PSTA:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>District:</Label>
                        <Input type="text" defaultValue={school?.area || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>School Level:</Label>
                        {/* <Input type="text"  /> */}
                        <select className="px-6 py-3 bg-gray-200 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full"
                            value={school?.level || ""} // Use value instead of defaultValue
                            onChange={(e) => setSchool({ ...school, level: e.target.value })} // Update state
                        >
                            <option value="">--Select--</option>
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <Label>School Type:</Label>
                        <select
                            className="px-6 py-3 bg-gray-200 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full"
                            value={school?.type || ""} // Use value instead of defaultValue
                            onChange={(e) => setSchool({ ...school, type: e.target.value })} // Update state
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
                        <Label>Principal:</Label>
                        <Input type="text" placeholder="Hanan" />
                    </div>

                    <div className="col-span-1">
                        <Label>Assistant:</Label>
                        <Input type="text" placeholder="Ali" />
                    </div>


                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Address Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Address Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
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
                    <Input type="text" defaultValue={school?.postalCode || ""} placeholder="29407" />
                </div>

                <div className="col-span-1">
                    <Label>Country:</Label>
                    <Input type="text" placeholder="United Kingdom" />
                </div>
            </div>

            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">Visits</h4>

            <div className="grid grid-cols-6 gap-x-1 gap-y-1 mt-6 mb-8">
                <Button size="sm" variant="outline" onClick={toggleVisitTable}>
                    {showAddTable ? "Hide Visit -" : "Add Visit +"}
                </Button>

                <Button size="sm" variant="outline" onClick={toggleALLVisitTable}>
                    {showAllTable ? "Hide All Visits" : "All Visits"}
                </Button>
            </div>
            {(showAddTable && !showAllTable) && (
                <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
                    <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex justify-start">
                                <button onClick={addNewVisitRow}
                                    className="px-2 py-1 bg-blue-600 text-white rounded-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                        <div className="max-w-full overflow-x-auto">
                            <div className="min-w-[1102px]">
                                <Table className="w-full border-collapse border border-gray-300">
                                    <TableHeader>
                                        <TableRow className="bg-gray-200 dark:bg-gray-600 text-center dark:text-gray-300">
                                            <TableCell className="border border-gray-300 px-4 py-2">Date</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Reason</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Person visiting</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Person visited</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Leaflets given</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Notes</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Action</TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {visitRows.map((row, rowIndex) => (
                                            <TableRow key={rowIndex}>
                                                <TableCell className="border border-gray-300 w-44">
                                                    <div className="relative w-full h-full">
                                                        <Flatpickr
                                                            value={row.v_date || ""}
                                                            onChange={([selectedDate]) => handleRowChange(rowIndex, "v_date", selectedDate.toISOString().split("T")[0])}
                                                            options={{ dateFormat: "Y-m-d" }}
                                                            placeholder="Select Date"
                                                            className="w-full py-2 pl-3 pr-10 text-sm border border-gray-300 h-11 
                                                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                            dark:bg-gray-800 dark:border-gray-700 dark:text-white"

                                                        />
                                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                                            <CalenderIcon />
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                {["reason", "p_visiting", "p_visited", "leaflet", "notes"].map((field, colIndex) => (
                                                    <TableCell key={colIndex} className="border border-gray-300">
                                                        <input
                                                            type="text"
                                                            className="w-full dark:bg-gray-800 dark:text-gray-300 border-none focus:outline-none"
                                                            value={row[field as keyof SchoolVisits] || ""}
                                                            onChange={(e) => handleRowChange(rowIndex, field as keyof SchoolVisits, e.target.value)}
                                                        />
                                                    </TableCell>
                                                ))}

                                                <TableCell className="dark:bg-gray-800 border border-gray-300 px-4 py-2">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button onClick={() => saveVisitedLog(rowIndex)} className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                                                            <BsSave2 className="w-5 h-auto" />
                                                        </button>
                                                        {/* <button className="text-gray-500 hover:text-error-500">
                                                            <BsTrash3 className="w-5 h-auto" />
                                                        </button> */}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {(!showAddTable && showAllTable) && (
                <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
                    <div className="overflow-hidden border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                        <div className="max-w-full overflow-x-auto">
                            <div className="min-w-[1102px]">
                                <Table className="w-full border-collapse border border-gray-300">
                                    <TableHeader>
                                        <TableRow className="bg-gray-200 dark:bg-gray-600 text-center dark:text-gray-300">
                                            <TableCell className="border border-gray-300 px-4 py-2">Date</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Reason</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Person visiting</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Person visited</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Leaflets given</TableCell>
                                            <TableCell className="border border-gray-300 px-4 py-2">Notes</TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {allVisits.length > 0 ? (
                                            allVisits.map((visit, index) => (
                                                <TableRow key={index} className="dark:bg-gray-800 dark:text-gray-300 text-center">
                                                    <TableCell className="border border-gray-300 px-4 py-2">{visit.v_date}</TableCell>
                                                    <TableCell className="border border-gray-300 px-4 py-2">{visit.reason}</TableCell>
                                                    <TableCell className="border border-gray-300 px-4 py-2">{visit.p_visiting}</TableCell>
                                                    <TableCell className="border border-gray-300 px-4 py-2">{visit.p_visited}</TableCell>
                                                    <TableCell className="border border-gray-300 px-4 py-2">{visit.leaflet}</TableCell>
                                                    <TableCell className="border border-gray-300 px-4 py-2">{visit.notes}</TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell className="text-center py-4">
                                                    No Visit records found.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            )}



            {/* Line Separator */}
            <hr className="my-6" />

            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                    System Information
                </h4>

                <div className="flex flex-col items-start dark:text-gray-300 gap-4">
                    <div className="flex flex-row items-center">
                        <span className="font-bold">Created By:</span>
                        <span></span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="font-bold">Created Date:</span>
                        <span>&nbsp;&nbsp;{formatDate(new Date(school?.createdAt))}</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold">Last Modified By:</span>
                        <span></span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold">Last Modified On:</span>
                        <span>&nbsp;&nbsp;{formatDate(new Date(school?.updatedAt))}</span>
                    </div>
                </div>
            </div>
        </div>


    );

}
