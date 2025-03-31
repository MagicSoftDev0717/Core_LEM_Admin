"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";

interface TeacherDetails {
    id: number | null;
    fname: string | null;
    lname: string | null;
    gender: string | null;
    status: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    mobile: string | null;
    email: string | null;
    homePhone: string | null;
    otherPhone: string | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    postalCode: number | null;
    descrip: string | null;
    primarySc: string | null;
    secondarySc: string | null;
    collegeForm: string | null;
    undergraU: string | null;
    postgraU: string | null;
    phdU: string | null;
    academicY: number | null;
    curStu: string | null;
    religion: string | null;
    allergies: string | null;
}

export default function BasicTableOne({ id }: { id: number }) {

    //Add to Leads
    const router = useRouter();

    const handleSave = () => {
        router.push("/teacher_ld"); // Navigate to the 'Teacher' page
    };
    // const handleCancel = () => {
    //     router.push("/teacher_ld"); // Navigate to the 'lead' page

    // };

    const [teacher, setTeacher] = useState<TeacherDetails | null>(null);
    useEffect(() => {

        if (!id) return; // Prevent execution if id is not yet available
        async function fetchTeachers() {

            try {
                const response = await fetch(`/api/details_tc/${id}`);
                const data = await response.json();
                if (data.teacher_data !== undefined) {
                    setTeacher(data.teacher_data);
                } else {
                    console.error("API response is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        }
        fetchTeachers();

    }, [id]);


    return (
        <div>

            <div className="grid grid-cols-6 gap-x-1 gap-y-1 mt-6">
                <Button size="sm" variant="outline" onClick={handleSave}>Save</Button>
                <Button size="sm" variant="outline" >Cancel</Button>
            </div>

            <hr className="my-4" />
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="p-4 rounded-2xl bg-gray-300 dark:bg-gray-700">
                    <h4 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">
                        Mentor Information
                    </h4>
                    {teacher ? (
                        <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">Mr.{teacher.fname + " " + teacher.lname}</h1>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        {teacher?.email}
                    </h5>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>Situation:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>First Name:</Label>
                        <Input type="text" defaultValue={teacher?.fname || ""} placeholder="Hasan" />
                    </div>

                    <div className="col-span-1">
                        <Label>Last Name:</Label>
                        <Input type="text" defaultValue={teacher?.lname || ""} placeholder="Ali" />
                    </div>

                    <div className="col-span-1">
                        <Label>Home Phone:</Label>
                        <Input type="text" placeholder="+011 999 9999" />
                    </div>

                    <div className="col-span-1">
                        <Label>Mobile Phone:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Other Phone:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    {/* <div className="col-span-1">
                        <Label>Year:</Label>
                        <Input type="text" placeholder="+011 999 9999" />
                    </div>

                    <div className="col-span-1">
                        <Label>School:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Department:</Label>
                        <Input type="text" placeholder="" />
                    </div> */}

                    <div className="col-span-1">
                        <Label>Title:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Email:</Label>
                        <Input type="text" defaultValue={teacher?.email || ""} placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Website:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1 mt-8">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Opt Out:</label>
                    </div>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Address Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Address Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
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

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Description Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Description Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <Label>Description:</Label>
                    <Input type="text" placeholder="" />
                </div>

                {/* <div className="col-span-1">
                    <Label>Customer Comments:</Label>
                    <Input type="text" placeholder="" />
                </div> */}

                <div className="col-span-1"></div>

            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                    System Information
                </h4>
            </div>
        </div>


    );

}
