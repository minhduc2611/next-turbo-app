"use server"
import Image  from "next/image";
import React from "react";

interface Props {
  link: string;
}
const BannerPreview: React.FC<Props> = ({ link }) => {
  return (
    <div className="w-full flex flex-row-reverse">
      <div className="absolute w-[50vw] overflow-visible h-[460px] rounded-tr-[64px] rounded-bl-[64px]  bg-[#F2F2F2] bg-opacity-10 flex">
        <Image
          src={link}
          className={`h-full w-full rounded-tr-[64px] rounded-bl-[64px]`}
          alt="Default Image"
          fill
          style={{ objectFit: "cover" }}
          objectFit="cover"
        />
      </div>
    </div>
  );
};
export default BannerPreview;
