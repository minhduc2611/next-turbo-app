"use server";
import React from "react";

interface Props {
  value?: string;
}

const TextAreaPreview: React.FC<Props> = ({ value = "" }) => {
  return (
    <div className="mt-1 w-full focus-visible:outline-none resize-none rounded-[8px] h-52 py-3 px-[14px] focus-visible:shadow-none">
      {value}
    </div>
  );
};
export default TextAreaPreview;
