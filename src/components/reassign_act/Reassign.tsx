"use client";
import React from "react";
// import { Filter } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import Badge from "../ui/badge/Badge";
// import Image from "next/image";
// import * as XLSX from "xlsx";

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

// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       //image: "/images/user/user-17.jpg",
//       firstName: "Lindsey",
//       lastName: "Curtis"
//     },
//     contactType: "Student",
//     subject: "Math",
//     contactInfo: "01234567890",
//     status: "Started",
//     priority: "Normal",
//     dueDate: "26/11/23",
//   },
//     {
//     id: 2,
//     user: {
//       //image: "/images/user/user-18.jpg",
//       firstName: "Kaiya",
//       lastName: "George"
//      // role: "Project Manager",
//     },
//     contactType: "Student",
//     subject: "Math",
//     contactInfo: "01234567890",
//     status: "Started",
//     priority: "Normal",
//      dueDate: "26/11/23"
//   },
//   {
//     id: 3,
//     user: {
//       //image: "/images/user/user-17.jpg",
//       firstName: "Zain",
//       lastName: "Geidt"
//      // role: "Content Writing",
//     },
//     contactType: "Student",
//     subject: "Math",
//     contactInfo: "01234567890",
//     status: "Started",
//     priority: "Normal",
//      dueDate: "26/11/23"
//   },
//   {
//     id: 4,
//     user: {
//       //image: "/images/user/user-20.jpg",
//       firstName: "Abram",
//       lastName: "Schleifer"
//      // role: "Digital Marketer",
//     },
//     contactType: "Student",
//     subject: "Math",
//     contactInfo: "01234567890",
//     status: "Started",
//     priority: "Normal",
//      dueDate: "26/11/23"
//   },
//   {
//     id: 5,
//     user: {
//       //image: "/images/user/user-21.jpg",
//       firstName: "Carla",
//       lastName: "George"
//      // role: "Front-end Developer",
//     },
//     contactType: "Student",
//     subject: "Math",
//     contactInfo: "01234567890",
//     status: "Started",
//     priority: "Normal",
//     dueDate: "26/11/23"
//   },
// ];

export default function BasicTableOne() {

  return (
    <div>
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2">
             {/* Label and Combo Box */}
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assign Activities From:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                <option value="">All</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assign Activities To:</label>
              <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                <option value="">Option 1</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div className="self-end" style={{marginTop: '15px'}}>
              <button 
                className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
              >Save
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
