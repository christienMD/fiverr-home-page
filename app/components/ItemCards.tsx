"use client";
import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface InspiredItem {
  title: string;
  imgUrl: string;
}

const ItemCards = ({ title, imgUrl }: InspiredItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <Image
        src={imgUrl}
        alt={title}
        height={0}
        width={0}
        className="rounded-md object-cover w-[100%] h-auto hover:cursor-pointer"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-3 p-2 flex items-center hover:opacity-95 hover:cursor-pointer rounded-full bg-white">
        <HeartIcon className="h-5 w-5 text-gray-600" />
      </div>
      <div className="my-2 flex items-center justify-between">
        <h3 className="text-xs sm:text-sm font-semibold">{title}</h3>
        <div className="relative inline-flex p-2 hover:bg-gray-100 hover:border-gray-200 rounded-full cursor-pointer">
          <EllipsisHorizontalIcon
            onClick={toggleDropdown}
            className="h-6 w-6"
          />
          {isOpen && (
            <div className="absolute right-0 top-7 mt-2 w-60 bg-gray-50 text-gray-700 shadow-md rounded-lg py-2 z-20">
              <p className="p-2 hover:bg-gray-100 rounded-md">See Gig</p>
              <p className="p-2 hover:bg-gray-100 rounded-md">
                About The Seller
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
