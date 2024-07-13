import React, { useState } from "react";

interface Props {
  onClick?: () => void;
}

const SearchInput = ({ onClick }: Props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const recentSearches = ["seo"];
  const popularSearches = [
    "seo",
    "social media marketing",
    "facebook ads",
    "google ads",
    "logo design",
    "video editing",
    "data entry",
    "website development",
    "virtual assistant",
    "youtube thumbnail",
  ];

  return (
    <div className="relative w-full">
      <form className="w-full mx-auto">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:outline-none"
              placeholder="What Service are you Looking for today?."
              required
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
            />
            <button
              type="submit"
              className="absolute hidden lg:inline-block top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:opacity-80 focus:outline-none"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      {isInputFocused && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            style={{ top: "64px" }}
          ></div>
          <div className="absolute left-0 right-0 bg-white p-4 mt-2 rounded-md shadow-lg z-40">
            {recentSearches.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">RECENT SEARCHES</h3>
                  <button className="text-blue-500 text-sm">Clear</button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h3 className="font-bold mb-2">POPULAR RIGHT NOW</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchInput;

// import React from 'react'

// interface Props {
//   onClick?: () => void;
// }

// const SearchInput = ({onClick}: Props) => {
//   return (
//     <form className="w-full mx-auto">
//       <div className="flex">
//         <div className="relative w-full">
//           <input
//             type="search"
//             id="search-dropdown"
//             className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:outline-none"
//             placeholder="What Service are you Looking for today?."
//             required
//           />
//           <button
//             type="submit"
//             className="absolute hidden lg:inline-block top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:opacity-80 focus:outline-none"
//           >
//             <svg
//               className="w-4 h-4"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//             <span className="sr-only">Search</span>
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default SearchInput
