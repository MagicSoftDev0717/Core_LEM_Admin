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
        router.push("/school_ld"); // Navigate to the 'lead' page
        // Handle save logic here
        console.log("Saving changes...");

    };
    const handleCancel = () => {
        router.push("/school_ld"); // Navigate to the 'lead' page
        // Handle save logic here
        console.log("Canceling...");

    };
    return (
        <div>
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Teacher Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <Label>Name*:</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Principal:</Label>
                    <Input type="text" placeholder="Hasan" />
                </div>

                <div className="col-span-1">
                    <Label>Assistant:</Label>
                    <Input type="text" placeholder="Ali" />
                </div>

                <div className="col-span-1">
                    <Label>Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <Input type="email" placeholder="hasaneducationadvisor@gmail.com" />
                </div>

                <div className="col-span-1">
                    <Label>Website:</Label>
                    <Input type="text" placeholder="core.learnenglishmaths.com" />
                </div>

                <div className="col-span-1">
                    <Label>Website PSTA:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>District:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>School Type:</Label>
                    <Input type="text" placeholder="" />
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
