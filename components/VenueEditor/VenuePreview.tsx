import React from "react";
import InputPresent from "../InputPresentation";

interface Props {
  value?: string;
}

const VenuePreview: React.FC<Props> = ({
  value = "",
}) => {
  return (
    <div className="w-full">
      <InputPresent
        classNameDiv="bg-transparent ml-2"
        classNameText="self-center justify-center text-dark-blue font-semibold text-xl leading-5"
        iconName="location"
        iconWidth={21}
        value={value ? value : ""}
      />
    </div>
  );
};
export default VenuePreview;
