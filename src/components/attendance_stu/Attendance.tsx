
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
            firstName: "Lindsey", lastName: "Curtis"
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
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    const filteredData = selectedLetter
        ? tableData.filter(order => order.user.firstName.startsWith(selectedLetter))
        : tableData;

    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student Name:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="Type a name"/>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/3"
                        >Scan QR
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end space-x-2 mb-4">
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
                                        Current Status
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
                                        Student Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Last Activity
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Logos
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {filteredData.map(order => (
                                    <TableRow key={order.id}>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            <button
                                                onClick={toggleSwitch}
                                                className={`w-20 px-4 py-2 rounded-full text-white font-semibold transition duration-300
                                                 ${isActive ? "bg-yellow-500" : "bg-gray-500"}`}
                                            >
                                                {isActive ? "In" : "Out"}
                                            </button>
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
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {<Button
                                                className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/3"
                                            >Check
                                            </Button>}
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
            </div>
        </div>
    );
}
