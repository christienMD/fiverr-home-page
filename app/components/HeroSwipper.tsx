"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface HeroSwiperProps {
  onSwiper: (swiper: SwiperType) => void;
}

const HeroSwiper = ({ onSwiper }: HeroSwiperProps) => {
  const swiperRef = useRef<SwiperType>();

  const slides = [
    {
      title: "recommended for you",
      imageSrc:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4058b3b3a6b0b3ac15f040c92bd2b05f-1704098481407/brief-and-match-icon.png",
      heading: "Get Matched with freelancers",
      description: "create a brief and get custom offers.",
      buttonText: "Create a brief",
    },
    {
      title: "buisiness recommendations",
      imageSrc:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/093afbd0303654d5957e5ce787f7bd1f-1704031598839/Frame%201000001535.png",
      heading: "Trallor Fiverr to your needs",
      description: "Tell us about your needs",
      buttonText: "Add your info",
    },
  ];

 const handleSwiper = useCallback(
   (swiper: SwiperType) => {
     onSwiper(swiper);
   },
   [onSwiper]
 );

  return (
    <div className="relative">
      <Swiper
        onSwiper={handleSwiper}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              href="#"
              className="block w-full bg-green-50 bg-opacity-20 hover:cursor-pointer p-5 rounded-lg focus:border focus:border-white"
            >
              <h3 className="uppercase text-sm mb-2 font-medium">
                {slide.title}
              </h3>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    alt=""
                    src={slide.imageSrc}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-sm">
                    <h4 className="font-semibold">{slide.heading}</h4>
                    <p>{slide.description}</p>
                  </div>
                </div>
                <button className="inline-flex items-center px-2.5 border border-white rounded-xl hover:bg-green-100 hover:bg-opacity-20">
                  {slide.buttonText}
                </button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
