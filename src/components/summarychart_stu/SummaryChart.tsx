
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
    {
        id: 3,
        user: {
            firstName: "Zain", lastName: "Geidt"
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
            firstName: "Abram", lastName: "Schleifer"
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
            firstName: "Carla", lastName: "George"
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Report Mode:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value=""></option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/4" defaultValue="">
                            <option value="" disabled hidden >
                                Select an option
                            </option>
                            <option value="1">Option 1</option>
                        </select>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/4" defaultValue="">
                            <option value="" disabled hidden >
                                Select an option
                            </option>
                            <option value="1">Option 1</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                            <option value=""></option>
                            <option value="1">Option 1</option>
                        </select>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                <div className="max-w-full overflow-x-auto">
                    <div className="min-w-[1102px]">

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
