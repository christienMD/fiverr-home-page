"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div>
      <button onClick={handleToggle} className="text-lg">
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
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      />

      {/* Sidebar */}
      <div
        id="docs-sidebar"
        className={`fixed top-0 left-0 h-full max-w-xs w-64 z-[60] bg-white border-r transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        tabIndex={-1}
      >
        <div className="p-4">
          <h2 className="flex items-center gap-2 mt-3.5">
            <Image
              width={38}
              height={38}
              className="inline-block size-[38px] rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="User Avatar"
            />
            <p className="text-opacity-80 font-medium">md_christien</p>
          </h2>
        </div>

        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <li>
              <Link
                href="/"
                className="block py-2 px-2.5 text-[17px] text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/inbox"
                className="block py-2 px-2.5 text-[17px] text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Inbox
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="block py-2 px-2.5 text-[17px] text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/lists"
                className="block py-2 px-2.5 text-[17px] text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Lists
              </Link>
            </li>
            <li className="hs-accordion" id="account-accordion">
              <div
                className="flex justify-between items-center py-2 px-2.5 text-[17px] text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={handleCategoryToggle}
              >
                <span>Browse categories</span>
                <span
                  className={`transition-transform duration-300 ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </div>

              <div
                id="account-accordion-child"
                className={`overflow-hidden transition-[height] duration-300 ${
                  isCategoryOpen ? "block" : "hidden"
                }`}
              >
                <ul className="pt-2 ps-2">
                  {[
                    "Graphics & Design",
                    "Programming & Tech",
                    "Digital Marketing",
                    "Video & Animation",
                  ].map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/category${index + 1}`}
                        className="flex justify-between items-center py-2 px-2.5 text-[17px] text-gray-700 rounded-lg hover:bg-gray-100"
                      >
                        <span>{category}</span>
                        <span>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;








// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   width="23"
      //   height="19"
      //   viewBox="0 0 23 19"
      //   className="cursor-pointer"
      //   // className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      //   onClick={handleToggle}
      // >
      //   <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
      //   <rect width="23" height="3" rx="1.5" fill="#555"></rect>
      //   <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
      // </svg>

//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
//           isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={handleToggle}
//       />

//       {/* Sidebar */}
//       <div
//         id="hs-overlay-example"
//         className={`fixed top-0 left-0 h-full max-w-xs w-full z-[100] bg-white border-r transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//         role="dialog"
//         tabIndex={-1}
//       >
//         <div className="flex justify-between items-center">
//           {/* <h3 className="font-bold text-gray-800 dark:text-white">
//             Offcanvas title
//           </h3>
//           <button
//             type="button"
//             className="flex justify-center items-center text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
//             onClick={handleToggle}
//           >
//             <span className="sr-only">Close modal</span>
//             <svg
//               className="flex-shrink-0 h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M18 6 6 18"></path>
//               <path d="m6 6 12 12"></path>
//             </svg>
//           </button>
//            */}
//         </div>
//         <div className="p-4 z-50">
//           <h2 className="flex items-center gap-2 mt-3.5">
//             <Image
//               width={19}
//               height={19}
//               className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-900"
//               src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
//               alt="Image Description"
//             />

//             <p className="text-opacity-80 font-medium">md_christien</p>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
