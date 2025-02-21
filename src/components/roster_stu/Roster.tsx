
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
// import * as XLSX from "xlsx";

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
    {
        id: 2,
        user: {
            firstName: "Kaiya", lastName: "George"
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


    const exportToExcel = () => {
        // const ws = XLSX.utils.json_to_sheet(
        //     tableData.map((order) => ({
        //         "First Name": order.user.firstName,
        //         "Last Name": order.user.lastName,
        //         "Contact Type": order.contactType,
        //         Subject: order.subject,
        //         "Contact Info": order.contactInfo,
        //         Status: order.status,
        //         Priority: order.priority,
        //         "Due Date": order.dueDate,
        //     }))
        // );
        // const wb = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, "Orders");
        // XLSX.writeFile(wb, "table_data.xlsx");
    };

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-5 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button onClick={exportToExcel}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Refresh
                        </button>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <button onClick={exportToExcel}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg w-1/2"
                        >IN-001
                        </button>
                    </div>
                    <div>
                        <button onClick={exportToExcel}
                            className="px-4 py-2 bg-orange-600 text-white rounded-lg w-1/2"
                        >OUT-123
                        </button>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Checked In Only </label>
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
                                        Membership
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Delivery
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Remaining
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Time In
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
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                           {<label>---</label>}
                                        </TableCell>
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {<Button onClick={exportToExcel}
                                                className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                            >- - : - -
                                            </Button>}
                                        </TableCell><TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            <div className="flex item-center justify-center gap-x-2">
                                                {<Button onClick={exportToExcel}
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg "
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>

                                                </Button>}
                                                {<Button onClick={exportToExcel}
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                                >45 Min
                                                </Button>}
                                                {<Button onClick={exportToExcel}
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                                >60 Min
                                                </Button>}
                                                {<Button onClick={exportToExcel}
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                                >90 Min
                                                </Button>}
                                            </div>
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
};
