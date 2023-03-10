"use client";
import { prototype } from "events";
// "use server";
import React, { useRef, useState } from "react";
import Preview from "./TitlePreview";
import useAutosizeTextArea from "./useAutosizeTextArea";

interface Props {
  defaultValue?: string;
  errorMessage?: string;
  handleChange: (text: string) => void;
}

const TitleEditor = ({
  defaultValue = "",
  errorMessage = "",
  handleChange = (text: string) => {},
}: Props) => {
  const [value, setValue] = useState(defaultValue);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setValue(val);
    handleChange(val);
  };
  useAutosizeTextArea(textAreaRef.current, divRef.current, value);

  return (
      <div
        ref={divRef}
        className={`p-3 hover:cursor-pointer bg-primary-purple w-[350px]`}
      >
        <textarea
          ref={textAreaRef}
          rows={1}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputChange}
          className="hover:cursor-pointer focus-visible:cursor-auto font-bold align-middle w-full resize-none text-5xl text-white bg-inherit focus-visible:border-none focus-visible:outline-none focus-visible:shadow-none"
        />
      </div>
  );
};


export default TitleEditor;
