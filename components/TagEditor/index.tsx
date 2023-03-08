
import React, { useState } from "react";
import Chip from "../Chip";

type OnChangeValue = {
  target: string;
  list: string[];
};

interface Props {
  defaultValues?: string[];
  handleChange: (text: OnChangeValue) => void;
}

const TagEditor: React.FC<Props> = ({
  defaultValues = [],
  handleChange = (text: OnChangeValue) => {},
}) => {
  const [chips, setChips] = useState<string[]>(defaultValues);
  const keywords = ["Product", "Marketing", "Engineering"];
  const handleSetValues = (el: string, newList: string[]) => {
    setChips(newList);
    handleChange({
      target: el,
      list: newList,
    } as OnChangeValue);
  };
  return (
    <div className="w-full">
      <p className="text-base leading-6 font-medium text-gray-700">
        Tag your social
      </p>
      <p className="text-base leading-6 font-normal text-gray-600">
        Pick tags for our curation engine to work its magin
      </p>

      <div className="mt-7">
        {chips.map((el, idx) => (
          <Chip
            className="mr-2"
            key={idx}
            deletable
            onDelete={() => {
              const newList = chips.filter((item) => item !== el);
              handleSetValues(el, newList);
            }}
            label={el}
          />
        ))}
      </div>

      <div className="mt-4">
        {keywords.map((el, idx) => (
          <Chip
            className="mr-2"
            type="secondary"
            key={idx}
            onClick={() => {
              if (!chips.includes(el)) {
                const newList = Array.from(new Set([...chips, el]));
                handleSetValues(el, newList);
              }
            }}
            label={el}
          />
        ))}
      </div>
    </div>
  );
};
export default TagEditor;
