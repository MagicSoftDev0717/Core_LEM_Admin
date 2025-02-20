
"use client";
import React, { useState } from "react";
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

];

export default function BasicTableOne() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;


    return (
        <div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                <div className="max-w-full overflow-x-auto">
                    <div className="min-w-[1102px]">
                        <Table>
                            {/* Table Header */}
                            <TableHeader className="dark:bg-gray-500 border-b border-gray-100 dark:border-white/[0.5]">
                                <TableRow>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                        Setting Description
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                        UK Training
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
