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
        router.push("/leads"); // Navigate to the 'lead' page
        // Handle save logic here
        console.log("Saving changes...");

    };
    const handleCancel = () => {
        router.push("/leads"); // Navigate to the 'lead' page
        // Handle save logic here
        console.log("Canceling...");

    };
    return (
        <div>
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Lead Guardian Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
                <div className="col-span-1">
                    <Label>Situation</Label>
                    <select className="px-6 py-3 border rounded-lg text-xs w-1/2">
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
                    <Label>Your Referaral Account:</Label>
                    <Input type="text" placeholder="Team Manager" />
                </div>

                <div className="col-span-1">
                    <Label>Your Referral Teacher:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Lead Status:</Label>
                    <select className="px-6 py-3 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
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
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Opt Out:</label>
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
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Regular Program</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Home School</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Exam Prep</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Summer Program</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Assessment Only</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Enrichment</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Private Lessons</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">@Home</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Other</label>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/**Lead Source */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Lead Guardian Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">

                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location Visibility</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Events (Non-School)</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Internet</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">TV</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Referral</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Radio</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">School Related</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Other</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Previously Attended</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Direct Mail</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Print (Non-School)</label>
                </div>
                <div className="col-span-1">
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Not Specified</label>
                </div>
                <div style={{ marginTop: '-10px' }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
                    <select className="px-2 py-1 border rounded-lg text-xs w-1/2">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
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
