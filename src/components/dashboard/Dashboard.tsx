
"use client";
import React from "react";
//import UserMetaCard from "@/components/user-profile/UserMetaCard";

// import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
// import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
// import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "@/components/ecommerce/StatisticsChart";
// import RecentOrders from "@/components/ecommerce/RecentOrders";
// import DemographicCard from "@/components/ecommerce/DemographicCard";

import Button from "@/components/ui/button/Button";
// import { useTheme } from "next-themes";
import { Users, User, Calendar, CreditCard } from "lucide-react";
//import { FaCalendarAlt } from 'react-icons/fa';  // Import the calendar icon
import Image from "next/image";
export default function Dashboard() {

    //const { theme } = useTheme();


    return (
        <div style={{fontFamily: 'Arial'}}>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6 mb-2">
                <div className="space-y-6">
                    {/* type tilebar code */}
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6">

                <div className="col-span-12 xl:col-span-4">
                    <div className="p-6 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 shadow-lg rounded-2xl min-h-72">
                        <div className="w-full md:w-1/2 text-center md:text-center">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Hey, Hasan</h2>
                            <Button className="mt-2">
                                View Profile
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700">
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
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-30 flex items-center justify-between">
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
                                <Button className="px-4 py-2"> <Users className="w-5 h-5" /></Button>
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
                                <Button className="px-4 py-2"> <User className="w-5 h-5" /></Button>
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
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-32 flex items-center justify-between">
                            <div className="w-5/6">
                                <div className="text-lg font-semibold text-gray-900 dark:text-white pb-2">New Submissions</div>
                                <div className="pt-2 text-gray-600 dark:text-gray-400 grid grid-cols-3 text-center">
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">10</p>
                                        <p className="text-sm">Generic</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">20</p>
                                        <p className="text-sm">Students Preadmission</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900 dark:text-white">30</p>
                                        <p className="text-sm">Teachers Registration</p>
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
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-2 mb-2">
                <div className="flex items-center space-x-4"> {/* Use flexbox for horizontal alignment */}
                    {/* Display the text */}
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Academics & LMS Data Overview</h2>

                    {/* Combo box (Select dropdown) */}
                    <select className="p-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300">
                        <option value="">Default Academic Sesstion</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-6">

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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
                                        {/* Text on bottom */}
                                        <span className="text-gray-600 text-sm dark:text-gray-400">Live Lectures</span>
                                    </div>
                                </div>
                            </div><div className="flex flex-col items-center justify-center space-y-2">
                                <div className="flex items-center space-x-2"> {/* Reduced space between the icon and text */}
                                    {/* Left side: Icon */}
                                    <div className="flex items-center justif-bottom h-20 w-20">
                                        <img src="/assets/academic/resource.svg" alt="SVG Icon" className="h-full w-full object-contain" />
                                    </div>

                                    {/* Right side: Number and Text */}
                                    <div className="flex flex-col items-middle justify-left h-20 w-2 space-y-1">
                                        {/* Number on top */}
                                        <span className="text-2xl font-semibold dark:text-gray-300">1</span>
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
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-96 flex items-center justify-between">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
