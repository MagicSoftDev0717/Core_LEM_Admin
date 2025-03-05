
"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
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
import Alert from "../ui/alert/Alert"

interface Lead {
  id: number;
  fname: string;
  lname: string;
  createdAt: string;
  updatedAt: string;
  mobile: string;
  email: string;
  status: string;
  homePhone: string;
  otherPhone: string;
  emailOpt: boolean
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  descrip: string;
  customDescrip: string;
  regularPro: boolean
  enrich: boolean
  homeSchool: boolean
  examPrep: boolean
  home: boolean
  summerPro: boolean
  assessOnly: boolean
  other: boolean
}

interface Student {
  id: number;      // Assuming 'id' is a number
  fname: string;
  lname: string;
  year: string;
  schoolYear: string;

}


export default function BasicTableOne() {

  const router = useRouter();
  const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);



  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    status: ""
  });

  const [leads, setLeads] = useState<Lead[]>([]);
  const [currentLeads, setCurrentLeads] = useState<Lead[]>([]);
  const [updateLead, setUpdateLead] = useState<Lead>();
  const [delupdateLead, setDelUpdateLead] = useState<Lead>();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLdSts, setSelectedLdSts] = useState("");




  const [dateOfStart, setDateOfStart] = useState("");
  const [dateOfEnd, setDateOfEnd] = useState("");

  const handleStartDate = (date: Date[]) => {

    const formattedStartDate = date[0].toISOString().split("T")[0]; // Extracts 'YYYY-MM-DD'
    setDateOfStart(formattedStartDate); // Store formatted date

  };

  const handleEndDate = (date: Date[]) => {
    const formattedEndDate = date[0].toISOString().split("T")[0]; // Extracts 'YYYY-MM-DD'
    setDateOfEnd(formattedEndDate); // Store formatted date
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };



  //Click the page button , set a page number
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  // Fetch leads from the server (Replace with actual API)
  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch(`/api/addlead_ld?page=${currentPage}&items=${itemsPerPage}&searchQuery=${searchQuery}&selectedLdSts=${selectedLdSts}&dateOfStart=${dateOfStart}&dateOfEnd=${dateOfEnd}`);

        const data = await response.json();
        if (data.lead_data !== undefined) {
          const totalPage = Math.ceil(data.totalLead / itemsPerPage);
          const lastIndex = currentPage * itemsPerPage;
          // if (count < totalPage)
          //   data.lead_data.map((lead: Lead) => leads.push(lead));
          setLeads(data.lead_data);
          setCurrentLeads(data.lead_data.slice(lastIndex - itemsPerPage, lastIndex));
          setFormData({
            fname: data.lead_data.fname,
            lname: data.lead_data.lname,
            email: data.lead_data.email,
            mobile: data.lead_data.mobile,
            status: data.lead_data.status
          });
          setTotalPages(totalPage);

          // console.log(itemsPerPage, currentLeads.length, leads.length);
        } else {
          console.error("API response is not an array:", data);
          setLeads([]); // Ensure leads remains an array
          setCurrentLeads([]);
          // currentLeads = [];
        }
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    }
    fetchLeads();
  }, [currentPage, itemsPerPage, updateLead, delupdateLead, searchQuery, selectedLdSts, dateOfStart, dateOfEnd]);

  //Show by row display count
  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {

    const newItemsPerPage = Number(event.target.value);
    setLeads([]);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing rows per page
  };


  //Filter Part
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter dropdown visibility


  //Date


  //Click the 'Add Lead' button and Add to Leads

  const addtoLead = () => {
    router.push("/addlead_ld"); // Navigate to the 'lead' page
  };



  //Details View
  const handleDetails = async (id: number) => {
    router.push(`/details_ld/${id}`);
  };



  //Edit Lead &   Save the edited Lead Data
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const handleEditLead = (lead: Lead) => {
    setSelectedLead(lead);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setSelectedLead(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const saveEditedLead = async (id: number) => {
    try {
      const response = await fetch(`/api/addlead_ld/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setUpdateLead(await response.json());
        setAlert({
          title: "Success!",
          message: "Lead updated successfully!",
          variant: "success",
        });
        closeEditModal();
      } else {
        setAlert({
          title: "Warning!",
          message: "Error updating lead.",
          variant: "warning",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        title: "Error!",
        message: "An error occurred.",
        variant: "error",
      });
    }
  };

  ////Remove the Lead Item

  const handleRemove = async (id: number) => {
    try {
      const response = await fetch(`/api/addlead_ld/${id}`, {
        method: "DELETE",

      });
      if (response.ok) {
        setDelUpdateLead(await response.json());
        setAlert({
          title: "Success!",
          message: "Lead deleted successfully!",
          variant: "success",
        });
        // setLeads((prevLeads) =>
        //   prevLeads.filter((lead) => lead.id !== id)
        // );
      } else {
        setAlert({
          title: "Error!",
          message: "Error remove lead.",
          variant: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        title: "Error!",
        message: "An error occurred.",
        variant: "error",
      });
    }
  };


  ////////////Add New Child & View own child ////////

  const addToChild = async (id: number) => {
    router.push(`/addstudent_stu/${id}`);
  };


  const [students, setStudents] = useState<Student[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewToOwnChild = async (id: number) => {
    try {
      const response = await fetch(`/api/student_stu/${id}`);
      const data = await response.json();
      console.log(data);
      setStudents(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };



  /////////////////////
  /////Expert to Excel
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


  //Pagination
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
              <input type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Lead Status:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2"
                onChange={(e) => setSelectedLdSts(e.target.value)}
                value={selectedLdSts}
              >
                <option value="All">All</option>
                <option value="Open">Open</option>
                <option value="Assessed">Assessed</option>
                <option value="Contacted">Contacted</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4 mb-6">
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
                  <TableCell className="px-5 py-4 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    UK Traning
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

      <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
        <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex justify-start">
              <button
                onClick={addtoLead}
                className="px-2 py-1 bg-blue-600 text-white rounded-lg"
              >
                Add Lead
              </button>
            </div>
            <div className="relative z-20 bg-transparent">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400"> Show </span>
                <select value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="w-full py-2 pl-3 pr-6 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg appearance-none dark:bg-dark-900 h-9 bg-none shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto custom-scrollbar border-b border-gray-200 dark:border-white/[0.1]">
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
                      No
                    </TableCell>
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
                    {/* <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      Student Name
                    </TableCell> */}
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
                      Child
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
                  {
                    Array.isArray(currentLeads) && currentLeads.length > 0 ? (
                      currentLeads.map((lead: Lead, index) => (
                        <TableRow key={lead.id}>
                          <TableCell className="px-5 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{index + 1 + (currentPage - 1) * itemsPerPage}</TableCell>
                          <TableCell className="px-5 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.fname}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.lname}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{formatDate(new Date(lead.createdAt))}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.mobile}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.email}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.status}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.mobile}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.email}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">{lead.status}</TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                            <div className="flex items-center justify-center gap-2">
                              <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => addToChild(lead.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                              </button>
                              <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => viewToOwnChild(lead.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>

                              </button>

                            </div>
                          </TableCell>
                          <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                            <div className="flex items-center justify-center gap-2">
                              <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => handleEditLead(lead)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                              </button>
                              <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => handleDetails(lead.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 4h.01M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                                </svg>
                              </button>
                              <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => handleRemove(lead.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                              </button>
                              {alert && (
                                <Alert
                                  title={alert.title}
                                  message={alert.message}
                                  variant={alert.variant}
                                  duration={2000}
                                  onClose={() => setAlert(null)} // Clear alert after timeout
                                />
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      // If no leads are found, display a "No results found" row
                      <TableRow className="text-blue-400 px-5 py-3 text-center text-theme-x1 text-gray-500 dark:text-gray-400">
                        <TableCell>
                          No results found
                        </TableCell>
                      </TableRow>
                    )}
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

      <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[1000px] p-5 lg:p-10">
        <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Edit Lead</h2>

        {selectedLead && (
          <div>
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Lead Guardian Information</h4>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-6">
              <div className="col-span-1">
                <Label>Situation</Label>
                <select className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>First Name*:</Label>
                <Input type="text" name="fname" defaultValue={selectedLead.fname} onChange={handleChange} placeholder="Hasan" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Last Name*:</Label>
                <Input type="text" name="lname" defaultValue={selectedLead.lname} onChange={handleChange} placeholder="Ali" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Home Phone:</Label>
                <Input type="text" name="homePhone" defaultValue={selectedLead.homePhone} onChange={handleChange} placeholder="+09 363 398 46" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Mobile Phone:</Label>
                <Input type="text" name="mobile" defaultValue={selectedLead.mobile} onChange={handleChange} placeholder="+09 363 398 46" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Other Phone:</Label>
                <Input type="text" placeholder="+09 363 398 46" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Email:</Label>
                <Input type="email" name="email" defaultValue={selectedLead.email} onChange={handleChange} placeholder="hasaneducationadvisor@gmail.com" className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Lead Status:</Label>
                <select name="status" defaultValue={selectedLead.status} onChange={handleChange} className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="Open">Open</option>
                  <option value="Assessed">Assessed</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
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

            <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-5">

              <div className="col-span-1">
                <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location Visibility</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Events (Non-School)</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Internet</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TV</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Referral</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Radio</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">School Related</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Other</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Previously Attended</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Direct Mail</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Print (Non-School)</label>
              </div>
              {/* <div className="col-span-1">
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
              <div className="col-span-1">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Not Specified</label>
              </div>
              {/* <div style={{ marginTop: '-10px' }}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
                <select className="bg-gray-900 px-2 py-1 border rounded-lg text-xs w-full text-gray-500">
                  <option value="">All</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div> */}
            </div>

            <hr className="my-1" />

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <Button size="sm" onClick={closeEditModal} className="bg-gray-500 text-white">
                Cancel
              </Button>
              <Button size="sm" className="bg-blue-500 text-white" onClick={() => saveEditedLead(selectedLead.id)}>
                Save
              </Button>
              {/* Show alert when triggered */}
              {alert && (
                <Alert
                  title={alert.title}
                  message={alert.message}
                  variant={alert.variant}
                  duration={2000}
                  onClose={() => setAlert(null)} // Clear alert after timeout
                />
              )}
            </div>
          </div>
        )}
      </Modal>



      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg w-1/3">
            {/* Title */}
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-200">
              My Love Children
            </h2>

            {/* Student Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                {/* Table Header */}
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className=" dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-200 text-center">
                      #
                    </th>
                    <th className="dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-200 text-center">
                      First Name
                    </th>
                    <th className="dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-200 text-center">
                      Last Name
                    </th>
                    <th className="dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-200 text-center">
                     Year
                    </th>
                    <th className="dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-200 text-center">
                      School Year
                    </th>
                    <th className="dark:border-gray-600 px-3 py-2 text-left text-gray-900 dark:text-gray-200 text-center">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {students.length > 0 ? (
                    students.map((student, index) => (
                      <tr key={student.id} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-200 text-center">
                          {index + 1}
                        </td>
                        <td className="dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-200 text-center">
                          {student.fname}
                        </td>
                        <td className="dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-200 text-center">
                          {student.lname}
                        </td>
                        <td className="dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-200 text-center">
                          {student.year}
                        </td>
                        <td className="dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-200 text-center">
                          {student.schoolYear}
                        </td>
                        <td className="dark:border-gray-600 px-3 py-2 text-center">
                          <button className="text-blue-600 dark:text-blue-400 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 4h.01M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-3 text-gray-600 dark:text-gray-300">
                        No students found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Close Button */}
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>

      )}
    </div>
  );
}
