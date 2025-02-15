"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Label from "../form/Label";
//import Button from "../ui/button/Button";
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
  {
    id: 3,
    user: {
      //image: "/images/user/user-17.jpg",
      firstName: "Zain",
      lastName: "Geidt"
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
      //image: "/images/user/user-20.jpg",
      firstName: "Abram",
      lastName: "Schleifer"
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
      //image: "/images/user/user-21.jpg",
      firstName: "Carla",
      lastName: "George"
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

  //Add to Leads
  const router = useRouter();

  const handleDetails = () => {
    router.push("/detail_ac"); // Navigate to the 'lead' page
    // Handle save logic here
    console.log("Saving changes...");

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
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Account Name:</label>
            <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
              <option value="">All</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Account Status:</label>
            <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
              <option value="">Option 1</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Enrolment Status:</label>
            <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
              <option value="">Option 1</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Filter:</label>
            <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
              <option value="">Option 1</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div className="flex items-center gap-0">
            {/* Start Field */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Start:
              </label>
              <select className="px-4 py-2 border rounded-lg text-xs w-32">
                <option value="">Option 1</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            {/* End Field */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                End:
              </label>
              <select className="px-4 py-2 border rounded-lg text-xs w-32">
                <option value="">Option 1</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
            <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
              <option value="">Option 1</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>

          <div></div>
          <div></div>

          <div className="self-end" style={{ marginTop: '15px', marginLeft: '160px' }}>
            <button
              className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/4"
            >Search
            </button>
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
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    First Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Last Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Created Date
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Mobile Phone
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Bill Street
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Billing City
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                  >
                    Account Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
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
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-gray-500" onClick={handleDetails}>
                          {<Label>---</Label>}
                        </button>
                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-gray-500">
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
    </div>
  );
}
