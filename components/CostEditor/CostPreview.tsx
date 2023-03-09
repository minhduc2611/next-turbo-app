import React from "react";
import InputPresent from "../InputPresentation";

interface Props {
  value: string | number | undefined;
}

const CostPreview: React.FC<Props> = ({ value = "" }) => {
  return (
    <div className="w-full">
      {value && (
        <InputPresent
          type={"number"}
          classNameDiv="bg-transparent ml-2"
          classNameText="self-center justify-center font-semibold text-base text-light-black leading-5"
          iconWidth={21}
          iconName="dollar-sign"
          value={value ? `${value}` : ""}
        />
      )}
    </div>
  );
};
export default CostPreview;