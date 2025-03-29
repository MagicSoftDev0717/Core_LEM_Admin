"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";

interface SchoolDetails {
    id: number | null;
    sname: string | null;
    level: string | null;
    type: string | null;
    enroll: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    site: string | null;
    email: string | null;
    number_s: string | null;
    area: string | null;
    postalCode: string | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    county: string | null;


}


export default function BasicTableOne({ id }: { id: number }) {

    //Add to Leads
    const router = useRouter();

    const handleSave = () => {
        router.push("/school_ld"); // Navigate to the 'Teacher' page
    };
    const handleCancel = () => {
        router.push("/school_ld"); // Navigate to the 'lead' page
    };
    const [school, setSchool] = useState<SchoolDetails | null>(null);
    useEffect(() => {

        if (!id) return; // Prevent execution if id is not yet available
        async function fetchSchools() {

            try {
                const response = await fetch(`/api/details_sc/${id}`);
                const data = await response.json();
                console.log("dddd:", data);
                if (data.school_data !== undefined) {
                    setSchool(data.school_data);
                } else {
                    console.error("API response is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching leads:", error);
            }
        }
        fetchSchools();

    }, [id]);


    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable((prev) => !prev);
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
                        School Information
                    </h4>
                    {school ? (
                        <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white/90">{school.sname}</h1>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90">
                        {school?.email}
                    </h5>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5 mt-6">
                    <div className="col-span-1">
                        <Label>Name:</Label>
                        <Input type="text" defaultValue={school?.sname || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Principal:</Label>
                        <Input type="text" placeholder="Hanan" />
                    </div>

                    <div className="col-span-1">
                        <Label>Assistant:</Label>
                        <Input type="text" placeholder="Ali" />
                    </div>

                    <div className="col-span-1">
                        <Label>Phone:</Label>
                        <Input type="text" />
                    </div>

                    <div className="col-span-1">
                        <Label>Website:</Label>
                        <Input type="text" defaultValue={school?.site || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>Website PSTA:</Label>
                        <Input type="text" placeholder="" />
                    </div>

                    <div className="col-span-1">
                        <Label>District:</Label>
                        <Input type="text" defaultValue={school?.area || ""} />
                    </div>

                    <div className="col-span-1">
                        <Label>School Level:</Label>
                        {/* <Input type="text"  /> */}
                        <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full"
                            value={school?.level || ""}
                        // onChange={handleChange}
                        >
                            <option value="">--Select--</option>
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <Label>School Type:</Label>
                        {/* <Input type="text" defaultValue={school?.type || ""} /> */}
                        <select
                            className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-500 w-full"
                            value={school?.type || ""}
                        >
                            <option value="">--Select--</option>
                            <option value="Academy">Academy</option>
                            <option value="Comprehensive">Comprehensive</option>
                            <option value="Faith">Faith</option>
                            <option value="Grammar">Grammar</option>
                            <option value="Prep">Prep</option>
                            <option value="Private">Private</option>
                            <option value="State">State</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <Label>Email:</Label>
                        <Input type="text" defaultValue={school?.email || ""} />
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
                    <Input type="text" defaultValue={school?.postalCode || ""} placeholder="29407" />
                </div>

                <div className="col-span-1">
                    <Label>Country:</Label>
                    <Input type="email" placeholder="United Kingdom" />
                </div>
            </div>

            <hr className="my-6" />

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">Visits</h4>

            <div className="grid grid-cols-6 gap-x-1 gap-y-1 mt-6">
                <Button size="sm" variant="outline" onClick={toggleTable}>
                    {showTable ? "Remove Visit -" : "Add Visit +"}
                </Button>

                <Button size="sm" variant="outline">All Logs</Button>
                </div>
                {showTable && (
                    <div className="overflow-hidden bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/[0.1]">
                        <div className="flex flex-col gap-2 px-4 py-4 border border-b border-gray-200 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex justify-start">
                                    <button

                                        className="px-2 py-1 bg-blue-600 text-white rounded-lg"
                                    >
                                        Add New
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                            <div className="max-w-full overflow-x-auto">
                                <div className="min-w-[1102px]">
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                                <th className="border border-gray-300 px-4 py-2">Reason</th>
                                                <th className="border border-gray-300 px-4 py-2">Person visiting</th>
                                                <th className="border border-gray-300 px-4 py-2">Person visited</th>
                                                <th className="border border-gray-300 px-4 py-2">Leaflets given</th>
                                                <th className="border border-gray-300 px-4 py-2">Notes</th>
                                                <th className="border border-gray-300 px-4 py-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Data 1</td>
                                                <td className="border border-gray-300 px-4 py-2">Data 2</td>
                                                <td className="border border-gray-300 px-4 py-2">Data 3</td>
                                                <td className="border border-gray-300 px-4 py-2">Data 4</td>
                                                <td className="border border-gray-300 px-4 py-2">Data 5</td>
                                                <td className="border border-gray-300 px-4 py-2">Data 6</td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                                            </svg>

                                                        </button>
                                                        <button className="text-gray-500 hover:text-error-500 dark:text-gray-300 dark:hover:text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        

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
