"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
// import TextArea from "@/components/form/input/TextArea";

export default function BasicTableOne() {
    const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        status: "",
        email: "",
        academicY: "",
        curStu: "",
        mobile: "",
        descrip: "",

    });

    //Add to Leads
    const router = useRouter();

    const handleAddTeacher = async () => {

        try {
            const response = await fetch("/api/addteacher_ld", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (data.success) {
                setAlert({
                    title: "Success!",
                    message: "Teacher saved successfully!",
                    variant: "success",
                });
                setTimeout(() => router.push("/teacher_ld"), 2000); // Navigate after 3s
            } else {
                setAlert({
                    title: "Failure!",
                    message: "Error saving teacher.",
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Update both formData and academicYear if the academic year field is changed
        if (name === "academic") {
            setAcademicYear(value);  // Updates academicYear separately
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const [academicYear, setAcademicYear] = useState<string>("");

    // Check if the input should be enabled
    const isStudyingActive = () => {
        const year = parseInt(academicYear, 10);
        return year >= 4 && year <= 19;
    };

    return (
        <div>
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Mentor Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">
                <div className="col-span-1">
                    <Label>Situation</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>First Name*:</Label>
                    <Input type="text" name="fname" defaultValue={formData.fname} onChange={handleChange} placeholder="Hasan" />
                </div>

                <div className="col-span-1">
                    <Label>Last Name*:</Label>
                    <Input type="text" name="lname" defaultValue={formData.lname} onChange={handleChange} placeholder="Ali" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <Input type="email" name="email" defaultValue={formData.email} onChange={handleChange} placeholder="hasaneducationadvisor@gmail.com" />
                </div>

                <div className="col-span-1">
                    <Label>Home Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Mobile Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Other Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Title:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Website:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Opt Out:</label>
                </div>

                <div className="col-span-1">
                    <Label>Status</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full"
                        name="status" value={formData.status} onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="frozen">Frozen</option>
                    </select>
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
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Street Address 2:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>City:</Label>
                    <Input type="email" placeholder="England" />
                </div>

                <div className="col-span-1">
                    <Label>County:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Postal Code:</Label>
                    <Input type="text" placeholder="29407" />
                </div>

                <div className="col-span-1">
                    <Label>Country:</Label>
                    <Input type="email" placeholder="United Kingdom" />
                </div>
            </div>
            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Academic Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">

                <div className="col-span-1">
                    <Label>Primary School:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Secondary Shool:</Label>
                    <Input type="email" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>College/ Sixth Form:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Undergraduate University:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Postgraduate University:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>PhD University:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Academic Year:</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full"
                        name="academicY"
                        value={formData.academicY}
                        onChange={(e) => {
                            setAcademicYear(e.target.value); // Separate state update
                            handleChange(e); // Also update formData
                        }}
                    >
                        <option value="">--Select--</option>
                        <option value="1">College/ Sixth Form – Y12</option>
                        <option value="2">College/ Sixth Form – Y13</option>
                        <option value="3">Undergraduate – Y1</option>
                        <option value="4">Undergraduate – Y2</option>
                        <option value="5">Undergraduate – Y3</option>
                        <option value="6">Undergraduate – Y4</option>
                        <option value="7">Undergraduate – Y5</option>
                        <option value="8">Undergraduate – Y5+</option>
                        <option value="9">Postgraduate – Y1</option>
                        <option value="10">Postgraduate – Y2</option>
                        <option value="11">Postgraduate – Y3</option>
                        <option value="12">Postgraduate – Y4</option>
                        <option value="13">Postgraduate – Y4+</option>
                        <option value="14">PhD – Y1</option>
                        <option value="15">PhD – Y2</option>
                        <option value="16">PhD – Y3</option>
                        <option value="17">PhD – Y4</option>
                        <option value="18">PhD – Y5</option>
                        <option value="19">PhD – Y5+</option>
                        <option value="20">Out of education/ Currently working</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Currently studying:</Label>
                    <input type="text"
                        name="curStu"
                        value={formData.curStu}
                        onChange={handleChange}
                        placeholder="Type description"
                        className={`px-6 py-3 border bg-gray-900 rounded-lg text-sm w-full ${isStudyingActive() ? "text-gray-900 dark:text-white" : "opacity-50 cursor-not-allowed"
                            }`}
                        disabled={!isStudyingActive()}
                    />
                </div>

            </div>

            <hr className="my-6" />

            {/* Address Information */}

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

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Description Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Description Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <textarea rows={6} cols={80} className="dark:bg-gray-900 text-gray-600 border rounded-lg" placeholder="Type your description here..." />
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Button size="sm" variant="outline">
                    Cancel
                </Button>
                <Button size="sm" onClick={handleAddTeacher}>
                    Save
                </Button>
            </div>
        </div>
    );

}
