"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import {
    CalenderIcon
} from "../../icons/index";


// interface StudentDetails {
//     id: number | null;
//     fname: string | null;
//     lname: string | null;
//     birth: string | null;
//     gender: string | null;
//     createdAt: string | null;
//     updatedAt: string | null;
//     pguardian: string | null;
//     sguardian: string | null;
//     allerigies: string | null;
//     a_pschool: string | null;
//     a_sschool: string | null;
//     a_yeargrp: string | null;

// }


export default function BasicTableOne({ id }: { id: number }) {

    const router = useRouter();

    const handleSave = () => {
        router.push("/student_stu"); // Navigate to the 'Teacher' page
    };
    const handleCancel = () => {
        router.push("/student_stu"); // Navigate to the 'lead' page
    };
    const [student, setStudent] = useState({
        fname: "",
        lname: "",
        birth: "",
        gender: "",
        pguardian: "",
        sguardian: "",
        allerigies: "",
        a_pschool: "",
        postalCode: "",
        a_sschool: "",
        a_yeargrp: "",
        createdAt: "",
        updatedAt: ""
    });

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();
        const sec = String(date.getSeconds()).padStart(2, '0');
        const min = String(date.getMinutes() + 1).padStart(2, '0'); // Months are zero-indexed
        const hr = date.getHours();
        return `${year}-${month}-${day} ${hr}:${min}:${sec}`;
    };


    useEffect(() => {

        if (!id) return; // Prevent execution if id is not yet available
        async function fetchSchools() {

            try {
                const response = await fetch(`/api/details_stu/${id}`);
                const data = await response.json();
                if (data.student_data !== undefined) {
                    setStudent(data.student_data);
                } else {
                    console.error("API response is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching schools:", error);
            }
        }
        fetchSchools();

    }, [id]);






    return (
        <div>
            <div className="grid grid-cols-6 gap-x-1 gap-y-1 mt-6">
                <Button size="sm" variant="outline" onClick={handleSave}>Save</Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>Cancel</Button>
            </div>

            <hr className="my-4" />
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="p-4 rounded-2xl bg-gray-300 dark:bg-gray-700">
                    <h4 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">
                        Student Information
                    </h4>
                    {student ? (
                        <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">{student.fname + " " + student.lname}</h1>
                    ) : (
                        <p>Loading...</p>
                    )}
                    {/* <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        {student?.email}
                    </h5> */}
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>First Name:</Label>
                        <Input type="text" defaultValue={student?.fname || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Last Name:</Label>
                        <Input type="text" defaultValue={student?.lname || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Date of Birth:</Label>
                        <Input type="text" defaultValue={student?.birth || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Description:</Label>
                        <Input type="text" />
                    </div>

                    <div className="col-span-1">
                        <Label>Medical Information:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Notes from Center Director:</Label>
                        <Input type="text" />
                    </div>
                    <div className="col-span-1">
                        <Label>School Subject Matter:</Label>
                        <Input type="text" />
                    </div>

                    <div className="col-span-1">
                        <Label>Student Notes:</Label>
                        <Input type="text" />
                    </div>
                    <div></div>
                    <div></div>

                    <div className="col-span-1">
                        <Label>Primary Guardian:</Label>
                        <Input type="text" name="pguardian" />
                    </div>

                    <div className="col-span-1">
                        <Label>Secondary Guardian:</Label>
                        <Input type="text" name="sguardian" />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>


                    <div className="col-span-1">
                        <Label>Sex</Label>
                        <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:bg-text-400 w-full"
                            name="gender" defaultValue={student?.gender || ""}>
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
            </div>

            <hr className="my-6" />

            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                    System Information
                </h4>

                <div className="flex flex-col items-start dark:text-gray-300 gap-4">
                    <div className="flex flex-row items-center">
                        <span className="font-bold">Created By:</span>
                        <span></span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="font-bold">Created Date:</span>
                        <span>&nbsp;&nbsp;{formatDate(new Date(student?.createdAt))}</span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold">Last Modified By:</span>
                        <span></span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="font-bold">Last Modified On:</span>
                        <span>&nbsp;&nbsp;{formatDate(new Date(student?.updatedAt))}</span>
                    </div>
                </div>
            </div>
        </div>


    );

}
