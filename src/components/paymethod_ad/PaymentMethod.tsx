
"use client";
import React, { useState } from "react";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";

interface Order {
    id: number;
    user: {
        //image: string;
        firstName: string;
        lastName: string;
    };
    contactType: string;
    subject: string;
    contactInfo: string;
    priority: string;
    status: string;
    dueDate: string;
}
export default function BasicTableOne() {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const openCreditDebit = (activity: Order) => {
        setIsEditOpen(true);
    };

    const closeEditModal = () => {
        setIsEditOpen(false);
    };

    return (
        <div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        <div >
                            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
                                <div >
                                    <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                                        <Button onClick={openCreditDebit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </Button>
                                    </div>
                                    <h3 className="mb-1 font-medium text-gray-800 text-theme-x1 dark:text-white/90">Credit/Debit</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">This page enables franchisees to create and close job postings. Franchisees, please be advised.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
                                <div >
                                    <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                                        <Button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </Button>
                                    </div>
                                    <h2 className="mb-1 font-medium text-gray-800 text-theme-xl dark:text-white/90">Direct Deposit</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">This page enables franchisees to create and close job postings. Franchisees, please be advised.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
                                <div >
                                    <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                                        <Button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </Button>
                                    </div>
                                    <h1 className="mb-1 font-medium text-gray-800 text-theme-xl dark:text-white/90">Cash</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">This page enables franchisees to create and close job postings. Franchisees, please be advised.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
                                <div>
                                    <div className="mb-5 flex h-14 max-w-14 items-center justify-center rounded-[10.5px] bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                                        <Button>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </Button>
                                    </div>
                                    <h4 className="mb-1 font-medium text-gray-800 text-theme-xl dark:text-white/90">Cheque</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur cum et ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modals */}

            <Modal isOpen={isEditOpen} onClose={closeEditModal} className="max-w-2xl p-5 lg:p-10 rounded-xl shadow-lg">
                {/* Title */}
                <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Credit / Debit</h2>
                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>

                {/* Flex container to separate form and card */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Side - Form */}
                    <div className="w-full md:w-1/2 space-y-4">
                        {/* Guardian */}
                        <div>
                            <Label>Guardian*</Label>
                            <select className="w-full p-3 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800">
                                <option>Core UK</option>
                            </select>
                        </div>

                        {/* Name on Card */}
                        <div>
                            <Label>Name on Card*</Label>
                            <Input type="text" defaultValue="Zeenath" className="w-full" />
                        </div>

                        {/* Card Number */}
                        <div>
                            <Label>Card Number*</Label>
                            <Input type="text" defaultValue="4240 9400 0451 9426" className="w-full" />
                        </div>

                        {/* Expiration */}
                        <div>
                            <Label>Expiration*</Label>
                            <div className="flex space-x-2">
                                <select className="w-full p-3 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800">
                                    <option>01</option>
                                </select>
                                <select className="w-full p-3 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-800">
                                    <option>25</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Card Display */}
                    <div className="w-full md:w-1/2 flex  items-center justify-center">
                        <div className="w-80 h-44 bg-gradient-to-r from-green-500 to-blue-900 rounded-xl p-6 flex flex-col justify-center shadow-lg">
                            <h3 className="text-white text-lg font-semibold">Zeenath</h3>
                            <div className="text-white text-xl tracking-widest">•••• 9426</div>
                            <div className="flex justify-between text-white text-sm">
                                <span>01/25</span>
                                <span className="text-lg font-bold">VISA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center mt-6">
                    <Button className="bg-green-500 text-white px-10">
                        Pay
                    </Button>
                </div>
            </Modal>
        </div>

    );
}


