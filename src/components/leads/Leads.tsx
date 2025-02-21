
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";
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
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import * as XLSX from "xlsx";

interface Lead {
  id: number;
  fname: string;
  lname: string;
  createdDate: string;
  mobile: string;
  email: string;
  status: string;
}


export default function BasicTableOne() {
  const [currentPage, setCurrentPage] = useState(1);
  const [leads, setLeads] = useState<Lead[]>([]);
  // const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter dropdown visibility
  const totalPages = 5;

  const [dateOfStart, setDateOfStart] = useState("");
  const [dateOfEnd, setDateOfEnd] = useState("");

  const handleStartDate = (date: Date[]) => {
    setDateOfStart(date[0].toLocaleDateString()); // Handle selected date and format it
  };

  const handleEndDate = (date: Date[]) => {
    setDateOfEnd(date[0].toLocaleDateString()); // Handle selected date and format it
  };


  // Fetch leads from the server (Replace with actual API)
  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch(`/api/addlead_ld?page=${currentPage}`);
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging log
        if (data.lead_data !== undefined) {
          setLeads(data.lead_data);
        } else {
          console.error("API response is not an array:", data);
          setLeads([]); // Ensure leads remains an array
        }
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    }
    fetchLeads();
  }, [currentPage]);

  //Add to Leads
  const router = useRouter();
  const addtoLead = () => {
    router.push("/addlead_ld"); // Navigate to the 'lead' page
  };

  //Details View
  const handleDetails = () => {
    router.push("/details_ld"); // Navigate to the 'lead' page
  };


  //Edit Lead
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const openEditModal = (lead: Lead) => {
    setSelectedLead(lead);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setSelectedLead(null);
  };

  //Load the lead data from db

  // Fetch messages from the server with pagination

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      leads.map((order) => ({
        "First Name": order.fname,
        "Last Name": order.lname,
        status: order.status,

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
          <label className="block font-medium text-gray-700 dark:text-gray-300  p-2 rounded-lg text-xl">Lead Management Summary</label>
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                <option value="">All</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Lead Status:</label>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Centres:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                <option value="">--Select--</option>
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

            <div style={{ marginTop: '15px' }}>
              <Button
                className="px-2 py-1 bg-blue-600 text-white rounded-lg w-1/2"
              >Search
              </Button>
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
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Centre
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Open
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Contacted
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Active
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Inactive
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Visited
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    On Hold
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Asmt.Pending
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Assessed
                  </TableCell>
                </TableRow>
              </TableHeader>
              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                <TableRow>
                  <TableCell className="px-5 py-4 sm:px-6 text-center">

                    <span className="block font-medium text-center text-gray-800 text-theme-sm dark:text-white/90">
                      UK Traning
                    </span>

                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    9
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    5
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    34
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    1
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    29
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    02
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    -
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    -
                  </TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>


      {/* Line Separator */}
      <hr className="my-6" />

      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start" style={{ marginBottom: '10px' }}>
          <Button
            onClick={addtoLead}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Lead
          </Button>
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
                    Lead Status
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Student Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    On Hold
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Gender
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Year
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
                {Array.isArray(leads) && leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-center text-theme-sm dark:text-gray-400">
                      {lead.fname}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.lname}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.createdDate}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.mobile}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.email}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.status}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.mobile}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.email}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.status}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      {lead.status}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => openEditModal(lead)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={handleDetails}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 4h.01M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
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
        <div className="flex justify-center mt-4 space-x-2">
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

      <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[1000px] p-5 lg:p-10">
        <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Edit Lead</h2>

        {selectedLead && (
          <div>
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Lead Guardian Information</h4>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-6">
              <div className="col-span-1">
                <Label>Situation</Label>
                <select className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>First Name*:</Label>
                <Input type="text" name="fname" defaultValue={selectedLead.fname} placeholder="Hasan" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Last Name*:</Label>
                <Input type="text" placeholder="Ali" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Home Phone:</Label>
                <Input type="text" placeholder="+09 363 398 46" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Mobile Phone:</Label>
                <Input type="text" placeholder="+09 363 398 46" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Other Phone:</Label>
                <Input type="text" placeholder="+09 363 398 46" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Email:</Label>
                <Input type="text" placeholder="hasaneducationadvisor@gmail.com" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Lead Status:</Label>
                <select className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Rating:</Label>
                <Input type="text" placeholder="" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Referral Account:</Label>
                <Input type="text" placeholder="Team Manager" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Referral Account:</Label>
                <Input type="text" placeholder="Team Manager" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Email:</Label>
                <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-500">Email Opt Out:</label>
              </div>

            </div>
            <hr className="my-1" />

            {/* Address Information */}
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Address Information</h4>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-3">
              <div className="col-span-1">
                <Label>Street Address 1:</Label>
                <Input type="text" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Street Address 2:</Label>
                <Input type="text" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>County:</Label>
                <Input type="text" placeholder="England" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>City:</Label>
                <Input type="text" placeholder="England" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Postal Code:</Label>
                <Input type="text" placeholder="29407" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Country:</Label>
                <Input type="text" placeholder="United Kingdom" className="w-full" />
              </div>
            </div>

            <hr className="my-1" />

            {/* Description Information */}

            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
              Description Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
              <div className="col-span-1">
                <Label>Description:</Label>
                <Input type="text" placeholder="" />
              </div>

              <div className="col-span-1">
                <Label>Customer Comments:</Label>
                <Input type="text" placeholder="" />
              </div>

              <div className="col-span-1"></div>

            </div>

            {/* Line Separator */}
            <hr className="my-1" />


            {/**Lead Interest */}

            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
              Lead Interest
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">

              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Regular Program</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Home School</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Exam Prep</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Summer Program</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Assessment Only</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enrichment</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Private Lessons</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">@Home</label>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Other</label>
              </div>
            </div>

            <hr className="my-1" />

            {/* Lead Source */}
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Lead Source</h4>

            <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-6">

              <div className="col-span-1">
                <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location Visibility</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Events (Non-School)</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Internet</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TV</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Referral</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Radio</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">School Related</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Other</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Previously Attended</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Direct Mail</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Print (Non-School)</label>
              </div>
              <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Not Specified</label>
              </div>
              <div style={{ marginTop: '-10px' }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
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
        )}
      </Modal>



    </div>
  );
}
