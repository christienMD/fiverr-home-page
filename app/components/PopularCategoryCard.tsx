import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ComponentType } from "react";

export interface PopularCategoryProps {
  title: string;
  imgUrl: string;
  name: string;
  profileImgUrl: string;
  price: number;
  rating: number;
  Badge: ComponentType;
}

const PopularCategoryCard = ({
  title,
  imgUrl,
  name,
  profileImgUrl,
  price,
  rating,
  Badge,
}: PopularCategoryProps) => {
  return (
    <div className="relative cursor-pointer">
      <div className="h-48 w-full">
        <Image
          alt={title}
          src={imgUrl}
          width={0}
          height={0}
          className="w-[100%] h-[100%] rounded-md object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="absolute top-2 right-2">
        <HeartIcon className="h-7 w-7 text-white fill-gray-800" />
      </div>
      <div className="flex flex-col gap-1 mt-1">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image
              alt="name"
              src={profileImgUrl}
              width={27}
              height={27}
              className="object-cover rounded-full"
            />
            <span className="text-sm font-semibold text-opacity-85">
              {name}
            </span>
          </div>
          <Badge />
        </div>
        <Link href="#" className="hover:underline">
          {title}
        </Link>
        <div className="font-bold flex items-center gap-2">
          <svg
            className="flex-shrink-0 size-5 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          {rating} <span className="opacity-80">(1k+)</span>
        </div>
        <p className="font-semibold">From ${price}</p>
      </div>
    </div>
  );
};

export default PopularCategoryCard;
