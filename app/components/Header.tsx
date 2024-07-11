import Link from "next/link";
import React from "react";
import CustomSwiper from "./CustomSwiper";
import AnimatedSearch from "./AnimatedSearch";

interface HeaderLink {
  href: string;
  label: string;
}

const headerLinks: HeaderLink[] = [
  { href: "#", label: "Graphics & Design" },
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
  const renderHeaderLink = (link: HeaderLink) => (
    <Link href={link.href}>
      <button className="cursor-pointer px-4 pb-2 flex items-center text-gray-600 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap">
        {link.label}
      </button>
    </Link>
  );

  return (
    <header className="border-b px-6 xl:px-0">
      <div className="container mx-auto md:max-w-7xl hidden xl:flex items-center">
        {headerLinks.map((link, index) => (
          <button
            key={index}
            className="cursor-pointer px-1 py-2 flex items-center text-gray-600 hover:text-gray-900 border-b-4 border-transparent hover:border-green-500 transition-colors duration-200 whitespace-nowrap"
          >
            <Link href={link.href}>{link.label}</Link>
          </button>
        ))}
      </div>
      <div className="hidden sm:block xl:hidden">
        <CustomSwiper
          data={headerLinks}
          renderItem={renderHeaderLink}
          slidesPerView="auto"
          spaceBetween={0}
          useInternalNavigation={true}
        />
      </div>
      <div className="sm:hidden p-4">
        <AnimatedSearch />
      </div>
    </header>
  );
};

export default Header;
