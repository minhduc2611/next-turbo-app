import React from "react";
import InputPresent from "../InputPresentation";

interface Props {
  defaultValue?: string;
  placeholder?: string;
  handleChange: (text: string) => void;
}

const CostEditor: React.FC<Props> = ({
  defaultValue = "",
  placeholder = "",
  handleChange = (text: string) => {},
}) => {
  return (
    <div className="w-full">
      <InputPresent
        type={"number"}
        handleChange={(text) => handleChange(text)}
        editable
        placeholder={placeholder}
        iconWidth={21}
        iconName="dollar-sign"
        value={defaultValue ? defaultValue : ""}
      />
    </div>
  );
};
export default CostEditor;
