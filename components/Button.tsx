import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full ${variant}`} type={type}>
      {icon && <Image src={icon} alt={icon} width={24} height={24} />}
      <label htmlFor="" className="bold-16 whitespace-nowrap">
        {title}
      </label>{" "}
    </button>
  );
};

export default Button;
