"use client";
import React, { useState } from "react";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
    CalenderIcon
} from "../../icons/index";
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
];

export default function BasicTableOne() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    //Date
    const [dateOfStart, setDateOfStart] = useState("");
    const [dateOfEnd, setDateOfEnd] = useState("");

    const handleStartDate = (date: Date[]) => {
        setDateOfStart(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    const handleEndDate = (date: Date[]) => {
        setDateOfEnd(date[0].toLocaleDateString()); // Handle selected date and format it
    };

    //Open the Detail Modal
    const [isEditOpen, setIsEditOpen] = useState(false);
    const handleRevenueComparison = () => {

        setIsEditOpen(true);
    };

    const closeEditModal = () => {
        setIsEditOpen(false);
    };
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assessment Fee:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="£0.00" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Registration Fee:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="£0.00" />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Start Field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Lower Primary
                            </label>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-sm font-medium text-gray-700 items-center justify-center dark:text-gray-300">
                                &nbsp;To&nbsp;
                            </label>
                        </div>
                        {/* End Field */}
                        <div className="flex flex-col" style={{ marginTop: '15px' }}>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cancellation Fee:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="£0.00" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Late Fee:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="£0.00" />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Start Field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Upper Primary
                            </label>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-sm font-medium text-gray-700 items-center justify-center dark:text-gray-300">
                                &nbsp;To&nbsp;
                            </label>
                        </div>
                        {/* End Field */}
                        <div className="flex flex-col" style={{ marginTop: '15px' }}>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assessment Fee Timing:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Billing Day of Month:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" placeholder="£0.00" />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Start Field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Secondary
                            </label>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-sm font-medium text-gray-700 items-center justify-center dark:text-gray-300">
                                &nbsp;To&nbsp;
                            </label>
                        </div>
                        {/* End Field */}
                        <div className="flex flex-col" style={{ marginTop: '15px' }}>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Registration Fee Timing:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Month Amount Timing:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-1/2">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Start Field */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                GCSE
                            </label>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-sm font-medium text-gray-700 items-center justify-center dark:text-gray-300">
                                &nbsp;To&nbsp;
                            </label>
                        </div>
                        {/* End Field */}
                        <div className="flex flex-col" style={{ marginTop: '15px' }}>
                            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-500 w-32">
                                <option value="">--Select--</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-3xl w-1/2">
                <div className="grid grid-cols-4 gap-x-1 gap-y-1 mt-6">
                    <Button size="sm" variant="outline">Discounts</Button>
                    <Button size="sm" variant="outline">Add Discount</Button>
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
                                        Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Description
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                                    >
                                        Amount
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
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                    </svg>
                                                </button>
                                                <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>

                                                </button>
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

                {/* Export to Excel button (Right aligned) */}
                <div className="flex justify-end">
                    <button
                        onClick={exportToExcel}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Export to Excel
                    </button>
                </div>
            </div>

            <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[500px] p-5 lg:p-10">
                <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Revenue Comparison</h2>
                <div>
                    {/* Address Information */}
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-1">

                    </div>

                    <hr className="my-1" />

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3">
                        <Button size="sm" onClick={closeEditModal} className="bg-gray-500 text-white">
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
