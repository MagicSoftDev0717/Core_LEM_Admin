"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";

interface LeadDetails {
    id: number | null;
    fname: string | null;
    lname: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    mobile: string | null;
    email: string | null;
    status: string | null;
    homePhone: string | null;
    otherPhone: string | null;
    emailOpt: boolean;
    address1: string | null;
    address2: string | null;
    city: string | null;
    postalCode: string | null;
    descrip: string | null;
    customDescrip: string | null;
    regularPro: boolean;
    enrich: boolean;
    homeSchool: boolean;
    examPrep: boolean;
    home: boolean;
    summerPro: boolean;
    assessOnly: boolean;
    other: boolean;
}

export default function BasicTableOne({ id }: { id: number }) {

    const router = useRouter();
    const [lead, setLead] = useState<LeadDetails | null>(null);

    useEffect(() => {

        if (!id) return; // Prevent execution if id is not yet available
        async function fetchLeads() {

            try {
                const response = await fetch(`/api/details_ld/${id}`);
                const data = await response.json();
                if (data.lead_data !== undefined) {
                    setLead(data.lead_data);
                } else {
                    console.error("API response is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        }
        fetchLeads();

    }, [id]);


    //Payment Method
    const handlePayMethod = () => {
        router.push("/paymethod_ld"); // Navigate to the 'lead' page
        console.log("Saving changes...");

    };
    return (
        <div>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="grid grid-cols-6 gap-x-1 gap-y-1">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="outline">Delete</Button>
                    <Button size="sm" variant="outline">Convert to Account</Button>
                    <Button size="sm" variant="outline">Continue Enrollment Opportunity</Button>
                    <Button size="sm" variant="outline" onClick={handlePayMethod}>Payment Methods</Button>
                </div>
            </div>
            <hr className="my-4" />
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-3xl w-full">
                <div className="p-4 rounded-2xl bg-gray-300 dark:bg-gray-700">

                    <h4 className="mb-2 text-base font-medium text-gray-800 dark:text-white/90">
                        Lead Guardian Information
                    </h4>
                    {
                        lead !== null ?
                            <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">Mr.{lead!.fname + " " + lead!.lname}</h1>
                            : <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">Mr.</h1>
                    }
                    <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        {lead !== null ? lead.email : ""}
                    </h5>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>Situation:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>First Name:</Label>
                        <Input type="text" placeholder="Hanan" defaultValue={lead?.fname || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Last Name:</Label>
                        <Input type="text" placeholder="Ali" defaultValue={lead?.lname || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Lead Status:</Label>
                        <Input type="text" placeholder="" defaultValue={lead?.status || ""} />
                        {/* <select name="status" value={formData.status} onChange={handleChange} className="dark:bg-gray-900 dark:text-gray-600 px-6 py-3 border rounded-lg text-sm w-full">
                            <option value="">--Select--</option>
                            <option value="Open">Open</option>
                            <option value="Assessed">Assessed</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select> */}
                    </div>
                    <div className="col-span-1">
                        <Label>Your Referral Teacher:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Home Phone:</Label>
                        <Input type="text" placeholder="+011 999 9999" />
                    </div>

                    <div className="col-span-1">
                        <Label>Mobile Phone:</Label>
                        <Input type="text" placeholder="" defaultValue={lead?.mobile || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Other Phone:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Your Referral Account:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>Rating:</Label>
                        <Input type="text" placeholder="" />
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
                        <Input type="text" placeholder="hasaneducationadvisor@gmail.com" defaultValue={lead?.email || ""} />
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
