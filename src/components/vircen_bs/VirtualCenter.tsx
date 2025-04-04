
"use client";
import React, { useState } from "react";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
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

    //Open the Postion Modal
    const [isEditOpen, setIsEditOpen] = useState(false);
    const createVirtualCenter = () => {

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
                <div className="flex grid grid-cols-5 gap-3">
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button onClick={() => createVirtualCenter()}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Create Virtual Center
                        </button>
                    </div>
                    <div className="self-end" style={{ marginTop: '15px' }}>
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                        >Defaul Virtual Center
                        </button>
                    </div>
                </div>
            </div>

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
                                        Virtual Center Name
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                        Description
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                        ConexED Groupld
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                        Defaulting Center(s)
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                       Created Date
                                    </TableCell>
                                    <TableCell
                                        isHeader
                                        className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                                    >
                                       Created By
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
                                            {order.subject}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                                            {order.subject}
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
                <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Create Virtual Center</h2>

                <div>

                    {/* Address Information */}


                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-1">
                        <div className="col-span-1">
                            <Label>Virtual Center Name:</Label>
                            <Input type="text" className="w-full" />
                        </div>

                        <div className="col-span-1">
                            <Label>Description:</Label>
                            <Input type="text" className="w-full" />
                        </div>

                        <div className="col-span-1">
                            <Label>ConexED Groupld:</Label>
                            <Input type="text" className="w-full" />
                        </div>

                    </div>

                    <hr className="my-1" />

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-3">
                        <Button size="sm" onClick={closeEditModal} className="bg-gray-500 text-white">
                            Cancel
                        </Button>
                        <Button size="sm" className="bg-blue-500 text-white" onClick={() => console.log("Edit Saved")}>
                            Save
                        </Button>
                    </div>
                </div>
            </Modal>

        </div>
    );
}
