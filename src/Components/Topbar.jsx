import React from "react";
import { FiTrash2, FiMoreHorizontal } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Text */}
        <span className="text-3xl font-bold">New Chat</span>
        {/* SVG Icon (example: chat icon) */}
        <img src="/edit.svg" alt="" className="mt-1" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Delete Icon */}
        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
          <FiTrash2 className="w-6 h-6 text-gray-600 hover:text-red-600 cursor-pointer" />
        </div>{" "}
        {/* Options Icon (Three Dots) */}
        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
          <FiMoreHorizontal className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
