
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Button from "@/components/ui/button/Button";
import Calen_Eve from "@/components/dashboard/Calen_Eve";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";
import { Calendar, CreditCard } from "lucide-react";
//import { FaCalendarAlt } from 'react-icons/fa';  // Import the calendar icon

import Image from "next/image";


export default function Dashboard() {

    const data = [
        { name: "Completed", value: 17, color: "#4CAF50" }, // Green
        { name: "In Progress", value: 69, color: "#1B4DF1" }, // Orange
        { name: "Upcoming", value: 9, color: "#2196F3" }, // Blue
        { name: "Withdrawn", value: 5, color: "#F44336" }, // Red
    ];


    const [selectedOpt, setSelectedOpt] = useState("2"); // Default: 'Today'
    const [chartData, setChartData] = useState<{ date: string; value: number }[]>([]);

    const generateChartData = (option: string) => {
        let days = 1;
        if (option === "2") days = 7; // Last 7 Days
        else if (option === "3") days = 30; // Last Month
        else if (option === "4") days = 60; // Last 2 Months
        else if (option === "5") days = 90; // Last 3 Months

        const data = [];
        for (let i = days; i >= 0; i--) {
            data.push({
                date: dayjs().subtract(i, "day").format("MMM D"), // Format: 'Mar 2'
                value: Math.floor(Math.random() * 10), // Random value between 0-10
            });
        }
        setChartData(data);
    };

    // Handle select change
    const displayToReports = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOpt(event.target.value);
    };

    // Update chart when option changes
    useEffect(() => {
        generateChartData(selectedOpt);
    }, [selectedOpt]);



    const [activeTab, setActiveTab] = useState(0);

    const notice_tabs = ["School", "Admin", "Teachers", "Students", "Parents"];
    // const tabContents = [
    //   "Content for School",
    //   "Content for Admin",
    //   "Content for Tab 3",
    //   "Content for Tab 4",
    //   "Content for Tab 5",
    // ];
    const event_tabs = ["Events", "Class Schedule"];
    const [activeEveTab, setActiveEveTab] = useState(0);

    const birth_tabs = ["Today's", "Upcoming"];
    const [activeBirthTab, setActiveBirthTab] = useState(0);

    const skill_tabs = ["Students", "Teachers", "Alumni"];
    const [activeSkillTab, setActiveSkillTab] = useState(0);
    return (
        <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6 mb-4">
                <div className="space-y-6">

                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-2">

                <div className="col-span-12 xl:col-span-4">
                    <div className="p-6 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 shadow-lg rounded-2xl min-h-72">
                        <div className="w-full md:w-1/2 text-center md:text-center">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-10">Hey, Hasan</h2>
                            <Button className="mt-2">
                                View Profile
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700 mb-2">
                                <Image
                                    src="/images/user/owner.jpg"
                                    alt="Avatar"
                                    width={120}
                                    height={120}
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-2 text-gray-900 dark:text-white font-medium">Hasan Ali</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">March 3, 2025</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-8">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md min-h-30 flex items-center justify-between">
                            <div className="w-5/6">
                                <div className="text-lg font-semibold text-gray-900 dark:text-white pb-2">Students</div>
                                <div className="pt-2 text-gray-600 dark:text-gray-400 grid grid-cols-3 text-center">
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">10</p>
                                        <p className="text-sm">Active</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">20</p>
                                        <p className="text-sm">Alumini</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">30</p>
                                        <p className="text-sm">Lecenses</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6 flex justify-center">
                                {/* <Users className="w-5 h-5" /> */}
                                <Image
                                    src="/assets/users.svg"
                                    alt="students"
                                    width={70}
                                    height={70}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-32 flex items-center justify-between">
                            <div className="w-5/6">
                                <div className="text-lg font-semibold text-gray-900 dark:text-white pb-2">Teachers & Admin Staff</div>
                                <div className="pt-2 text-gray-600 dark:text-gray-400 grid grid-cols-2 text-center">
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">10</p>
                                        <p className="text-sm">Teachers</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">20</p>
                                        <p className="text-sm">Admin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/6 flex justify-center">
                                <Image
                                    src="/assets/user.svg"
                                    alt="students"
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-32 flex items-center justify-between">
                            <div className="w-5/6">
                                <div className="text-lg font-semibold text-gray-900 dark:text-white pb-2">Events</div>
                                <div className="pt-2 text-gray-600 dark:text-gray-400 grid grid-cols-2 text-center">
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">10</p>
                                        <p className="text-sm">Upcoming</p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="w-1/6 flex justify-center">
                                <Button className="px-4 py-2"> <Calendar className="w-5 h-5" /></Button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-32 flex items-center ">
                            <div className="w-5/6">
                                <div className="text-lg font-semibold text-gray-900 dark:text-white pb-2">New Submissions</div>
                                <div className="pt-2 text-gray-600 dark:text-gray-400 grid grid-cols-3 text-center">
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">10</p>
                                        <p className="text-sm">Generic</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">20</p>
                                        <p className="text-sm">Preadmission</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">30</p>
                                        <p className="text-sm">Registration</p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="w-1/6 flex justify-center">
                                <Button className="px-4 py-2"> <CreditCard className="w-5 h-5" /></Button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-span-12">
                    {/* <EcommerceMetrics /> */}
                </div>

                <div className="col-span-12 xl:col-span-5">
                    {/* <DemographicCard /> */}
                </div>

                <div className="col-span-12 xl:col-span-7">
                    {/* <RecentOrders /> */}
                </div>
            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                <div className="flex items-center space-x-4"> {/* Use flexbox for horizontal alignment */}
                    <Image
                        src="/assets/acade.svg"
                        alt="star"
                        width={32}
                        height={32}
                        className="object-cover"
                    />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Academics & LMS Data Overview</h2>

                    {/* Combo box (Select dropdown) */}
                    <select className="p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300">
                        <option value="">Default Academic Session</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">
                <div className="col-span-12 space-y-6 xl:col-span-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        <div className="grid grid-cols-3 gap-2">
                            {/* Grid Item 1 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/class.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">77</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Class</span>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Item 2 */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/section.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">0</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Section</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/subject.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">30</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Subject</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/flip.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">20</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Flip Class</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/discuss.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">18</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Discussion</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/assess.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">34</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Assessment</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/quiz.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">9</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Quizzes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/live.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">46</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Live Lecture</span>
                                    </div>
                                </div>
                            </div><div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/resource.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-20 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">93</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Resources</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-6">
                    <div className="grid grid-cols-1 gap-2">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center">
                            <ResponsiveContainer width="75%" height={255}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>


                            {/* Legend */}
                            <div className="flex flex-col space-y-2">
                                {data.map((entry, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        {/* Color Box */}
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: entry.color }}
                                        ></div>
                                        {/* Label */}
                                        <span className="text-sm font-medium dark:text-gray-300">{entry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                <div className="flex items-center space-x-4"> {/* Use flexbox for horizontal alignment */}
                    <Image
                        src="/assets/report.svg"
                        alt="star"
                        width={32}
                        height={32}
                        className="object-cover"
                    />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Reports Overview</h2>

                    {/* Combo box (Select dropdown) */}
                    <select onChange={displayToReports}
                        value={selectedOpt} 
                        className="p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300">
                        <option value="1">Today</option>
                        <option value="2">Last 7 Days</option>
                        <option value="3">Last Month</option>
                        <option value="4">Last 2 Months</option>
                        <option value="5">Last 3 Months</option>
                        <option value="">Custom</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">
                <div className="col-span-12 space-y-6 xl:col-span-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {/* Title Row (1:5 ratio) */}
                        <div className="grid grid-rows-8 gap-2 min-h-72">
                            <div className="flex items-center justify-center text-medium font-semibold dark:text-gray-300">
                                {selectedOpt === "1" ? "Today's Students" : "New Students"}
                            </div>

                            {/* Chart Row (5/6 of space) */}
                            <div className="row-span-7">
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={chartData}>
                                        <XAxis dataKey="date" />
                                        <YAxis domain={[0, 10]} />
                                        <Tooltip />

                                        {/* Y-Axis Grid Line */}
                                        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={true} />
                                        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {/* Title Row (1:5 ratio) */}
                        <div className="grid grid-rows-8 gap-2 min-h-72">
                            <div className="flex items-center justify-center text-medium font-semibold dark:text-gray-300">
                                {selectedOpt === "1" ? "Today's Attendance" : "Attendance"}
                            </div>

                            {/* Chart Row (5/6 of space) */}
                            <div className="row-span-7">
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={chartData}>
                                        <XAxis dataKey="date" />
                                        <YAxis domain={[0, 10]} />
                                        <Tooltip />

                                        {/* Y-Axis Grid Line */}
                                        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={true} />
                                        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {/* Title Row (1:5 ratio) */}
                        <div className="grid grid-rows-8 gap-2 min-h-72">
                            <div className="flex items-center justify-center text-medium font-semibold dark:text-gray-300">
                                {selectedOpt === "1" ? "Today's CRM Submission" : "CRM Submisston"}
                            </div>

                            {/* Chart Row (5/6 of space) */}
                            <div className="row-span-7">
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={chartData}>
                                        <XAxis dataKey="date" />
                                        <YAxis domain={[0, 10]} />
                                        <Tooltip />

                                        {/* Y-Axis Grid Line */}
                                        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={true} />
                                        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {/* Title Row (1:5 ratio) */}
                        <div className="grid grid-rows-8 gap-2 min-h-72">
                            <div className="flex items-center justify-center text-medium font-semibold dark:text-gray-300">
                                {selectedOpt === "1" ? "Today's Fees & CRM Payments" : "Fees & CRM Payments"}
                            </div>

                            {/* Chart Row (5/6 of space) */}
                            <div className="row-span-7">
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={chartData}>
                                        <XAxis dataKey="date" />
                                        <YAxis domain={[0, 10]} />
                                        <Tooltip />

                                        {/* Y-Axis Grid Line */}
                                        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={true} />
                                        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {/* Title Row (1:5 ratio) */}
                        <div className="grid grid-rows-8 gap-2 min-h-72">
                            <div className="flex items-center justify-center text-medium font-semibold dark:text-gray-300">
                                {selectedOpt === "1" ? "Today's E-Commerce Payments" : "E-Commerce Payments"}
                            </div>

                            {/* Chart Row (5/6 of space) */}
                            <div className="row-span-7">
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={chartData}>
                                        <XAxis dataKey="date" />
                                        <YAxis domain={[0, 10]} />
                                        <Tooltip />

                                        {/* Y-Axis Grid Line */}
                                        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={true} />
                                        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 space-y-6 xl:col-span-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                        {/* Title Row (1:5 ratio) */}
                        <div className="grid grid-rows-8 gap-2 min-h-72">
                            <div className="flex items-center justify-center text-medium font-semibold dark:text-gray-300">
                                {selectedOpt === "1" ? "Today's Fundraising" : "Fundraising"}
                            </div>

                            {/* Chart Row (5/6 of space) */}
                            <div className="row-span-7">
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={chartData}>
                                        <XAxis dataKey="date" />
                                        <YAxis domain={[0, 10]} />
                                        <Tooltip />

                                        {/* Y-Axis Grid Line */}
                                        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontal={true} />
                                        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">

                <div className="col-span-12 space-y-6 xl:col-span-6">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/assets/notice.svg"
                                alt="notice"
                                width={30}
                                height={30}
                                className="object-cover"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notice Board</h2>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="grid grid-rows-6 gap-2 min-h-72">
                            {/* Tabs Row (1/6 height) */}
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                {notice_tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 text-sm font-medium ${activeTab === index
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content Row (5/6 height) */}
                            <div className="row-span-5 flex items-center justify-center p-4">
                                <p className="text-gray-700 dark:text-gray-300"></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-span-12 space-y-6 xl:col-span-6">

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/assets/birth.svg"
                                alt="students"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Birthdays</h2>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="grid grid-rows-6 gap-2 min-h-72">
                            {/* Tabs Row (1/6 height) */}
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                {birth_tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 text-sm font-medium ${activeBirthTab === index
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                            }`}
                                        onClick={() => setActiveBirthTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content Row (5/6 height) */}
                            <div className="row-span-5 flex items-center justify-center p-4">
                                <p className="text-gray-700 dark:text-gray-300"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                <div className="flex items-center space-x-4"> {/* Use flexbox for horizontal alignment */}
                    {/* Display the text */}
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Payment Transactions</h2>
                </div>
            </div>


            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">
                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-72">

                    </div>
                </div>
            </div>


            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                <div className="flex items-center space-x-4"> {/* Use flexbox for horizontal alignment */}
                    {/* Display the text */}
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Form Submissions</h2>
                </div>
            </div>


            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">
                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-72">

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">

                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/assets/events.svg"
                                alt="students"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Events and Class Schedule</h2>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="grid grid-rows-1">
                            {/* Tabs Row (1/6 height) */}
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                {event_tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 text-sm font-medium ${activeEveTab === index
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                            }`}
                                        onClick={() => setActiveEveTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content Row (5/6 height) */}
                            {/* <div className="row-span-5 flex items-center justify-center p-4">
                                
                            </div> */}
                        </div>
                    </div>
                    <Calen_Eve />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4">

                <div className="col-span-12 space-y-6 xl:col-span-12">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/assets/star.svg"
                                alt="star"
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Directory & Skill Based Search</h2>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-4">
                        <div className="grid grid-rows-6 gap-2 min-h-72">
                            {/* Tabs Row (1/6 height) */}
                            <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                                {skill_tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 text-sm font-medium ${activeSkillTab === index
                                            ? "text-blue-600 border-b-2 border-blue-600"
                                            : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
                                            }`}
                                        onClick={() => setActiveSkillTab(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content Row (5/6 height) */}
                            <div className="row-span-5 flex items-center justify-center p-4">
                                <p className="text-gray-700 dark:text-gray-300"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
}
