import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import Sidebar from "./components/Sidebar";
import AnimatedSearch from "./components/AnimatedSearch";

const Navbar = () => {
  const links = [
    {
      label: "English",
      href: "/",
      icon: <GlobeAltIcon className="h-4 w-4 inline-flex" />,
    },
    { label: "Become a Seller", href: "/" },
  ];

  return (
    <header className="sticky z-40 top-0 border-b h-16 px-6 bg-white">
      <nav className="flex items-center">

      </nav>
    </header>
  );
};

export default Navbar;
