
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
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
    CalenderIcon
} from "../../icons/index";

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

    const [dateOfRoster, setDateOfRoster] = useState("");

    const handleDateofRoster = (date: Date[]) => {
        setDateOfRoster(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    return (
        <div>
            <div className="mb-6">
                <div className="grid grid-cols-4 flex items-center justify-center gap-2">
                    {/* Label and Combo Box */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student Name:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="Type a name" />
                    </div>

                    <div className="flex items-center justify-start gap-2">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Scan QR
                        </button>
                    </div>

                    <div className="items-center justify-start gap-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="all">All</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>
                    
                    <div className="items-center justify-start gap-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sessions:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                        {/* Start Field */}
                        <div className="flatpickr-wrapper flex flex-col w-1/2"> {/* Adjusted width */}
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Date:
                            </label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr
                                    value={dateOfRoster} // Set the value to the state
                                    onChange={handleDateofRoster} // Handle the date change
                                    options={{
                                        dateFormat: "Y-m-d", // Set the date format
                                    }}
                                    placeholder="Select..."
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

                    <div className="flex items-center justify-start gap-2">
                        <button
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg w-1/2"
                        >IN-001
                        </button>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                        <button
                            className="px-4 py-2 bg-orange-600 text-white rounded-lg w-1/2"
                        >OUT-123
                        </button>
                    </div>

                    <div className="flex justify-start items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Checked In Only </label>
                    </div>

                    <div className="items-center justify-start mt-4">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
                        >Refresh
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
                                        Current Status
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
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Time Out
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Logs
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            {/* Table Body */}
                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                {filteredData.map(order => (
                                    <TableRow key={order.id}>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.user.lastName}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.subject}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            <button
                                                onClick={toggleSwitch}
                                                className={`w-20 px-4 py-2 rounded-full text-white font-semibold transition duration-300
                                                 ${isActive ? "bg-yellow-500" : "bg-gray-500"}`}
                                            >
                                                {isActive ? "In" : "Out"}
                                            </button>
                                        </TableCell>
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {<Button
                                                className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                            >- - : - -
                                            </Button>}
                                        </TableCell>
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            <div className="flex item-center justify-center gap-x-2">
                                                {<Button
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg "
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                    </svg>

                                                </Button>}
                                                {<Button
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                                >45 Min
                                                </Button>}
                                                {<Button
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                                >60 Min
                                                </Button>}
                                                {<Button
                                                    className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                                >90 Min
                                                </Button>}
                                            </div>
                                        </TableCell>
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {<Button
                                                className="px-1 py-1 bg-blue-600 text-white rounded-lg"
                                            >- - : - -
                                            </Button>}
                                        </TableCell>
                                        <TableCell className="px- py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {<Button
                                                className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
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
