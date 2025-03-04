
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
import { useTheme } from "next-themes";
import { Users, User, Calendar, CreditCard } from "lucide-react";
//import { FaCalendarAlt } from 'react-icons/fa';  // Import the calendar icon
import Image from "next/image";
export default function Dashboard() {

    //const { theme } = useTheme();


    return (
        <div>
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
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-32 flex items-center justify-between">
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
                                <Button className="px-4 py-2"> <CreditCard  className="w-5 h-5" /></Button>
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
        </div>

    );
}
