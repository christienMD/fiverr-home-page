import React, { useState } from "react";

interface Props {
  onClick?: () => void;
}

const AnimatedSearch = ({ onClick }: Props) => {
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const handleInputFocus = () => {
    setIsBackdropVisible(true);
  };

  const handleBackdropClick = () => {
    setIsBackdropVisible(false);
  };

  return (
    <>
      {isBackdropVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleBackdropClick}
        ></div>
      )}
      <form className="w-full mx-auto relative z-50">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:outline-none"
              placeholder="Find Services"
              required
              onFocus={handleInputFocus}
            />
            {/* <button
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default AnimatedSearch;
