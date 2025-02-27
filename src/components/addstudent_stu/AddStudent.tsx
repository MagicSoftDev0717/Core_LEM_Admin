"use client";
import React, { useState } from "react";
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
export default function BasicTableOne() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        school: "",
        schoolYear: "",
        year: "",
        teacher: "",
        birth: ""
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
                setTimeout(() => router.push("/students"), 2000); // Navigate after 3s
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
        router.push("/students"); // Navigate to the 'lead' page
        // Handle save logic here
        console.log("Canceling...");

    };

    const [dateOfBirth, setDateOfBirth] = useState("");

    const handleBirth = (date: Date[]) => {
        const birthDate = date[0].toISOString().split("T")[0];
        setDateOfBirth(birthDate); // Handle selected date and format it
    };

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

                <div className="col-span-1">
                    <Label>Gender:</Label>
                    <select name="gender"
                        defaultValue={formData.gender} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Year:</Label>
                    <select name="year"
                        defaultValue={formData.year} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
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
                    <select name="teacher"
                        defaultValue={formData.teacher} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>School Year:</Label>
                    <select name="schoolYear"
                        defaultValue={formData.schoolYear} onChange={handleChange}
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="">--Select--</option>
                        <option value="21-22">21-22</option>
                        <option value="22-23">22-23</option>
                        <option value="23-24">23-24</option>
                        <option value="24-25">24-25</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    {/* Start Field */}
                    <div className="flatpickr-wrapper flex flex-col w-full"> {/* Adjusted width */}
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Date of Birth:
                        </label>
                        <div className="relative w-full"> {/* Adjusted to full width within the wrapper */}
                            <Flatpickr name="birth"
                                value={dateOfBirth} // Set the value to the state
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
                    <Label>Account:</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="All">--Select--</option>
                        <option value="1">option 1</option>
                        <option value="2">option 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Virtual Center:</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="">--Select--</option>
                        <option value="1">Traning Online</option>
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
                <div></div>  
                <div></div>                   
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


        </div>
    );

}
