
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Filter } from "lucide-react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
  CalenderIcon
} from "../../icons/index";
import * as XLSX from "xlsx";

import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import { useModal } from "@/hooks/useModal";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Order {
  id: number;
  taskType: string;
  stuConcern: string;
  parConcern: string;
  priPhone: string;
  status: string;
  priority: string;
  dueDate: string;
}

const tableData: Order[] = [
  {
    id: 1,
    taskType: "Call",
    stuConcern: "zzzzzz",
    parConcern: "ooo",
    priPhone: "01234567890",
    status: "Started",
    priority: "later",
    dueDate: "26/11/23",
  },
  {
    id: 2,
    taskType: "Call",
    stuConcern: "xxx",
    parConcern: "mmm",
    priPhone: "01234567890",
    status: "Started",
    priority: "soon",
    dueDate: "26/11/23",
  },
  {
    id: 3,
    taskType: "Call",
    stuConcern: "xxx",
    parConcern: "mmm",
    priPhone: "01234567890",
    status: "Started",
    priority: "urgent",
    dueDate: "26/11/23",
  },

];

export default function BasicTableOne() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter dropdown visibility
  const { isOpen, openModal, closeModal } = useModal();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Order | null>(null);

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
        "Task Type": order.taskType,
        "Student Concerned": order.stuConcern,
        "Parent Concerned": order.parConcern,
        "Primary Phone": order.priPhone,
        Status: order.status,
        Priority: order.priority,
        "Due Date": order.dueDate,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "table_data.xlsx");
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  const openEditModal = (activity: Order) => {
    setSelectedActivity(activity);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setSelectedActivity(null);
  };

  /////////Pagination//////////
  const getPageNumbers = (currentPage: number, totalPages: number) => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPage >= totalPages - 2) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <div>
      {/* Button Container */}
      <div className="flex justify-between mb-6">
        <div className="space-x-2">
          <Button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            My Activies
          </Button>

          <Button onClick={openModal}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            Create Activity
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            className="max-w-[600px] p-5 lg:p-10"
          >
            <h2 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">Create Activity</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
              <div className="col-span-1">
                <Label>Contact Type:</Label>
                <Input type="text" placeholder="Guardian Email Bounced..." />
              </div>
              <div className="col-span-1">
                <Label>Contact Name:</Label>
                <Input type="text" placeholder="Unassigned" />
              </div>
              <div className="col-span-1" style={{ marginTop: '25px' }}>
                <Button size="sm" onClick={handleSave} >
                  Search
                </Button>
              </div>
            </div>
          </Modal>

          <Button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            Add Completed Activity
          </Button>
        </div>

        {/* Filter Button with reduced width */}
        <Button
          className="px-4 py-2 bg-gray-500 rounded-lg flex items-center gap-2"
          onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle filter visibility
        >
          <Filter size={16} /> Filter
        </Button>
      </div>

      {/* Editable Combo Boxes above Filter */}
      {isFilterOpen && (
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2">
            {/* Label and Combo Box */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Activity Type:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm  w-1/2">
                <option value="">--Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assigned To:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Activity Group:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Search Date Range by:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              {/* Start Field */}
              <div className="flatpickr-wrapper flex flex-col w-1/4"> {/* Adjusted width */}
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
              <div className="flatpickr-wrapper flex flex-col w-1/4"> {/* Adjusted width */}
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
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-1/2" defaultValue="">
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
            <div>

            </div>
            <div style={{ marginTop: '15px' }}>
              <Button
                className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
              >Search
              </Button>
            </div>
            <div>
              <input type="checkbox" className="mr-2 dark:bg-gray-900" />
              <label className="text-sm font-medium text-gray-700 dark:text-gray-500">Show Billing Exceptions Activities Only Search My Activities</label>

            </div>
          </div>
        </div>
      )}
      <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[1102px]">
              <Table>
                {/* Table Header */}
                <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                  <TableRow>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Task Type
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Student Concerned
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Parent Concerned
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Primary Phone Number
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Status
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Priority
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                    >
                      Due Date
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
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
                        {order.taskType}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                        <Link href="/students">{order.stuConcern}</Link>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400 cursor-pointer">
                      <Link href="/leads">{order.parConcern}</Link>
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400 cursor-pointer">
                        {order.priPhone}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                        {order.status}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm">
                        {order.priority === "urgent" ? (
                          <span className="bg-error-500 border border-gray-600 dark:border-gray-300 text-error-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        ) : order.priority === "soon" ? (
                          <span className="bg-warning-500 border border-gray-600 dark:border-gray-300 text-warning-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        ) : order.priority === "later" ? (
                          <span className="bg-success-500 border border-gray-600 dark:border-gray-300 text-success-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        ) : (
                          <span>{order.priority}</span> // Default case (optional)
                        )}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                        {order.dueDate}
                      </TableCell>
                      <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-gray-500" onClick={() => openEditModal(order)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
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
        <div className="border border-t-0 rounded-b-xl border-gray-100 py-4 pl-[18px] pr-4 dark:border-white/[0.05]">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
            <div className="flex justify-center mt-4 space-x-2 flex-grow">
              {/* First Page Button - Disabled on first page */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`w-8 h-8  flex rounded-full items-center justify-center ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
              </button>

              {/* Previous Page Button - Disabled on first page */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-8 h-8 flex rounded-full items-center justify-center ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                <span><svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z" fill=""></path></svg></span>
              </button>

              {/* Page Numbers */}
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-full ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                  {page}
                </button>
              ))}

              {/* Ellipsis before the last page when necessary */}
              {totalPages > 5 && currentPage < totalPages - 2 && <span className="w-8 h-8 flex items-center justify-center dark:text-gray-300">...</span>}

              {/* Last Page Button when not already shown */}
              {totalPages > 5 && !pageNumbers.includes(totalPages) && (
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`w-8 h-8 rounded-full ${currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                  {totalPages}
                </button>
              )}

              {/* Next Page Button - Disabled on last page */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 flex rounded-full items-center justify-center ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
              ><span><svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z" fill=""></path></svg></span>
              </button>

              {/* Last Page Button - Disabled on last page */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 flex rounded-full items-center justify-center  ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
              </button>
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
      </div>

      {/* Pagination and Export to Excel button aligned */}
      {/* <div className="flex justify-between items-center mt-4">
     
        <div className="flex justify-center space-x-2 flex-grow">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

       
        <div className="flex justify-end">
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Export to Excel
          </button>
        </div>
      </div> */}

      <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[600px] p-5 lg:p-10">
        <h2 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">Edit Activity</h2>
        {selectedActivity && (
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
            <div className="col-span-1">
              <Label>Task Type:</Label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-full" defaultValue={selectedActivity.taskType}>
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="print">Print</option>
                <option value="order">Order</option>
                <option value="mark">Mark</option>
                <option value="finance">Finance</option>
                <option value="infoupdate">Info update</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="col-span-1">
              <Label>Student Concerned:</Label>
              <Input type="text" defaultValue={selectedActivity.stuConcern} />
            </div>
            <div className="col-span-1">
              <Label>Parent Concerned:</Label>
              <Input type="text" defaultValue={selectedActivity.parConcern} />
            </div>
            <div className="col-span-1">
              <Label>Primary Phone:</Label>
              <Input type="text" defaultValue={selectedActivity.priPhone} />
            </div>
            <div className="col-span-1">
              <Label>Status:</Label>
              <Input type="text" defaultValue={selectedActivity.status} />
            </div>
            <div className="col-span-1">
              <Label>Due Date:</Label>
              <Input type="text" defaultValue={selectedActivity.dueDate} />
            </div>
            <div className="col-span-1">
              <Label>Priority:</Label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg dark:text-gray-500 text-sm w-full" defaultValue={selectedActivity.priority}>
                <option value="" disabled hidden >
                  --Select--</option>
                <option value="later">Later</option>
                <option value="soon">Soon</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div className="col-span-3 text-right">
              <Button size="sm" onClick={closeEditModal}>
                Cancel
              </Button>
              <Button size="sm" className="ml-2 bg-blue-500 text-white" onClick={() => console.log("Edit Saved")}>
                Save
              </Button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}
