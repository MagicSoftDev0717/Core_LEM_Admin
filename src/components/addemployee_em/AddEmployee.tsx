"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
// import TextArea from "@/components/form/input/TextArea";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
    CalenderIcon
} from "../../icons/index";
import Alert from "../ui/alert/Alert"
export default function BasicTableOne() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        birth: "",
        gender: "",
        mobile: "",
        e_title: "",
        e_manager: "",
        e_type: "",
        e_status: "",
        e_role: "",
        e_pricen: "",
        e_hiredate: "",
        e_enddate: "",
        e_bgcheck: "",
        e_bgcomple: "",
        address1: "",
        address2: "",
        city: "",
        county: "",
        country: "",
        postalCode: "",
        descript: "",
        createdAt: "",
        updatedAt: ""
    });

    const router = useRouter();

    const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);

    const handleAddEmployee = async () => {
        try {
            const response = await fetch("/api/addemployee_em", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (data.success) {
                setAlert({
                    title: "Success!",
                    message: "A Employee Added successfully!",
                    variant: "success",
                });
                setTimeout(() => router.push("/employees"), 2000); // Navigate after 3s
            } else {
                setAlert({
                    title: "Failure!",
                    message: "Error adding Employee.",
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
        router.push("/employees"); // Navigate to the 'lead' page

    };

    const handleBirth = (date: Date[]) => {
        const birthDate = date[0].toISOString().split("T")[0];
        // setDateOfBirth(birthDate);

        setFormData((prevData) => ({
            ...prevData,
            birth: birthDate, // Update formData with the selected date
        }));
    };


    const handleHireDate = (date: Date[]) => {
        const hireDate = date[0].toISOString().split("T")[0];
        setFormData((prevData) => ({
            ...prevData,
            e_hiredate: hireDate, // Update formData with the selected date
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Employee Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
                <div className="col-span-1">
                    <Label>Situation</Label>
                    <select className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border rounded-lg text-sm w-full">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>First Name*:</Label>
                    <Input type="text" name="fname" defaultValue={formData.fname} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Last Name*:</Label>
                    <Input type="email" name="lname" defaultValue={formData.lname} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <Input type="text" name="email" defaultValue={formData.email} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Home Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Mobile Phone:</Label>
                    <Input type="text" name="mobile" defaultValue={formData.mobile} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Other Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Title:</Label>
                    <Input type="text" name="e_title" defaultValue={formData.e_title} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Manager*:</Label>
                    <Input type="text" name="e_manager" defaultValue={formData.e_manager} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                            <Label>Date of Birth:</Label>
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
                </div>

                <div className="col-span-1">
                    <Label>Status:</Label>
                    <select name="e_status" defaultValue={formData.e_status} onChange={handleChange}
                        className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border rounded-lg text-xs w-full">
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Frozen">Frozen</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Role:</Label>
                    <select name="e_role" defaultValue={formData.e_role} onChange={handleChange}
                        className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border rounded-lg text-xs w-full">
                        <option value="all">All</option>
                        <option value="Centre Coordinator">Centre Coordinator</option>
                        <option value="Assistant Centre">Assistant Centre Coordinator</option>
                        <option value="Lead Tutor">Lead Tutor</option>
                        <option value="Asssessor">Asssessor</option>
                        <option value="Mentor Level 1">Mentor Level 1</option>
                        <option value="Mentor Level 2">Mentor Level 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Role:</Label>
                    <select name="e_pricen" defaultValue={formData.e_pricen} onChange={handleChange}
                        className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border rounded-lg text-xs w-full">
                        <option value="all">All</option>
                        <option value="Norbury">Norbury</option>
                        <option value="Thornton Heath">Thornton Heath</option>
                        <option value="Crystal Palace">Crystal Palace</option>
                        <option value="TMitcham">TMitcham</option>
                        <option value="Home">Home</option>
                    </select>
                </div>

            </div>

            {/* Line Separator */}
            <hr className="my-6" />


            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Employment Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">
                <div className="col-span-1">
                    <Label>Employment Type</Label>
                    <select name="e_type" defaultValue={formData.e_type} onChange={handleChange}
                        className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border rounded-lg text-xs w-full">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div className="col-span-1">

                    <div className="flex items-center gap-2">
                        <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                            <Label>Hire Date:</Label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr name="e_hiredate"
                                    value={formData.e_hiredate} // Set the value to the state
                                    onChange={handleHireDate} // Handle the date change
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
                </div>

                <div className="col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                            <Label>Employment End Date:</Label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr name="e_enddate"
                                    // value={formData.e_enddate} // Set the value to the state
                                    // onChange={handleHireDate} // Handle the date change
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
                </div>

                <div className="col-span-1">
                    <Label>Backgorund Check Vender:</Label>
                    <select name="e_bgcheck" defaultValue={formData.e_bgcheck} onChange={handleChange}
                        className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border rounded-lg text-xs w-full">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                            <Label>Completed Background Check Date</Label>
                            <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                                <Flatpickr name="birth"
                                    // value={formData.birth} // Set the value to the state
                                    // onChange={handleBirth} // Handle the date change
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
                </div>

            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Address Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Address Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <Label>Street Address 1:</Label>
                    <Input type="text" name="address1" defaultValue={formData.address1} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Street Address 2:</Label>
                    <Input type="text" name="address2" defaultValue={formData.address2} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>City:</Label>
                    <Input type="text" name="city" defaultValue={formData.city} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>County:</Label>
                    <Input type="text" name="county" defaultValue={formData.county} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Postal Code:</Label>
                    <Input type="text" name="postalCode" defaultValue={formData.postalCode} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Country:</Label>
                    <Input type="text" name="country" defaultValue={formData.country} onChange={handleChange} />
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Description Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Description Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <textarea rows={6} cols={80} name="descript" defaultValue={formData.descript} onChange={handleChange}
                        className="bg-white dark:bg-gray-900 dark:text-gray-500 border rounded-lg" placeholder="Type your message here..." />
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button size="sm" onClick={handleAddEmployee}>
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
