"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon } from "@/icons";
import Link from "next/link";
import React from "react";

export default function SignInForm() {

    return (
        <div className="flex flex-col flex-1 p-6 rounded-2xl sm:rounded-none sm:border-0 sm:p-8">
            <div className="w-full max-w-md pt-10 mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                    <ChevronLeftIcon />
                    Back to Sign In
                </Link>
            </div>
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-center text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                            Reset your password
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your CORE-LEM email address so we can reset your password.
                        </p>
                    </div>
                    <div>

                        <form className="space-y-5">

                            <div className="space-y-6">
                                <div>
                                    <Label>
                                        Email <span className="text-error-500">*</span>{" "}
                                    </Label>
                                    <Input name="email" placeholder="Enter Email" />
                                </div>
                                <div>
                                    <Button className="w-full" size="sm">
                                        Send Reset Link
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
