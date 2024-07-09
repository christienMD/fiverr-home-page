import React from "react";
import FiverrHeading from "./FiverrHeading";
import Image from "next/image";
import PopularCategoryCard, {
  PopularCategoryProps,
} from "./PopularCategoryCard";
import LevelBadge from "./LevelBadge";
import TopRatedBadge from "./TopRatedBadge";

const PopularCategories = () => {
  const popularCategories: PopularCategoryProps[] = [
    {
      title: "I will design attention grabbing minimalist logo",
      imgUrl:
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127591897/original/94cd7cd983c29cef01c28a8c8eb1394d3a6e3b91.jpg",
      name: "Sajid",
      price: 45,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a4788623bc718dee29bd3b3201f49613-1680469663623/8a504d18-d0f9-4bf8-bb7d-10fe2691d100.jpg",
      rating: 4.9,
      Badge: LevelBadge,
    },
    {
      title: "I will redesign edit or update your existing logo creatively",
      imgUrl:
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142221195/original/f654b68f3ceac0a5173ecc023b2e5c46cb85ddd2.jpg",
      name: "Shaju I.",
      price: 20,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2f7f1d428d0570ab44654f8c96c1f723-1576853089439/be17994b-204a-4be8-a280-34807e880ca2.jpg",
      rating: 4.9,
      Badge: LevelBadge,
    },

    {
      title: "I will design, redesign, edit, vectorize any logo or graphic",
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_cards_web,q_auto,f_auto/v1/attachments/delivery/asset/5bcfdfbe2a31c378b8d9539429f370a2-1719988098/PowderRiver3.jpg",
      name: "Senara.",
      price: 15,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d9115ffcf53de3387418d8a0489cde31-1561398716667/314860dc-5e7e-488d-876a-1e6c2b50008e.png",
      rating: 4.9,
      Badge: LevelBadge,
    },
    {
      title: "I will make brilliant designs to suit your need",
      imgUrl:
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98379278/original/bb6c9442816232f4839bfa3e0976cab6b2a1e878.jpg",
      name: "Prachi R.",
      price: 30,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/94e66a82b6f88eeac72fcce36a7fc8ad-1549031292382/0cedf496-b54d-4763-a665-5fde15e3c7e6.jpg",
      rating: 4.9,
      Badge: TopRatedBadge,
    },
  ];

  return (
    <div className="">
      <FiverrHeading
        label="Explore popular categories on Fiverr "
        styles="mt-8 mb-6"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 border border-gray-600 bg-gray-100 cursor-pointer p-3.5 rounded-md hover:bg-gray-100">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/listings_assets/gq_icons/49.svg"
              width={30}
              height={30}
            />
            <span className="font-semibold ">Service Website Development</span>
          </p>
          <p className="flex items-center gap-2 cursor-pointer p-3.5 rounded-md hover:bg-gray-100">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/listings_assets/gq_icons/514.svg"
              width={25}
              height={25}
            />
            <span className="font-semibold">Logo Design</span>
          </p>
          <p className="flex items-center gap-2 cursor-pointer p-3 rounded-md hover:bg-gray-100">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/listings_assets/gq_icons/67.svg"
              width={25}
              height={25}
            />
            <span className="font-semibold">
              Service Social Media Marketing
            </span>
          </p>
          <p className="flex items-center gap-2 cursor-pointer p-3.5 rounded-md hover:bg-gray-100">
            <Image
              alt=""
              src="https://fiverr-res.cloudinary.com/listings_assets/gq_icons/16.svg"
              width={25}
              height={25}
            />
            <span className="font-semibold">Service Voice Over</span>
          </p>
        </div>
        {popularCategories.map((category, index) => (
          <PopularCategoryCard
            key={index}
            name={category.name}
            title={category.title}
            imgUrl={category.imgUrl}
            rating={category.rating}
            price={category.price}
            profileImgUrl={category.profileImgUrl}
            Badge={category.Badge}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
