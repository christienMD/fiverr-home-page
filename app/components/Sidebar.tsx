"use client";

import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="19"
        viewBox="0 0 23 19"
        className="cursor-pointer"
        // className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleToggle}
      >
        <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
        <rect width="23" height="3" rx="1.5" fill="#555"></rect>
        <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
      </svg>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      />

      {/* Sidebar */}
      <div
        id="hs-overlay-example"
        className={`fixed top-0 left-0 h-full max-w-xs w-full z-[100] bg-white border-r transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        tabIndex={-1}
      >
        <div className="flex justify-between items-center">
          {/* <h3 className="font-bold text-gray-800 dark:text-white">
            Offcanvas title
          </h3>
          <button
            type="button"
            className="flex justify-center items-center text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            onClick={handleToggle}
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="flex-shrink-0 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
           */}
        </div>
        <div className="p-4 z-50">
          <button className="text-white bg-black hover:opacity-80 mt-3 rounded-md py-2 px-2">
            Join Fiverr
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
