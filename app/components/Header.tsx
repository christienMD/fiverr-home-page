import Link from "next/link";
import React from "react";
import CustomSwiper from "./CustomSwiper";
import AnimatedSearch from "./AnimatedSearch";

interface HeaderLink {
  href: string;
  label: string;
  dropdownItems?: { href: string; label: string }[];
}

const headerLinks: HeaderLink[] = [
  {
    href: "#",
    label: "Graphics & Design",
    dropdownItems: [
      { href: "#logos", label: "Logos" },
      { href: "#illustrations", label: "Illustrations" },
    ],
  },
  { href: "#", label: "Programming & Tech" },
  { href: "#", label: "Digital Marketing" },
  { href: "#", label: "Video & Animation" },
  { href: "#", label: "Writing & Translation" },
  { href: "#", label: "Music & Audio" },
  { href: "#", label: "Business" },
  { href: "#", label: "Consulting" },
  { href: "#", label: "AI Services" },
  { href: "#", label: "Personal Growth" },
];

const Header = () => {
  const renderHeaderLink = (link: HeaderLink) => {
    if (link.dropdownItems) {
      return (
        <div className="group relative inline-block">
          <button className="cursor-pointer px-4 pb-2 flex items-center text-gray-700 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap">
            {link.label}
          </button>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {link.dropdownItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <Link href={link.href}>
        <button className="cursor-pointer px-4 pb-2 flex items-center text-gray-700 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap">
          {link.label}
        </button>
      </Link>
    );
  };

  return (
    <header className="border-b px-6 xl:px-0">
      <div className="container mx-auto md:max-w-7xl hidden xxl:flex items-center">
        {headerLinks.map((link, index) => (
          <React.Fragment key={index}>{renderHeaderLink(link)}</React.Fragment>
        ))}
      </div>
      <div className="hidden sm:block">
        <CustomSwiper
          data={headerLinks}
          renderItem={renderHeaderLink}
          slidesPerView="auto"
          spaceBetween={0}
          useInternalNavigation={true}
          iconBg="bg-transparent bg-opacity-50"
          svgSize="h-4 w-4"
          hasOverlayLeft={true}
          hasOverlayRight={true}
        />
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
//       <button className="cursor-pointer px-4 pb-2 flex items-center text-gray-700 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap">
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
//             className="cursor-pointer px-1 py-2 flex items-center text-gray-700 text-base hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap"
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
