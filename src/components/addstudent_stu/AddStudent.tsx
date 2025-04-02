"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import Alert from "../ui/alert/Alert"
import {
    CalenderIcon
} from "../../icons/index";

interface School {
    id: number;
    sname: string;
  }

export default function BasicTableOne({ id }: { id: number }) {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        birth: "",
        gender: "",
        pguardian: "",
        sguardian: "",
        religion: "",
        allerigies: "",
        a_pschool: "",
        a_sschool: "",
        a_yeargrp: "",
        a_ies: "",
        a_ims: "",
        a_ics: "",
        a_hs: "",
        l_startdate: "",
        l_pcentre: "",
        l_scentre: "",
        l_ies: "",
        l_ims: "",
        l_ics: "",
        l_hs: "",
        l_ptutor: "",
        l_otutor: "",
        parent_id: Number(id)
    });

    //Add to Leads
    const router = useRouter();
    const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddStudent = async () => {
        try {
            const response = await fetch("/api/student_stu", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (data.success) {
                setAlert({
                    title: "Success!",
                    message: "A Student Added successfully!",
                    variant: "success",
                });
                setTimeout(() => router.push("/leads"), 2000); // Navigate after 3s
            } else {
                setAlert({
                    title: "Failure!",
                    message: "Error adding Student.",
                    variant: "error",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setAlert({
                title: "Failure!",
                message: "An error occurred.",
                variant: "error",
            });
        }


    };
    
    const handleCancel = () => {
        router.push("/students");

    };

    // const [dateOfBirth, setDateOfBirth] = useState("");

    const handleBirth = (date: Date[]) => {
        const birthDate = date[0].toISOString().split("T")[0];
        // setDateOfBirth(birthDate);

        setFormData((prevData) => ({
            ...prevData,
            birth: birthDate, // Update formData with the selected date
        }));
    };

    // const [dateOfStart, setDateOfStart] = useState("");

    const handleStartDate = (date: Date[]) => {
        const startDate = date[0].toISOString().split("T")[0];
        // setDateOfStart(startDate);

        setFormData((prevData) => ({
            ...prevData,
            l_startdate: startDate, // Update formData with the selected date
        }));
    };

    const [primarySchools, setPrimarySchools] = useState<School[]>([]);
    const [secondarySchools, setSecondarySchools] = useState<School[]>([]); 

    useEffect(() => {
        // Fetch primary schools
        fetch("/api/getschool_stu?level=Primary")
            .then((res) => res.json())
            .then((data) => setPrimarySchools(data.schools))
            .catch((err) => console.error("Error fetching primary schools:", err));

        // Fetch secondary schools
        fetch("/api/getschool_stu?level=Secondary")
            .then((res) => res.json())
            .then((data) => setSecondarySchools(data.schools))
            .catch((err) => console.error("Error fetching secondary schools:", err));
    }, []);

    return (
        <div>
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Student Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
                <div className="col-span-1">
                    <Label>First Name*:</Label>
                    <Input type="text" name="fname" defaultValue={formData.fname} onChange={handleChange} placeholder="Hasan" />
                </div>

                <div className="col-span-1">
                    <Label>Last Name*:</Label>
                    <Input type="text" name="lname" defaultValue={formData.lname} onChange={handleChange} placeholder="Ali" />
                </div>

                <div className="flex items-center gap-2">
                    <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Date of Birth:
                        </label>
                        <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                            <Flatpickr name="birth"
                                value={formData.birth} // Set the value to the state
                                onChange={handleBirth} // Handle the date change
                                options={{
                                    dateFormat: "Y-m-d", // Set the date format
                                }}
                                placeholder="Select Date"
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

                <div className="col-span-1">
                    <Label>Description:</Label>
                    <Input type="email" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Medical Informaion:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Notes from Center Director:</Label>
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
                <div></div>

            </div>

            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Guardian Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
                <div className="col-span-1">
                    <Label>Primary Guardian:</Label>
                    <Input type="text" name="pguardian" defaultValue={formData.pguardian} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Secondary Guardian:</Label>
                    <Input type="text" name="sguardian" defaultValue={formData.sguardian} onChange={handleChange} />
                </div>



                <div></div>
                <div></div>

            </div>

            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Personal Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                <div className="col-span-1">
                    <Label>Sex</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full"
                        name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Religion</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>
                <div className="col-span-1">
                    <Label>Allergies</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">

                </div>

                <div className="col-span-1">

                </div>
                <div className="col-span-1">

                </div>

            </div>

            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Academic Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">

                <div className="col-span-1">
                    <Label>Primary School</Label>
                    <select name="a_pschool" value={formData.a_pschool} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        {primarySchools.map((school) => (
                            <option key={school.id} value={school.sname}>
                                {school.sname}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Secondary School</Label>
                    <select name="a_sschool" value={formData.a_sschool} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        {secondarySchools.map((school) => (
                            <option key={school.id} value={school.sname}>
                                {school.sname}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-1">
                    <Label>Year Group</Label>
                    <select name="a_yeargrp" value={formData.a_yeargrp} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="Reception">Reception</option>
                        <option value="Y1">Y1</option>
                        <option value="Y2">Y2</option>
                        <option value="Y3">Y3</option>
                        <option value="Y4">Y4</option>
                        <option value="Y5">Y5</option>
                        <option value="Y6">Y6</option>
                        <option value="Y7">Y7</option>
                        <option value="Y8">Y8</option>
                        <option value="Y9">Y9</option>
                        <option value="Y10">Y10</option>
                        <option value="Y11">Y11</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Initial English Group</Label>
                    <Input type="number" name="a_ies" min="1" max="72" defaultValue={formData.a_ies} onChange={handleChange} />
                    {/* <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select> */}
                </div>

                <div className="col-span-1">
                    <Label>Initial Math Group</Label>
                    <Input type="number" name="a_ims" min="1" max="72" defaultValue={formData.a_ims} onChange={handleChange} />
                    {/* <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select> */}
                </div>
                <div className="col-span-1">
                    <Label>In-centre sessions</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Home sessions</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>
            </div>

            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                LEM Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">
                <div className="col-span-1">
                    <Label>Date started</Label>
                    <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                        <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                            <Flatpickr name="l_startdate"
                                value={formData.l_startdate} // Set the value to the state
                                onChange={handleStartDate} // Handle the date change
                                options={{
                                    dateFormat: "Y-m-d", // Set the date format
                                }}
                                placeholder="Select Date"
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

                <div className="col-span-1">
                    <Label>Primary Centre</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>
                <div className="col-span-1">
                    <Label>Secondary Centre</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Initial English Step</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Initial Math Step</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>
                <div className="col-span-1">
                    <Label>In-centre sessions</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Home sessions</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Primary Tutor</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Other Tutors</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1"></option>
                        <option value="2"></option>
                    </select>
                </div>
            </div>

            <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button size="sm" onClick={handleAddStudent}>
                    Save
                </Button>
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
    );

}
