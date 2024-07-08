import React from "react";

const FiverrHeading = ({
  label,
  styles,
}: {
  label: string;
  styles?: string;
}) => {
  return (
    <h2 className={`text-xl md:text-2xl lg:text-[25px] font-semibold ${styles}`}>{label}</h2>
  );
};

export default FiverrHeading;
