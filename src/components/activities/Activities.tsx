
"use client";
import React, { useState } from "react";
import { Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import * as XLSX from "xlsx";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
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
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
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
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
     // role: "Project Manager",
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
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
     // role: "Content Writing",
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
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
     // role: "Digital Marketer",
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
      image: "/images/user/user-21.jpg",
      name: "Carla George",
     // role: "Front-end Developer",
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
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter dropdown visibility

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      tableData.map((order) => ({
        Contact: order.user.name,
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
      {/* Button Container */}
      <div className="flex justify-between mb-6">
        <div className="space-x-2">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            My Activies
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            Create Activity
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            Add Completed Activity
          </button>
        </div>

        {/* Filter Button with reduced width */}
        <button
        className="px-4 py-2 bg-gray-200 rounded-lg flex items-center gap-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle filter visibility
        >
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Editable Combo Boxes above Filter */}
      {isFilterOpen && (
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2">
             {/* Label and Combo Box */}
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Activity Type:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                <option value="">All</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  Select an option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assigned To:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  Select an option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Activity Group:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  Select an option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Search Date Range by:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  Select an option
                </option>
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
                <option value="2">Option 2</option>
              </select>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/4" defaultValue="">
                <option value="" disabled hidden >
                  Select an option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  Select an option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
            <div>
            
            </div>
            <div style={{marginTop: '15px'}}>
              <button onClick={exportToExcel}
                className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
              >Search
              </button>
            </div>
            <div>
            <input type="checkbox" className="mr-2" />
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Show Billing Exceptions Activities Only Search My Activities</label>
              
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <Table>
              {/* Table Header */}
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Contact
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Contact Type
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Subject
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Comments
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Contact Info
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Priority
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Due Date
                  </TableCell>
                </TableRow>
              </TableHeader>
              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {tableData.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-center">
                      <div className="flex items-center justify-start gap-3">
                        <div className="w-10 h-10 overflow-hidden rounded-full">
                          <Image
                            width={40}
                            height={40}
                            src={order.user.image}
                            alt={order.user.name}
                          />
                        </div>
                        
                          <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {order.user.name}
                          </span>
                       
                      </div>
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
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {order.dueDate}
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
              className={`w-8 h-8 rounded-full ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
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
