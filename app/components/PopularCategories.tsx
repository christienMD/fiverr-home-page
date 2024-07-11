"use client";

import React, { useRef } from "react";
import FiverrHeading from "./FiverrHeading";
import Image from "next/image";
import PopularCategoryCard, {
  PopularCategoryProps,
} from "./PopularCategoryCard";
import LevelBadge from "./LevelBadge";
import TopRatedBadge from "./TopRatedBadge";
import Navigation from "./Navigation";
import CustomSwiper from "./CustomSwiper";
import { Swiper as SwiperInstance } from "swiper";
import Link from "next/link";

const PopularCategories = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const popularCategories: PopularCategoryProps[] = [
    {
      title: "I will design attention grabbing minimalist logo",
      images: [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127591897/original/94cd7cd983c29cef01c28a8c8eb1394d3a6e3b91.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142221195/original/f654b68f3ceac0a5173ecc023b2e5c46cb85ddd2.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127591897/original/94cd7cd983c29cef01c28a8c8eb1394d3a6e3b91.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/127591897/original/94cd7cd983c29cef01c28a8c8eb1394d3a6e3b91.jpg",
      ],
      name: "Sajid",
      price: 45,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a4788623bc718dee29bd3b3201f49613-1680469663623/8a504d18-d0f9-4bf8-bb7d-10fe2691d100.jpg",
      rating: 4.9,
      Badge: LevelBadge,
      offersVideo: false,
    },
    {
      title: "I will redesign edit or update your existing logo creatively",
      images: [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142221195/original/f654b68f3ceac0a5173ecc023b2e5c46cb85ddd2.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142221195/original/f654b68f3ceac0a5173ecc023b2e5c46cb85ddd2.jpg",
      ],
      name: "Shaju I.",
      price: 20,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2f7f1d428d0570ab44654f8c96c1f723-1576853089439/be17994b-204a-4be8-a280-34807e880ca2.jpg",
      rating: 4.9,
      Badge: LevelBadge,
      offersVideo: false,
    },
    {
      title: "I will design, redesign, edit, vectorize any logo or graphic",
      images: [
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_cards_web,q_auto,f_auto/v1/attachments/delivery/asset/5bcfdfbe2a31c378b8d9539429f370a2-1719988098/PowderRiver3.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_cards_web,q_auto,f_auto/v1/attachments/delivery/asset/5bcfdfbe2a31c378b8d9539429f370a2-1719988098/PowderRiver3.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_cards_web,q_auto,f_auto/v1/attachments/delivery/asset/5bcfdfbe2a31c378b8d9539429f370a2-1719988098/PowderRiver3.jpg",
      ],
      name: "Senara.",
      price: 15,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d9115ffcf53de3387418d8a0489cde31-1561398716667/314860dc-5e7e-488d-876a-1e6c2b50008e.png",
      rating: 4.9,
      Badge: LevelBadge,
      offersVideo: false,
    },
    {
      title: "I will make brilliant designs to suit your need",
      images: [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98379278/original/bb6c9442816232f4839bfa3e0976cab6b2a1e878.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98379278/original/bb6c9442816232f4839bfa3e0976cab6b2a1e878.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/98379278/original/bb6c9442816232f4839bfa3e0976cab6b2a1e878.jpg",
      ],
      name: "Prachi R.",
      price: 30,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/94e66a82b6f88eeac72fcce36a7fc8ad-1549031292382/0cedf496-b54d-4763-a665-5fde15e3c7e6.jpg",
      rating: 4.9,
      Badge: TopRatedBadge,
      offersVideo: false,
    },
    {
      title: "I will design heraldic, modern luxury logo with hand drawing",
      images: [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4635026/original/60f66e81cdb879812bb739bc78c7dc2e522448fd.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4635026/original/60f66e81cdb879812bb739bc78c7dc2e522448fd.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/4635026/original/60f66e81cdb879812bb739bc78c7dc2e522448fd.jpg",
      ],
      name: "Rigers.",
      price: 45,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e52f2ae2e43bcb04886706346023c3dd-1524052716848/142fb2c5-2321-4fdb-9496-861e753d6e5a.jpg",
      rating: 4.9,
      Badge: LevelBadge,
      offersVideo: false,
    },
    {
      title: "I will do vintage , retro , classic , hipster badge , outdoor or",
      images: [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8020116/original/6ecd0c33db92111176205c6e877487710a84dc01.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8020116/original/6ecd0c33db92111176205c6e877487710a84dc01.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/8020116/original/6ecd0c33db92111176205c6e877487710a84dc01.jpg",
      ],
      name: "Chairman Bilal.",
      price: 45,
      profileImgUrl:
        "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/fb8d0d0cc23a0f595cc0a0391eb62486-1718812732445/6bb1cec0-9789-4d7d-a22c-031cfe35f0d9.jpg",
      rating: 20,
      Badge: TopRatedBadge,
      offersVideo: true,
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="my-8">
      <div className="flex items-center justify-between">
        <FiverrHeading label="Explore popular categories on Fiverr" />
        <div className="flex items-center gap-4">
          <Link href="#" className="font-semibold underline">
            Show All
          </Link>
          <Navigation
            onPrev={handlePrev}
            onNext={handleNext}
            containerStyles="hidden md:flex"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-72 min-w-[288px] max-w-[288px] mt-7">
          <div className="col-span-3 flex flex-col gap-3">
            <p className="flex items-center gap-2 border border-gray-600 bg-gray-100 cursor-pointer p-3.5 rounded-md hover:bg-gray-100">
              <Image
                alt=""
                src="https://fiverr-res.cloudinary.com/listings_assets/gq_icons/49.svg"
                width={30}
                height={30}
              />
              <span className="font-semibold">Logo Design</span>
            </p>
            <p className="flex items-center gap-2 cursor-pointer p-3.5 rounded-md hover:bg-gray-100">
              <Image
                alt=""
                src="https://fiverr-res.cloudinary.com/listings_assets/gq_icons/514.svg"
                width={25}
                height={25}
              />
              <span className="font-semibold ">Website Development</span>
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
        </div>

        <div className="flex-grow w-full relative">
          <div className="absolute inset-0 -right-[2vw] overflow-visible">
            {/* <CustomSwiper
              data={popularCategories}
              renderItem={(category) => (
                <PopularCategoryCard
                  name={category.name}
                  title={category.title}
                  imgUrl={category.imgUrl}
                  rating={category.rating}
                  price={category.price}
                  profileImgUrl={category.profileImgUrl}
                  Badge={category.Badge}
                  offersVideo={category.offersVideo}
                />
              )}
              spaceBetween={20}
              useInternalNavigation={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            /> */}
            <CustomSwiper
              data={popularCategories}
              renderItem={(category) => (
                <PopularCategoryCard
                  name={category.name}
                  title={category.title}
                  images={category.images}
                  rating={category.rating}
                  price={category.price}
                  profileImgUrl={category.profileImgUrl}
                  Badge={category.Badge}
                  offersVideo={category.offersVideo}
                />
              )}
              slidesPerView="auto"
              spaceBetween={20}
              useInternalNavigation={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              hasOverlayLeft={false}
              hasOverlayRight={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
