"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";

const AnimatedSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <SearchInput onClick={handleToggle} />
      {/* <button
        type="button"
        className="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={handleToggle}
      >
        Toggle top offcanvas
      </button> */}

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      />

      {/* Offcanvas */}
      <div
        id="hs-overlay-top"
        className={`hs-overlay fixed top-0 inset-x-0 transition-all duration-300 transform z-[80] bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>
    </div>
  );
};

export default AnimatedSearch;
