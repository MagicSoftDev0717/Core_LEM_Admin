
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
// import Badge from "../ui/badge/Badge";
// import Image from "next/image";
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

  //Add to Guardian
  const router = useRouter();

  const addToGuardian = () => {
    router.push("/addguardian_gu"); // Navigate to the 'addguardian' page
  };

  return (
    <div>
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-2">
          {/* Label and Combo Box */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Guardian Name:</label>
            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
              <option value="">--Select--</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Lead/Account:</label>
            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
              <option value="">--Select--</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Filter:</label>
            <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
              <option value="">--Select--</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            {/* Start Field */}
            <div className="flatpickr-wrapper flex flex-col w-1/3"> {/* Adjusted width */}
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                From:
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
            <div className="flatpickr-wrapper flex flex-col w-1/3"> {/* Adjusted width */}
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                To:
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

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start" style={{ marginBottom: '10px' }}>
          <button onClick={addToGuardian}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Guardian
          </button>
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
                    Created Date
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Lead/Account
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Mobile Phone
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Mailing City
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Mailing Country
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
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {order.status}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {order.priority}
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
    </div>
  );
}
