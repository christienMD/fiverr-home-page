import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero mt-16 h-full py-10 px-8 rounded-2xl text-white">
      <h1 className="text-white text-2xl md:text-[34px] font-semibold mb-8">
        Welcome to Fiverr, Mesueh C 🎉
      </h1>
      <div className="flex items-center gap-4 w-full">
        <Link
          href="#"
          className="w-full bg-green-50 bg-opacity-20 hover:cursor-pointer p-5 rounded-lg focus:border focus:border-white"
        >
          <h3 className="uppercase text-sm mb-2 font-medium">
            recommended for you
          </h3>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Image
                alt=""
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4058b3b3a6b0b3ac15f040c92bd2b05f-1704098481407/brief-and-match-icon.png"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-sm">
                <h4 className="font-semibold">Get Matched with freelancers</h4>
                <p>create a brief and get custom offers.</p>
              </div>
            </div>
            <button className="inline-flex items-center px-2.5 border border-white rounded-xl hover:bg-green-100 hover:bg-opacity-20">
              Create a brief
            </button>
          </div>
        </Link>
        <Link
          href="#"
          className="w-full bg-green-50 bg-opacity-20 hover:cursor-pointer p-5 rounded-lg focus:border focus:border-white"
        >
          <h3 className="uppercase text-sm mb-2 font-medium">
            buisiness recommendations
          </h3>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <Image
                alt=""
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/093afbd0303654d5957e5ce787f7bd1f-1704031598839/Frame%201000001535.png"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-sm">
                <h4 className="font-semibold">Trallor Fiverr to your needs</h4>
                <p>Tell us about your needs</p>
              </div>
            </div>
            <button className="inline-flex items-center px-2.5 border border-white rounded-xl hover:bg-green-100 hover:bg-opacity-20">
              Add your info
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
