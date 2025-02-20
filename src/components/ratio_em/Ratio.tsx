

"use client";
import React, { useState } from "react";
import Button from "../ui/button/Button";
import LineChartOne from "@/components/charts/line/LineChartOne";
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

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-6 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-sm dark:text-gray-500 w-1/2">
                            <option value="">None</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Days:</label>
                        <input type="text" className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-sm w-1/2" placeholder="days" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Interval(min):</label>
                        <input type="text" className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-sm w-1/2" placeholder="minutes" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-sm dark:text-gray-500 w-1/2">
                            <option value="">None</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date:</label>
                        <select className="dark:bg-gray-900 px-2 py-1 border rounded-lg text-sm dark:text-gray-500 w-1/2">
                            <option value="">None</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/3"
                        >Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                <div className="max-w-full overflow-x-auto">
                    <div className="min-w-[1102px]">
                        <div className="px-6 py-5">
                            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Tuesday</h3>
                        </div>
                        <LineChartOne />
                    </div>
                </div>
            </div>
            
            <hr className="my-6" />

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                <div className="max-w-full overflow-x-auto">
                    <div className="min-w-[1102px]">
                        <div className="px-6 py-5">
                            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">Wednesday</h3>
                        </div>
                        <LineChartOne />
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
                {/* <div className="flex justify-end">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >Check In Students
                    </button>
                </div> */}
            </div>
        </div>
    );
}
