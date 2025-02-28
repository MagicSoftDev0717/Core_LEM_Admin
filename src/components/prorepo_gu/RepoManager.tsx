
"use client";
import React from "react";
import "flatpickr/dist/themes/light.css";

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

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                    {/* Label and Combo Box */}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centre:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">UK Traning</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>



                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4 mb-6">
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
                                        Total Students
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Total Guardians
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Guardian Opt-outs
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Blocked Email
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Excluded Students
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                                    >
                                        Total Emails
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className="grid grid-cols-5 gap-2">
                    {/* Label and Combo Box */}
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Current Batch Details
                        </button>
                    </div>
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Submit Current Batch
                        </button>
                    </div>
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Batch Send History
                        </button>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="mb-6">
                <div className="grid grid-cols-5 gap-2">
                    <div>
                        <label className="text-4x1 font-medium text-gray-700 dark:text-gray-400">Custom Settings</label>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Change Email Format
                        </button>
                    </div>
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Change Time Frame
                        </button>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
