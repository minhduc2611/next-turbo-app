"use server";
import React from "react";

interface Props {
  value?: string;
}

const TextAreaPreview: React.FC<Props> = ({ value = "" }) => {
  return (
    <div className="font-normal text-lg leading-7 mt-1 w-full focus-visible:outline-none resize-none rounded-[8px] py-3 focus-visible:shadow-none text-light-black">
      <p
        dangerouslySetInnerHTML={{
          __html: `
      <p style="white-space: pre-line">
      ${value}
      </p>`,
        }}
      ></p>
    </div>
  );
};
export default TextAreaPreview;
