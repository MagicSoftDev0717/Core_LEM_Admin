"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";


export default function BasicTableOne() {

    //Add to Leads
    const router = useRouter();

    // const handleSave = () => {
    //     router.push("/leads"); // Navigate to the 'lead' page
    //     // Handle save logic here
    //     console.log("Saving changes...");

    // };
    // const handleCancel = () => {
    //     router.push("/leads"); // Navigate to the 'lead' page
    //     // Handle save logic here
    //     console.log("Canceling...");

    // };
    //Payment Method
    const handlePayMethod = () => {
        router.push("/paymethod_ld"); // Navigate to the 'lead' page
        console.log("Saving changes...");

    };
    return (
        <div>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="grid grid-cols-6 gap-x-1 gap-y-1 mt-6">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="outline">Delete</Button>
                    <Button size="sm" variant="outline">Convert to Account</Button>
                    <Button size="sm" variant="outline">Continue Enrollment Opportunity</Button>
                    <Button size="sm" variant="outline" onClick={handlePayMethod}>Payment Methods</Button>
                </div>
            </div>

            {/* <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">

                <h4 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">
                    Account Status:
                </h4>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4 mt-6">
                    <div className="col-span-1">
                        <Label>Billing Day:</Label>
                        <select className="px-4 py-2 bg-gray-900 text-white border rounded-lg text-xs w-full">
                            <option value="">All</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <Label>Active Payment Method:</Label>
                        <a>Change Payment Method</a>
                    </div>

                    <div className="col-span-1">
                        <Label>Discounts:</Label>
                        <Label>Discounts</Label>
                    </div>

                    <div className="col-span-1">
                        <Label>Change Monthly Billing Day</Label>
                        <Label>Defer Upcoming Billing Day</Label>
                    </div>
                </div>
            </div> */}
            <hr className="my-4" />
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="p-4 rounded-2xl bg-gray-300 dark:bg-gray-700">
                    <h4 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">
                        Lead Guardian Information
                    </h4>
                    <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">Mr.SS</h1>
                    <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        xerir80514@namewok.com
                    </h5>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>Situation:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>First Name:</Label>
                        <Input type="text" placeholder="Hanan" />
                    </div>

                    <div className="col-span-1">
                        <Label>Last Name:</Label>
                        <Input type="text" placeholder="Ali" />
                    </div>

                    <div className="col-span-1">
                        <Label>Lead Status:</Label>
                        <Input type="text" placeholder="Team Manager" />
                    </div>
                    <div className="col-span-1">
                        <Label>Your Referral Teacher:</Label>
                        <Input type="text" placeholder="055 788 888" />
                    </div>

                    <div className="col-span-1">
                        <Label>Home Phone:</Label>
                        <Input type="text" placeholder="+011 999 9999" />
                    </div>

                    <div className="col-span-1">
                        <Label>Mobile Phone:</Label>
                        <Input type="text" placeholder="Team Manager" />
                    </div>

                    <div className="col-span-1">
                        <Label>Other Phone:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Your Referral Account:</Label>
                        <Input type="text" placeholder="+011 999 9999" />
                    </div>

                    <div className="col-span-1">
                        <Label>Rating:</Label>
                        <Input type="text" placeholder="Team Manager" />
                    </div>

                    <div className="col-span-1">
                        <Label>Last Contacted Date:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Relation To Student:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Rating:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Email:</Label>
                        <Input type="text" placeholder="hasaneducationadvisor@gmail.com" />
                    </div>

                    <div className="col-span-1">
                        <Label>Email:</Label>
                        <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Opt Out:</label>
                    </div>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Address Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Primary Lead Student Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                <div className="col-span-1">
                    <Label>Student First Name:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Student Last Name:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Student Gender:</Label>
                    <Input type="email" placeholder="England" />
                </div>

                <div className="col-span-1">
                    <Label>Year:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Student Date of Birth:</Label>
                    <Input type="text" placeholder="29407" />
                </div>

                <div className="col-span-1">
                    <Label>School:</Label>
                    <Input type="email" placeholder="United Kingdom" />
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

                <div className="col-span-1">
                    <Label>Customer Comments:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1"></div>

            </div>

            {/* Line Separator */}
            <hr className="my-6" />


            {/**Lead Interest */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Lead Guardian Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">

                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Regular Program</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Home School</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Exam Prep</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Summer Program</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Assessment Only</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Enrichment</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Private Lessons</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">@Home</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Other</label>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/**Lead Source */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Lead Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Location Visibility</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Events (Non-School)</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Internet</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">TV</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Referral</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Radio</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">School Related</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Other</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Previously Attended</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Direct Mail</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Print (Non-School)</label>
                </div>
                <div className="col-span-1">
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Not Specified</label>
                </div>
                <div style={{ marginTop: '-10px' }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Promotional:</label>
                    <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
            </div>
        </div>


    );

}
