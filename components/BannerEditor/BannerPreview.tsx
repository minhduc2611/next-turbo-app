"use server"
import Image  from "next/image";
import React from "react";

interface Props {
  link: string;
}
const BannerPreview: React.FC<Props> = ({ link }) => {
  return (
    <div className="w-full flex flex-row-reverse h-[300px] lg:h-460px">
      <div className={`
          relative w-full h-[300px] sm:rounded-[30px]   
          lg:absolute lg:w-[50vw] lg:h-[460px] lg:rounded-tr-[64px] lg:rounded-bl-[64px] lg:overflow-visible 
          bg-[#F2F2F2] flex
        `}>
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
