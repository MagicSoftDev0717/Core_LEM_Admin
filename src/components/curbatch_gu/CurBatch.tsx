
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../ui/table";


export default function BasicTableOne() {

    const router = useRouter();
    const goToBack = () => {
        router.push("/prorepo_gu");
    };

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-3 gap-2">
                    {/* Label and Combo Box */}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Students:</label>
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
                    <div></div>
                    <div className="col-span-1">
                        {/* <Label>Email:</Label> */}
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Exclude All from Batch
                        </label>
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
                                        Student
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Guardian
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Account
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Active Learning Plans
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Last Mo. Attendance
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Last Mo. Skills Mastered
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Skills Currently Assigned
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Total LP Skills Mastered
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                <TableRow>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        Student 01
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        Gua. 01
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        ACC 01, 02
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        01
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        01
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        00
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        21
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                        01
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                {/* Pagination (Centered) */}
                <div className="flex justify-center space-x-2 flex-grow">
                    {/* {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`w-8 h-8 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))} */}
                </div>

                {/* Export to Excel button (Right aligned) */}
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Export to Excel
                    </button>
                    <button onClick={goToBack}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Go Back
                    </button>
                </div>
                
            </div>
        </div>
    );
}
