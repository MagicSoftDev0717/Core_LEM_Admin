
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
import Label from "../form/Label";
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
  //Add to Leads
  const router = useRouter();
  const addToEmployee = () => {
    router.push("/addemployee_em"); // Navigate to the 'lead' page
  };

  //Details View
  // const handleDetails = () => {
  //   router.push("/details_ld"); // Navigate to the 'lead' page
  // };

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

  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-6">
        <div className="grid grid-cols-4 gap-2">
          {/* Label and Combo Box */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Employee Name:</label>
            <select className="px-4 py-2 border rounded-lg  dark:bg-gray-900 dark:text-gray-400 text-sm w-1/2">
              <option value="">All</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Employee Status:</label>
            <select className="px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-gray-400 text-sm w-1/2">
              <option value="">Option 1</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
            <select className="px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-gray-400 text-sm w-1/2">
              <option value="">Option 1</option>
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
          <div></div>
        </div>
      </div>


      <div className="flex flex-col justify-end space-x-2 mb-4">
        <div className="flex justify-end">
          <span className="text-gray-900 dark:text-gray-300">Filter by first letter:</span>
        </div>
        <div className="flex justify-end gap-1">
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
      </div>

      <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
        <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex justify-start">
              <button
                onClick={addToEmployee}
                className="px-2 py-1 bg-blue-600 text-white rounded-lg"
              >
                Add Employee
              </button>
            </div>
            <div className="relative z-20 bg-transparent">
              <div className="flex items-center gap-3">
                <button

                  className="px-2 py-1 bg-blue-600 text-white rounded-lg"
                >
                  ORG Chart
                </button>
              </div>
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
                      Title
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      <div className="flex flex-row items-center justify-center gap-1">
                        <Label className="flex ">Role</Label>
                        <select className="dark:bg-gray-900 px-4 py-2 dark:text-gray-500 text-xs w-8"
                        // onChange={(e) => setSelectedSts(e.target.value)}
                        // value={selectedSts}
                        >
                          <option value="all">All</option>
                          <option value="Centre Coordinator">Centre Coordinator</option>
                          <option value="Assistant Centre">Assistant Centre</option>
                          <option value="Coordinator">Coordinator</option>
                          <option value="Lead Tutor">Lead Tutor</option>
                          <option value="Asssessor">Asssessor</option>
                          <option value="Mentor Level 1">Mentor Level 1</option>
                          <option value="Mentor Level 2">Mentor Level 2</option>
                        </select>
                      </div>
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      <div className="flex flex-row items-center justify-center gap-1">
                        <Label className="flex ">Status</Label>
                        <select className="dark:bg-gray-900 px-4 py-2 dark:text-gray-500 text-xs w-8"
                        // onChange={(e) => setSelectedSts(e.target.value)}
                        // value={selectedSts}
                        >
                          <option value="all">All</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Assessed</option>
                          <option value="Frozen">Frozen</option>

                        </select>
                      </div>
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      <div className="flex flex-row items-center justify-center gap-1">
                        <Label className="flex ">Start Date</Label>
                        <div className="relative w-12">
                          <Flatpickr name="l_startdate"
                            // value={dateOfStart} // Set the value to the state
                            // onChange={handleStartDate} // Handle the date change
                            options={{
                              dateFormat: "Y-m-d", // Set the date format
                            }}
                            className="flatpickr-wrapper w-1/6 py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md h-8 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                       dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                          />
                          <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
                            <CalenderIcon />
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      <div className="flex flex-row items-center justify-center gap-1">
                        <Label className="flex ">Inactive Date</Label>
                        <div className="relative w-12">
                          <Flatpickr name="l_startdate"
                            // value={dateOfStart} // Set the value to the state
                            // onChange={handleStartDate} // Handle the date change
                            options={{
                              dateFormat: "Y-m-d", // Set the date format
                            }}
                            className="flatpickr-wrapper w-full py-2 pl-3 pr-10 text-sm border border-gray-300 rounded-md h-8 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                       dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                          />
                          <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
                            <CalenderIcon />
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >

                      <div className="flex flex-row items-center justify-center gap-1">
                        <Label className="flex ">Primary Centre</Label>
                        <select className="dark:bg-gray-900 px-4 py-2 dark:text-gray-500 text-xs w-8"
                        // onChange={(e) => setSelectedSts(e.target.value)}
                        // value={selectedSts}
                        >
                          <option value="all">All</option>
                          <option value="Norbury">Norbury</option>
                          <option value="Thornton Heath">Thornton Heath</option>
                          <option value="Crystal Palace">Crystal Palace</option>
                          <option value="TMitcham">TMitcham</option>
                          <option value="Home">Home</option>
                        </select>
                      </div>
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      Description
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
    </div >
  );
}
