"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Alert from "../ui/alert/Alert"

export default function BasicTableOne() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        year: "",
        email: "",
        mobile: "",
        status: "",
        type: ""
    });

    //Add to Leads
    const router = useRouter();
    const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
         const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "radio" || type === "checkbox" ? (e.target as HTMLInputElement).checked ? value : "" : value
        });
    };

    const handleAddLead = async () => {
        try {
            const response = await fetch("/api/addlead_ld", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (data.success) {
                setAlert({
                    title: "Success!",
                    message: "Lead saved successfully!",
                    variant: "success",
                });
                setTimeout(() => router.push("/leads"), 2000); // Navigate after 3s
            } else {
                setAlert({
                    title: "Failure!",
                    message: "Error saving lead.",
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

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">
                <div className="col-span-1">
                    <Label>Situation</Label>
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-6 py-3 border rounded-lg text-sm w-full">
                        <option value="">--Select--</option>
                        <option value="1">Assessed</option>
                        <option value="2">Open</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>First Name*:</Label>
                    <Input type="text" name="fname" defaultValue={formData.fname} onChange={handleChange} placeholder="Hasan" />
                </div>

                <div className="col-span-1">
                    <Label>Last Name*:</Label>
                    <Input type="tex" name="lname" defaultValue={formData.lname} onChange={handleChange} placeholder="Ali" />
                </div>

                <div className="col-span-1">
                    <Label>Gender:</Label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="dark:bg-gray-900 dark:text-gray-600 px-6 py-3 border rounded-lg text-sm w-full">
                        <option value="">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Year:</Label>
                    <select name="year" value={formData.year} onChange={handleChange} className="dark:bg-gray-900 dark:text-gray-600 px-6 py-3 border rounded-lg text-sm w-full">
                        <option value="">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Home Phone:</Label>
                    <Input type="text" name="homePhone" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Mobile Phone:</Label>
                    <Input type="text" name="mobile" defaultValue={formData.mobile} onChange={handleChange} placeholder="+09 363 398 46" />
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
                    <select name="status" value={formData.status} onChange={handleChange} className="dark:bg-gray-900 dark:text-gray-600 px-6 py-3 border rounded-lg text-sm w-full">
                        <option value="">--Select--</option>
                        <option value="Open">Open</option>
                        <option value="Assessed">Assessed</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Rating:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <Input type="email" name="email" defaultValue={formData.email} onChange={handleChange} placeholder="hasaneducationadvisor@gmail.com" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <input type="checkbox" className="mr-2" placeholder="Team Manager" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email Opt Out:</label>
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

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
                    <Input type="text" placeholder="United Kingdom" />
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />


            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Type
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">

                <div className="col-span-1">
                    <input type="radio" name="type" value="active" checked={formData.type === "active"}
                        onChange={handleChange} className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Active</label>
                </div>
                <div className="col-span-1">
                    <input type="radio" name="type" value="inactive" checked={formData.type === "inactive"}
                        onChange={handleChange} className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Inactive</label>
                </div>
                <div className="col-span-1">
                    <input type="radio" name="type" value="onhold" checked={formData.type === "onhold"}
                        onChange={handleChange} className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">On hold</label>
                </div>
                <div className="col-span-1">
                    <input type="radio" name="type" value="contacted" checked={formData.type === "contacted"}
                        onChange={handleChange} className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Contacted</label>
                </div>
                <div className="col-span-1">
                    <input type="radio" name="type" value="open" checked={formData.type === "open"}
                        onChange={handleChange} className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Open</label>
                </div>
                <div className="col-span-1">
                    <input type="radio" name="type" value="visited" checked={formData.type === "visited"}
                        onChange={handleChange} className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Visited</label>
                </div>
                <div className="col-span-2">
                    <div className="flex flex-row items-center">
                        <input type="radio" className="mr-2" />
                        <Input type="text" placeholder="Other" className="mr-2" />
                    </div>

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
                Lead Insterest
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-5">

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
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Events (Non-School)</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Internet</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">TV</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Referral</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Radio</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">School Related</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Other</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Previously Attended</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Direct Mail</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Print (Non-School)</label>
                </div>
                {/* <div className="col-span-1">
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
                <div className="col-span-1">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Not Specified</label>
                </div>
                {/* <div style={{ marginTop: '-10px' }}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Promotional:</label>
                    <select className="dark:bg-gray-900 dark:text-gray-600 px-2 py-1 border rounded-lg text-sm w-1/2">
                        <option value="">--Select--</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div> */}
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Button size="sm" variant="outline" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button size="sm" onClick={handleAddLead}>
                    Save
                </Button>
                {/* Show alert when triggered */}
                {alert && (
                    <Alert
                        title={alert.title}
                        message={alert.message}
                        variant={alert.variant}
                        duration={2000}
                        onClose={() => setAlert(null)} // Clear alert after timeout
                    />
                )}
            </div>


        </div>


    );

}
