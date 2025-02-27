
"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Filter } from "lucide-react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import Alert from "../ui/alert/Alert"
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

import * as XLSX from "xlsx";
import Button from "../ui/button/Button";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";

interface Student {
  id: number;
  fname: string;
  lname: string;
  year: string;
  schoolYear: string;
  school: string;
  teacher: string;
  gender: string;
  birth: string;
  account: string;
  virCen: string;
  descript: string;
  medicInfo: string;
  cenDir: string;
  subMat: string;
  stuNote: string;
  mediaRele: boolean;
  leaveUnder: boolean;
  contactTeach: boolean;
  scholarShip: boolean;
  createdAt: string;
  updatedAt: string;
}


export default function BasicTableOne() {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    year: "",
    school: "",
    teacher: "",
    schoolYear: "",
  });
  const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [curStudents, setCurStudents] = useState<Student[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control filter dropdown visibility

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

    const [updateStu, setUpdateStu] = useState<Student>();
    const [delupdateStu, setDelUpdateStu] = useState<Student>();
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



  const [searchQuery, setSearchQuery] = useState("");

  const [dateOfStart, setDateOfStart] = useState("");
  const [dateOfEnd, setDateOfEnd] = useState("");

  const handleStartDate = (date: Date[]) => {
    setDateOfStart(date[0].toLocaleDateString()); // Handle selected date and format it
  };

  const handleEndDate = (date: Date[]) => {
    setDateOfEnd(date[0].toLocaleDateString()); // Handle selected date and format it
  };



  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch(`/api/student_stu?page=${currentPage}&items=${itemsPerPage}&searchQuery=${searchQuery}&dateOfStart=${dateOfStart}&dateOfEnd=${dateOfEnd}`);

        const data = await response.json();
        if (data.student_data !== undefined) {
          const totalPage = Math.ceil(data.totalStu / itemsPerPage);
          const lastIndex = currentPage * itemsPerPage;
          setStudents(data.student_data);
          setCurStudents(data.student_data.slice(lastIndex - itemsPerPage, lastIndex));

          setFormData({
            fname: data.student_data.fname,
            lname: data.student_data.lname,
            gender: data.student_data.gender,
            year: data.student_data.year,
            schoolYear: data.student_data.schoolYear,
            teacher: data.student_data.teacher 
          });

          setTotalPages(totalPage);

        } else {
          console.error("API response is not an array:", data);
          setStudents([]); // Ensure leads remains an array
          setCurStudents([]);
        }
      } catch (error) {
        console.error("Error fetching leads:", error);
      }
    }
    fetchLeads();
  }, [currentPage, itemsPerPage, updateStu, delupdateStu, searchQuery, dateOfStart, dateOfEnd]);


  //Add to Leads
  const router = useRouter();
  const addToStudent = () => {
    router.push("/addstudent_stu"); // Navigate to the 'lead' page
  };


  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      students.map((order) => ({
        "First Name": order.fname,
        "Last Name": order.lname,
        "Contact Type": order.gender,
        Subject: order.year,
        "Contact Info": order.school,
        Status: order.schoolYear,
        Priority: order.teacher
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "table_data.xlsx");
  };

  ///ItemsPerPage


  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {

    const newItemsPerPage = Number(event.target.value);
    setStudents([]);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  //Click the page button , set a page number
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  //Edit Lead &   Save the edited Lead Data
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedStu, setSelectedStu] = useState<Student | null>(null);

  const handleEditStudent = (student: Student) => {
    setSelectedStu(student);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setSelectedStu(null);
  };

  const saveEditedStu = async (id: number) => {
    try {
      const response = await fetch(`/api/student_stu/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setUpdateStu(await response.json());
        setAlert({
          title: "Success!",
          message: "A Student updated successfully!",
          variant: "success",
        });
        closeEditModal();
      } else {
        setAlert({
          title: "Warning!",
          message: "Error updating student.",
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

  const handleRemove = async (id: number) => {
    try {
      const response = await fetch(`/api/student_stu/${id}`, {
        method: "DELETE",

      });
      if (response.ok) {
        setDelUpdateStu(await response.json());
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



  return (
    <div>
      {/* Button Container */}
      <div className="flex justify-between mb-6">
        <div className="space-x-2">
          <label className="block font-medium text-gray-700 dark:text-gray-300  p-2 rounded-lg text-xl">Students Management Summary</label>
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
          <div className="grid grid-cols-4 gap-2">
            {/* Label and Combo Box */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Student Name:</label>
              <input type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2" />
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Enrolment Filter:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                <option value="">--Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Additional Filter:</label>
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
              <div className="flatpickr-wrapper flex flex-col w-1/3"> {/* Adjusted width */}
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Delivery:</label>
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

            <div style={{ marginTop: '15px' }}>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
              >Search
              </button>
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
                    New
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Pre-enrolled
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Enrolled
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
                    Inactive
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Total Result
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    In-Centre
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                  >
                    Home
                  </TableCell>
                </TableRow>
              </TableHeader>
              {/* Table Body */}
              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                <TableRow >
                  <TableCell className="px-5 py-4 sm:px-6 text-center">
                    <span className="block font-medium text-center text-gray-800 text-theme-sm dark:text-white/90">
                      UK Traning
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    12
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    5
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    23
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    2
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    1
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    95
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    -
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                    -
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Line Separator */}
      <hr className="my-6" />

      <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
        <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex justify-start">
              <button
                onClick={addToStudent}
                className="px-2 py-1 bg-blue-600 text-white rounded-lg"
              >
                Add Student
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
                      Year
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      School Year
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      Teacher
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
                      Enrolment Status
                    </TableCell>
                    <TableCell
                      isHeader
                      className="px-5 py-3 font-medium text-gray-500 text-center text-theme-sm dark:text-gray-400"
                    >
                      Last Attenance
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
                  {Array.isArray(curStudents) && curStudents.length > 0 ? (
                    curStudents.map((student: Student, index) => (
                      <TableRow key={student.id}>
                        <TableCell className="px-5 py-4 sm:px-6 text-center text-theme-sm dark:text-gray-400">
                          {index + 1 + (currentPage - 1) * itemsPerPage}
                        </TableCell>
                        <TableCell className="px-5 py-4 sm:px-6 text-center text-theme-sm dark:text-gray-400">
                          {student.fname}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.lname}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.year}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.schoolYear}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.teacher}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.teacher}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.teacher}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          {student.teacher}
                        </TableCell>
                        <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                          <div className="flex items-center justify-center gap-2">
                            <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500" onClick={() => handleEditStudent(student)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                              </svg>
                            </button>
                            <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 4h.01M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                              </svg>
                            </button>
                            <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" onClick={() => handleRemove(student.id)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </button>
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
              <button onClick={exportToExcel}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Export to Excel
              </button>
            </div>

          </div>
        </div>
      </div>

      <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-[1000px] p-5 lg:p-10">
        <h2 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Edit Student</h2>

        {selectedStu && (
          <div>
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">Student Information</h4>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-4">

              <div className="col-span-1">
                <Label>First Name*:</Label>
                <Input type="text" name="fname" defaultValue={selectedStu.fname} onChange={handleChange} className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Last Name*:</Label>
                <Input type="text" name="lname" defaultValue={selectedStu.lname} onChange={handleChange} className="w-full" />
              </div>

              <div className="col-span-1">
                <Label>Lead Status:</Label>
                <select name="gender" defaultValue={selectedStu.gender} onChange={handleChange} className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Femail</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Year:</Label>
                <select name="year" defaultValue={selectedStu.year} onChange={handleChange} className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Choose Teacher:</Label>
                <select name="teacher" defaultValue={selectedStu.teacher} onChange={handleChange} className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="youngmilly">Young, Milly</option>
                  <option value="smithsara">Smith, Sara</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Lead Status:</Label>
                <select name="schoolYear" defaultValue={selectedStu.schoolYear} onChange={handleChange} className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="21-22">21-22</option>
                  <option value="22-23">22-23</option>
                  <option value="23-24">23-24</option>
                  <option value="24-25">24-25</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Account:</Label>
                <select name="account" className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Account:</Label>
                <select name="virCent" className="w-full bg-gray-900 px-2 py-2 border rounded-lg text-sm text-gray-500">
                  <option value="">--Select--</option>
                  <option value="">Traning Online</option>
                  <option value="">Option 2</option>
                </select>
              </div>

              <div className="col-span-1">
                <Label>Description:</Label>
                <Input type="email" placeholder="hasaneducationadvisor@gmail.com" />
              </div>

              <div className="col-span-1">
                <Label>Medical Informaion:</Label>
                <Input type="text" placeholder="core.learnenglishmaths.com" />
              </div>

              <div className="col-span-1">
                <Label>Notes from Center Director::</Label>
                <Input type="text" placeholder="" />
              </div>

              <div className="col-span-1">
                <Label>School subject matter:</Label>
                <Input type="text" placeholder="" />
              </div>

              <div className="col-span-1">
                <Label>Student Notes:</Label>
                <Input type="text" placeholder="" />
              </div>
              <div></div>
              <div className="col-span-1">
                <div className="col-span-1">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Consent to Media Release</label>
                </div>

                <div className="col-span-1">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Consent to Contact Teacher</label>
                </div>
              </div>

              <div className="col-span-1">
                <div className="col-span-1">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Consent to Leave Unescorted</label>
                </div>

                <div className="col-span-1">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Scholarship</label>
                </div>
              </div>
            </div>


            <hr className="my-1" />

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <Button size="sm" onClick={closeEditModal} className="bg-gray-500 text-white">
                Cancel
              </Button>
              <Button size="sm" className="bg-blue-500 text-white" onClick={() => saveEditedStu(selectedStu.id)}>
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
    </div>
  );
}
