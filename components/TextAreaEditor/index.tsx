"use client";
// "use server";
import React, { useState } from "react";

interface Props {
  title?: string;
  placeholder?: string;
  defaultValue?: string;
  handleChange: (text: string) => void;
}

const TextAreaEditor: React.FC<Props> = ({
  title = "",
  placeholder = "",
  defaultValue = "",
  handleChange = (text: string) => {},
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
    handleChange(val);
  };

  return (
    <>
      <span className="text-sm text-light-black font-medium leading-5">{title}</span>
      <textarea
        rows={1}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleInputChange}
        className="mt-1 w-full focus-visible:outline-none resize-none rounded-[8px] h-52 py-3 px-[14px] focus-visible:shadow-none"
      />
    </>
    // className="hover:cursor-pointer focus-visible:cursor-auto font-bold align-middle w-full resize-none text-5xl text-white bg-inherit focus-visible:border-none focus-visible:outline-none focus-visible:shadow-none"
  );
};
export default TextAreaEditor;
