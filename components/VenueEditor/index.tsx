import React from "react";
import InputPresent from "../InputPresentation";

interface Props {
  defaultValue?: string;
  placeholder?: string;
  handleChange: (text: string) => void;
}

const VenueEditor: React.FC<Props> = ({
  defaultValue = "",
  placeholder = "",
  handleChange = (text: string) => {},
}) => {
  return (
    <div className="w-full">
      <InputPresent
        handleChange={(text) => handleChange(text)}
        editable
        placeholder={placeholder}
        iconName="location"
        iconWidth={21}
        value={defaultValue ? defaultValue : ""}
      />
    </div>
  );
};
export default VenueEditor;
