"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button/Button";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Alert from "../ui/alert/Alert"
// import TextArea from "@/components/form/input/TextArea";

export default function BasicTableOne() {
    const [alert, setAlert] = useState<{ title: string; message: string; variant: "success" | "error" | "warning" | "info" } | null>(null);

    const [formData, setFormData] = useState({
        sname: "",
        level: "",
        type: "",
        enroll: "",
        site: "",
        number_s: "",
        area: "",
        email: "",
        postalCode: ""

    });


    const router = useRouter();

    const handleAddSchool = async () => {
        try {
            const response = await fetch("/api/addschool_ld", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (data.success) {
                setAlert({
                    title: "Success!",
                    message: "School saved successfully!",
                    variant: "success",
                });
                setTimeout(() => router.push("/school_ld"), 2000); // Navigate after 3s
            } else {
                setAlert({
                    title: "Failure!",
                    message: "Error saving school.",
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

    const [schoolLevel, setSchoolLevel] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Update both formData and academicYear if the academic year field is changed
        if (name === "level") {
            setSchoolLevel(value);  // Updates academicYear separately
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const isSchoolType = () => {
        const type = schoolLevel;
        return type
    };

    const handleCancel = () => {
        router.push("/school_ld"); // Navigate to the 'lead' page

    };

    return (
        <div>
            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                School Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
                <div className="col-span-1">
                    <Label>Name*:</Label>
                    {/* <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full">
                        <option value="">All</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select> */}
                    <Input type="text" name="sname" defaultValue={formData.sname} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Principal:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Assistant:</Label>
                    <Input type="text" placeholder="" />
                </div>

                <div className="col-span-1">
                    <Label>Phone:</Label>
                    <Input type="text" placeholder="+09 363 398 46" />
                </div>

                <div className="col-span-1">
                    <Label>Email:</Label>
                    <Input type="email" name="email" defaultValue={formData.email} onChange={handleChange} />
                </div>

                <div className="col-span-1">
                    <Label>Website:</Label>
                    <Input type="text" name="site" defaultValue={formData.site} onChange={handleChange} />
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
                    <Label>School Level:</Label>
                    <select
                        className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full"
                        name="level"
                        value={formData.level}
                        onChange={(e) => {
                            setSchoolLevel(e.target.value); // Separate state update
                            handleChange(e); // Also update formData
                        }}>
                        <option value="">--Select--</option>
                        <option value="Primary">Primary</option>
                        <option value="Secondary">Secondary</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>School Type:</Label>
                    <select className={`px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full ${isSchoolType() == "Secondary" ? "text-gray-900 dark:text-white" : "opacity-50 cursor-not-allowed"}`}
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        disabled={isSchoolType() !== "Secondary"}
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
                    <Label>School Enroll:</Label>
                    <select className="px-6 py-3 dark:bg-gray-900 text-gray-600 border rounded-lg text-sm dark:text-gray-400 w-full"
                        name="enroll" defaultValue={formData.enroll} onChange={handleChange}>
                        <option value="">--Select--</option>
                        <option value="Primay">Primary</option>
                        <option value="Secondary">Secondary</option>
                    </select>
                </div>

                <div className="col-span-1">
                    <Label>Receptionist:</Label>
                    <Input type="text" placeholder="" />
                </div>
            </div>

            {/* Line Separator */}
            <hr className="my-6" />

            {/* Address Information */}

            <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
                Address Information
            </h4>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4">
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
                <Button size="sm" onClick={handleAddSchool}>
                    Save
                </Button>
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
