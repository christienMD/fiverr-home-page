import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";

interface MenuItem {
  title: string;
  items: string[];
}

const menuItems: MenuItem[] = [
  {
    title: "Search",
    items: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Local SEO",
      "E-Commerce SEO",
      "Video SEO",
    ],
  },
  {
    title: "Methods & Techniques",
    items: [
      "Video Marketing",
      "E-Commerce Marketing",
      "Email Marketing",
      "Email Automations",
      "Guest Posting",
      "Affiliate Marketing",
      "Display Advertising",
      "Public Relations",
      "Text Message Marketing",
    ],
  },
  {
    title: "Analytics & Strategy",
    items: [
      "Marketing Strategy",
      "Marketing Concepts & Ideation",
      "Marketing Advice",
      "Web Analytics",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    title: "Industry & Purpose-Specific",
    items: [
      "Music Promotion",
      "Podcast Marketing",
      "Book & eBook Marketing",
      "Mobile App Marketing",
    ],
  },
  {
    title: "Social",
    items: [
      "Social Media Marketing",
      "Paid Social Media",
      "Social Commerce",
      "Influencer Marketing",
      "Community Management",
    ],
  },
  {
    title: "",
    items: [""],
  },
  {
    title: "Channel Specific",
    items: [
      "TikTok Shop",
      "Facebook Ads Campaign",
      "Instagram Marketing",
      "Google SEM",
      "Shopify Marketing",
    ],
  },

  {
    title: "Miscellaneous",
    items: ["Crowdfunding", "Other"],
  },
];

const DigitalMarketingDrop = () => {
  return (
    <div className="absolute left-0 mt-2 w-screen max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden z-30">
      <div className="p-6">
        <Masonry
          breakpointCols={{
            default: 4,
            1100: 3,
            700: 2,
            500: 1,
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {menuItems.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-bold text-gray-900 mb-1">{category.title}</h3>
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 mb-1"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default DigitalMarketingDrop;
