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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hold Status:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-xs dark:text-gray-500 w-1/2">
                            <option value="">All</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Delivery Status:</label>
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

                    <div className="self-end" style={{ marginTop: '15px', marginLeft: '160px' }}>
                        <button
                            className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/3"
                        >Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <div className="space-y-6">
                    <div className="grid gird-cols-1 gap-x-8 gap-y-5 xl:grid-cols-2">
                        <div className="space-y-3">
                            <div className="overflow-hidden rounded-xl bg-brand-50">
                                <div className="flex cursor-pointer items-center justify-between px-6 py-4 bg-brand-50 dark:bg-brand-100">
                                    <h4 className="text-lg font-medium text-gray-800">Summary:</h4>
                                    <button className="duration-200 text-gray-800 dark:text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>

                                    </button>
                                </div>
                                <div className="p-6 border-t border-brand-100 dark:border-brand-200">
                                    <p className="text-base text-gray-800">
                                        Enrollments with Holds:<br />
                                        Holds / Enrollments:<br/>
                                        Ending Holds:<br />
                                        Starting Holds:
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="overflow-hidden rounded-xl bg-brand-50">
                                <div className="flex cursor-pointer items-center justify-between px-6 py-4 bg-brand-50 dark:bg-brand-100">
                                    <h4 className="text-lg font-medium text-gray-800">Hold Status Definitions:</h4>
                                    <button className="duration-200 text-gray-800 dark:text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-6 border-t border-brand-100 dark:border-brand-200">
                                    <p className="text-base text-gray-800">
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-xl bg-brand-50">
                                <div className="flex cursor-pointer items-center justify-between px-6 py-4 bg-brand-50 dark:bg-brand-100">
                                    <h4 className="text-lg font-medium text-gray-800">Summary Box definitions:</h4>
                                    <button className="duration-200 text-gray-800 dark:text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-6 border-t border-brand-100 dark:border-brand-200">
                                    <p className="text-base text-gray-800">
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

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
                                        Hold Status
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Holds
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
                                        Account Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Guardian Contact
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Membership Type
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Currnt Status
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
