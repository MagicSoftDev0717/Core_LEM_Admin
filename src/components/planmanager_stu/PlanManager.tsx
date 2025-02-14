
"use client";
import React, { useState } from "react";
import Button from "../ui/button/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";
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
    {
        id: 2,
        user: {
            //image: "/images/user/user-18.jpg",
            firstName: "Kaiya",
            lastName: "George"
            // role: "Project Manager",
        },
        contactType: "Student",
        subject: "Math",
        contactInfo: "01234567890",
        status: "Started",
        priority: "Normal",
        dueDate: "26/11/23"
    },
    {
        id: 3,
        user: {
            //image: "/images/user/user-17.jpg",
            firstName: "Zain",
            lastName: "Geidt"
            // role: "Content Writing",
        },
        contactType: "Student",
        subject: "Math",
        contactInfo: "01234567890",
        status: "Started",
        priority: "Normal",
        dueDate: "26/11/23"
    },
    {
        id: 4,
        user: {
            //image: "/images/user/user-20.jpg",
            firstName: "Abram",
            lastName: "Schleifer"
            // role: "Digital Marketer",
        },
        contactType: "Student",
        subject: "Math",
        contactInfo: "01234567890",
        status: "Started",
        priority: "Normal",
        dueDate: "26/11/23"
    },
    {
        id: 5,
        user: {
            //image: "/images/user/user-21.jpg",
            firstName: "Carla",
            lastName: "George"
            // role: "Front-end Developer",
        },
        contactType: "Student",
        subject: "Math",
        contactInfo: "01234567890",
        status: "Started",
        priority: "Normal",
        dueDate: "26/11/23"
    },
];

export default function BasicTableOne() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    //const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter dropdown visibility

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
                <div className="grid grid-cols-3 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value="">All</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Learning Plan:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">LP Item View:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value="">Option 1</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button onClick={exportToExcel}
                            className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>

                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Show Inactive Learning Plan(s)</label>
                    </div>
                    <div>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Show Initial Sort Order</label>
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
                                        First Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Last Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Created Date
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Lead/Account
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Mobile Phone
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Email
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Mailing City
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Mailing Country
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
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.priority}
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
                <div className="flex justify-end gap-2">
                    <Button
                        onClick={exportToExcel}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Export to Excel
                    </Button>
                    <Button
                        onClick={exportToExcel}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Print Mode
                    </Button>
                </div>
            </div>
        </div>
    );
}
