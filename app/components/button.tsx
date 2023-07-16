'use client'
import React from "react";

export default function DropdownComponent() {
    return (
        <div className="relative w-[70%] lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border  shadow-sm outline-none appearance-none focus:border-indigo-600">
            {/* <option>Select Statuse</option> */}
                <option>TODO</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>
        </div>
    );
}