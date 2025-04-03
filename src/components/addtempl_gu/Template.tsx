
"use client";
import React from "react";
import RichTextEditor from "@/components/common/RichTextEditor";
export default function BasicTableOne() {


    return (
        <div>
            <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white/90 mb-10">
                    Template Information
                </h4>
                <div className="grid grid-cols-1 gap-2 mb-10">
                    <div className="flex flex-col mb-10">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Template Name:</label>
                        <input type="text" className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/6" />
                    </div>

                    <div className="flex flex-col mb-10">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject:</label>
                        <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/6">
                            <option value="">--Select--</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">Body:</label>
                        
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
                <div className="max-w-full overflow-x-auto">
                    <div className="min-w-[1102px]">
                    <RichTextEditor />
                    </div>
                </div>
            </div>

            {/* Pagination and Export to Excel button aligned */}
            <div className="flex justify-between items-center mt-4">
                {/* Pagination (Centered) */}
                <div className="flex justify-center space-x-2 flex-grow">
                </div>

                {/* Export to Excel button (Right aligned) */}
                <div className="flex justify-end gap-2">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Save
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
