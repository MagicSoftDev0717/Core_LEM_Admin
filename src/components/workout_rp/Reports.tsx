"use client";
import React, { useState } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";

//import Label from "../form/Label";
//import Button from "../ui/button/Button";
import * as XLSX from "xlsx";

interface Order {
    id: number;
    user: {
        //image: string;
        firstName: string;
        lastName: string;
    };
    contactType: string;
    subject: string;
    contactInfo: string;
    priority: string;
    status: string;
    dueDate: string;
}

const tableData: Order[] = [
    {
        id: 1,
        user: {
            //image: "/images/user/user-17.jpg",
            firstName: "Lindsey",
            lastName: "Curtis"
        },
        contactType: "Student",
        subject: "Math",
        contactInfo: "01234567890",
        status: "Started",
        priority: "Normal",
        dueDate: "26/11/23",
    },
];

export default function BasicTableOne() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(
            tableData.map((order) => ({
                "First Name": order.user.firstName,
                "Last Name": order.user.lastName,
                "Contact Type": order.contactType,
                Subject: order.subject,
                "Contact Info": order.contactInfo,
                Status: order.status,
                Priority: order.priority,
                "Due Date": order.dueDate,
            }))
        );
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Orders");
        XLSX.writeFile(wb, "table_data.xlsx");
    };

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-4 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quick Dates:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs dark:text-gray-500 w-1/2">
                            <option value="">All</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs text-gray-500 w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-0">
                        {/* Start Field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Start:
                            </label>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-xs text-gray-500 w-24">
                                <option value="">Option 1</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>

                        {/* End Field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                End:
                            </label>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-xs text-gray-500 w-24">
                                <option value="">Option 1</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Delivery Method:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs text-gray-500 w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs text-gray-500 w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div className="self-end" style={{ marginTop: '15px', marginLeft: '160px' }}>
                        <button
                            className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="grid grid-cols-4 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Had School Work</label>
                    </div>

                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Worked on an Assessment</label>
                    </div>


                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mastered a Mastery Check</label>
                    </div>

                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Received stars</label>
                    </div>

                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Had Session Notes</label>
                    </div>

                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Completed a Mystery Check</label>
                    </div>
                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Need deck updates</label>
                    </div>
                    
                </div>
            </div>

            <div className="mb-6">
                <div className="grid grid-cols-4 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Metirc:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs dark:text-gray-500 w-1/2">
                            <option value="">All</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Operator:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs text-gray-500 w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Operator:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs text-gray-500 w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px', marginLeft: '160px' }}>
                        <button
                            className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
                        >Add
                        </button>
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
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Date
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Student Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Session
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        School Work
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        General Information
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Student Materials
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Notes for this session
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {tableData.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.user.firstName}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.user.lastName}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.contactType}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.subject}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.contactInfo}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.contactInfo}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.status}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            {/* Pagination and Export to Excel button aligned */}
            <div className="flex justify-between items-center mt-4">
                {/* Pagination (Centered) */}
                <div className="flex justify-center space-x-2 flex-grow">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`w-8 h-8 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Export to Excel button (Right aligned) */}
                <div className="flex justify-end">
                    <button
                        onClick={exportToExcel}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >Export to Excel
                    </button>
                </div>
            </div>
        </div>
    );
}
