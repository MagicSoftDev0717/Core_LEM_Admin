"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";


export default function BasicTableOne() {

    //Add to Leads
    const router = useRouter();

    const handleSave = () => {
        router.push("/teacher_ld"); // Navigate to the 'Teacher' page
        // Handle save logic here
        console.log("Saving changes...");

     };
    const handleCancel = () => {
        router.push("/teacher_ld"); // Navigate to the 'lead' page
        // Handle save logic here
        console.log("Canceling...");

    };
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
                        Teacher Information
                    </h4>
                    <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">Mr.SS</h1>
                    {/* <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        xerir80514@namewok.com
                    </h5> */}
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>Situation:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>First Name:</Label>
                        <Input type="text" placeholder="Hasan" />
                    </div>

                    <div className="col-span-1">
                        <Label>Last Name:</Label>
                        <Input type="text" placeholder="Ali" />
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

                    <div className="col-span-1">
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
                    </div>

                    <div className="col-span-1">
                        <Label>Title:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Email:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Website:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
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
