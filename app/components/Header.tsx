import Link from "next/link";
import React from "react";
import AnimatedSearch from "./AnimatedSearch";
import GraphicsDesignDropdown from "./dropdowns/GraphicsDesignDropdown";
import ProgrammingTechDropdown from "./dropdowns/ProgrammingTechDropdown";
import DigitalMarketingDrop from "./dropdowns/DigitalMarketingDrop";

const Header = () => {
  return (
    <header className="border-b xl:px-0 relative">
      <div className="hidden sm:flex items-center container mx-auto md:max-w-7xl whitespace-nowrap gap-2">
        <div className="group relative inline-flex">
          <button className="py-2.5 inline-flex items-center gap-x-2 font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200">
            Graphics & Design
          </button>
          <div className="absolute left-0 top-10 hidden group-hover:block">
            <GraphicsDesignDropdown />
          </div>
        </div>

        <div className="group inline-flex">
          <button className="py-2.5 inline-flex items-center gap-x-2 font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200">
            Programming & Tech
          </button>
          <div className="absolute left-10 top-10 hidden group-hover:block">
            <ProgrammingTechDropdown />
          </div>
        </div>

        <div className="group inline-flex">
          <button className="py-2.5 inline-flex items-center gap-x-2 font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200">
            Digital Marketing
          </button>
          <div className="absolute left-10 top-10 hidden group-hover:block">
            <DigitalMarketingDrop />
          </div>
        </div>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          Video & Animation
        </Link>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          Writing & Translation
        </Link>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          Music & Audio
        </Link>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          Business
        </Link>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          Consulting
        </Link>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          AI Services
        </Link>

        <Link
          href="#"
          className="py-2.5 inline-flex items-center font-medium text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200"
        >
          Personal Growth
        </Link>
      </div>
      <div className="sm:hidden p-4">
        <AnimatedSearch />
      </div>
    </header>
  );
};

export default Header;

// import Link from "next/link";
// import React from "react";
// import CustomSwiper from "./CustomSwiper";
// import AnimatedSearch from "./AnimatedSearch";

// interface HeaderLink {
//   href: string;
//   label: string;
// }

// const headerLinks: HeaderLink[] = [
//   { href: "#", label: "Graphics & Design" },
//   { href: "#", label: "Programming & Tech" },
//   { href: "#", label: "Digital Marketing" },
//   { href: "#", label: "Video & Animation" },
//   { href: "#", label: "Writing & Translation" },
//   { href: "#", label: "Music & Audio" },
//   { href: "#", label: "Business" },
//   { href: "#", label: "Consulting" },
//   { href: "#", label: "AI Services" },
//   { href: "#", label: "Personal Growth" },
// ];

// const Header = () => {
//   const renderHeaderLink = (link: HeaderLink) => (
//     <Link href={link.href}>
//       <button className="cursor-pointer px-4 pb-2 flex items-center text-gray-900 text-opacity-80 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap">
//         {link.label}
//       </button>
//     </Link>
//   );

//   return (
//     <header className="border-b px-6 xl:px-0">
//       <div className="container mx-auto md:max-w-7xl hidden xxl:flex items-center">
//         {headerLinks.map((link, index) => (
//           <button
//             key={index}
//             className="cursor-pointer px-1 py-2 flex items-center text-gray-900 text-opacity-80 text-base hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap"
//           >
//             <Link href={link.href}>{link.label}</Link>
//           </button>
//         ))}
//       </div>
//       <div className="hidden sm:block">
//         <CustomSwiper
//           data={headerLinks}
//           renderItem={renderHeaderLink}
//           slidesPerView="auto"
//           spaceBetween={0}
//           useInternalNavigation={true}
//           iconBg="bg-transparent bg-opacity-50"
//           svgSize="h-4 w-4"
//           hasOverlayLeft={true}
//         />
//       </div>
//       <div className="sm:hidden p-4">
//         <AnimatedSearch />
//       </div>
//     </header>
//   );
// };

// export default Header;
