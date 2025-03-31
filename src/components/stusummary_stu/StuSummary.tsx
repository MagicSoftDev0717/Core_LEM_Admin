
"use client";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
    CalenderIcon
} from "../../icons/index";

export default function BasicTableOne() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const [dateOfStart, setDateOfStart] = useState("");
    const [dateOfEnd, setDateOfEnd] = useState("");

    const handleStartDate = (date: Date[]) => {
        setDateOfStart(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    const handleEndDate = (date: Date[]) => {
        setDateOfEnd(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-6 gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student Name:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="Type a name" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Scan QR
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        {/* Start Field */}
                        <div className="flatpickr-wrapper flex flex-col w-1/2"> {/* Adjusted width */}
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Start:
                            </label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr
                                    value={dateOfStart} // Set the value to the state
                                    onChange={handleStartDate} // Handle the date change
                                    options={{
                                        dateFormat: "Y-m-d", // Set the date format
                                    }}
                                    placeholder="Start Date"
                                    className="w-full py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md h-11 
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                    dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
                                    <CalenderIcon />
                                </span>
                            </div>
                        </div>

                        {/* End Field */}
                        <div className="flatpickr-wrapper flex flex-col w-1/2"> {/* Adjusted width */}
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                End:
                            </label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr
                                    value={dateOfEnd} // Set the value to the state
                                    onChange={handleEndDate} // Handle the date change
                                    options={{
                                        dateFormat: "Y-m-d", // Set the date format
                                    }}
                                    placeholder="End Date"
                                    className="w-full py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md h-11 
                                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                    dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
                                    <CalenderIcon />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sessions:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Report Mode:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="Attendance Total By Day" />
                    </div>

                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Search
                        </button>
                    </div>
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
