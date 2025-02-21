"use client";
import React from "react";
import Button from "../ui/button/Button";
export default function BasicTableOne() {

  return (
    <div>
        <div className="mb-6">
          <div className="grid grid-cols-3 gap-2">
             {/* Label and Combo Box */}
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assign Activities From:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                <option value="">--Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assign Activities To:</label>
              <select className="dark:bg-gray-900 px-4 py-2 border rounded-lg text-sm dark:text-gray-400 w-1/2">
                <option value="">--Select--</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <div className="self-end" style={{marginTop: '15px'}}>
              <Button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg w-1/2"
              >Save
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}
