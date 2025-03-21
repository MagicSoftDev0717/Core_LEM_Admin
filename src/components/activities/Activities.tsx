
"use client";
import React, { useState } from "react";
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
  user: {
    // image: string;
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
      // image: "/images/user/user-17.jpg",
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
      // image: "/images/user/user-18.jpg",
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
                    Contact
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                  >
                    Contact Type
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                  >
                    Subject
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                  >
                    Comments
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-300"
                  >
                    Contact Info
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
                    <TableCell className="px-5 py-4 sm:px-6 text-center">
                      <div className="flex items-center justify-center gap-3">
                        {/* <div className="w-10 h-10 overflow-hidden rounded-full">
                          <Image
                            width={40}
                            height={40}
                            src={order.user.image}
                            alt={order.user.name}
                          />
                        </div> */}

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

      {/* Pagination and Export to Excel button aligned */}
      <div className="flex justify-between items-center mt-4">
        {/* Pagination (Centered) */}
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

      <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[600px] p-5 lg:p-10">
        <h2 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">Edit Activity</h2>
        {selectedActivity && (
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
            <div className="col-span-1">
              <Label>Subject:</Label>
              <Input type="text" defaultValue={selectedActivity.subject} />
            </div>
            <div className="col-span-1">
              <Label>Assign to:</Label>
              <Input type="text" defaultValue={selectedActivity.user.name} />
            </div>
            <div className="col-span-1">
              <Label>Activity Group:</Label>
              <Input type="text" defaultValue={selectedActivity.priority} />
            </div>
            <div className="col-span-1">
              <Label>Activity Type:</Label>
              <Input type="text" defaultValue={selectedActivity.priority} />
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
              <Input type="text" defaultValue={selectedActivity.priority} />
            </div>
            <div className="col-span-1">
              <Label>Reminder:</Label>
              <Input type="text" defaultValue={selectedActivity.priority} />
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
