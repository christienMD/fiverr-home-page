'use client'

import React from "react";
import ItemCards from "./ItemCards";
import Masonry from "react-masonry-css";

const FiverrGetInspired = () => {
  const cardItems = [
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/1ac8625c49b85a6ca62be3e153c57930-1717999633/IMG_1125.jpeg",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/47a9c163987c051de3fd9a96bea42218-1718237421/%281%29.png",
      title: "AI Artists",
    },
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/7a6ebd8db81442f5a251741d4f9fa49b-1716745571/Main%20Artwork.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/attachments/delivery/asset/8224d7b9168691196db0c4df2ed1f282-1717237248/developed%207%20B%20v2.png",
      title: "Fashion Design",
    },
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/cdd3feed184b9df55d11656518a84155-1718331102/1.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/edcadd1ae4eb86990d5c2eceece3191e-1719221474/hkk_24-240624.png",
      title: "Architecture & Interior Design",
    },
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c68bf753cf0726ae32c64dddff2efb85-1716540098/view1.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/726ce3d36b3c32afe585866193ee1f0c-1717419787/design%20social%20media%20posts_%20ads%20for%20instagram_%20facebook.jpg",
      title: "Social Media Design",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/01142ff6675139b5aa17570db1cfdd60-1716728246/View%2001.jpg",
      title: "Architecture & Interior Design",
    },
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/c138cfdf4859bb497ff904beeb4be5f8-1717583961/Creative_self_new.jpg",,
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/3e4a9ba69b262e56ea959b7b1ee4d070-1718814672/PYNG%203.jpg",
      title: "App Design",
    },
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/17716ed6af412ebc5ef5ec3a2b22505e-1718623076/Coping%20modern%20minimalist%20logo%20designs%20business%20logo%20company%20logo%20business%20logo%20logo%20maker.png",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/0b0d529512ac203a7edcb93b7884b18a-1718650367/front.jpg",
      title: "Illustration",
    },
    {
      imgUrl:
        // "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/3a6c015206a023a754e1e4b75780bf4d-1716573906/REVISION-1.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/cfb3d821f1be56ce58893c97aa6172e1-1717520827/FRADEN.jpg",
      title: "T-Shirts & Merchandise",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/76a629470626be74faf8d856a184e53b-1719847453/Thumbnails.png",
      title: "App Design",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/cdd3feed184b9df55d11656518a84155-1718331102/1.jpg",
      title: "Architecture and Interior",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/7a6ebd8db81442f5a251741d4f9fa49b-1716745571/Main%20Artwork.jpg",
      title: "Album Cover Design",
    },
    {
      imgUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/7fcbb9f3e146521ac1c73e80315e4090-1718009282/03%2004%20Illustration%20F.jpg",
      title: "Children’s Book Illustration",
    },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {cardItems.map((item, index) => (
        <div key={index} className="h-auto">
          <ItemCards title={item.title} imgUrl={item.imgUrl} />
        </div>
      ))}
    </Masonry>
  );
};
 
export default FiverrGetInspired;
