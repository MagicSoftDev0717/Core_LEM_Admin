"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
// import TextArea from "@/components/form/input/TextArea";

export default function BasicTableOne() {

    //Add to Leads
    const router = useRouter();
    
    const handleSave = () => {
        router.push("/teacher_ld"); // Navigate to the 'lead' page
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
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Teacher Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
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
                    <Input type="text" placeholder="Hasan" />
                </div>

                <div className="col-span-1">
                    <Label>Last Name*:</Label>
                    <Input type="email" placeholder="Ali" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <Input type="text" placeholder="hasaneducationadvisor@gmail.com" />
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
                    <Label>Year:</Label>
                    <Input type="text" placeholder="Team Manager" />
                </div>

                <div className="col-span-1">
                    <Label>Choose Your School:</Label>
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
                    <Label>Website:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Opt Out:</label>
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

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Description Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Description Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <textarea rows = {6} cols = {80} className="dark:bg-gray-900 text-gray-600border rounded-lg" placeholder="Type your message here..."/>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button size="sm" onClick={handleSave}>
                    Save
                </Button>
            </div>
        </div>
    );

}
