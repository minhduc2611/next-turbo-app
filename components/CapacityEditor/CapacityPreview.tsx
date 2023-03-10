import React from "react";
import InputPresent from "../InputPresentation";

interface Props {
  value: string | number;
}

const CapacityPreview: React.FC<Props> = ({ value = "" }) => {
  return (
    <div className="w-full">
      <InputPresent
        type="number"
        classNameDiv="bg-transparent ml-2"
        classNameText="self-center justify-center font-semibold text-base text-light-black leading-5"
        iconWidth={21}
        iconName="people-group"
        value={value ? `${value}` : ""}
      />
    </div>
  );
};
export default CapacityPreview;
