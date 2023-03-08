import React, { useState } from "react";

interface Props {
  defaultValue?: string;
  handleChange: (text: string) => void;
}

const PrivacyEditor: React.FC<Props> = ({
  defaultValue = "",
  handleChange = (text: string) => {},
}) => {
  const [checkedValue, setcheckedValue] = useState("");
  return (
    <div className="w-full">
      <div className="mb-2 text-base leading-6 font-semibold text-gray-700">
        Privacy
      </div>
      {["Public", "Curated Audience", "Community Only"].map((el, idx) => {
        return (
          <div key={idx} className="inline-flex mr-8">
            <input
              key={idx}
              type="radio"
              className="items-center align-middle accent-primary-purple leading-6 font-normal text-gray-600 w-5 h-5 mr-3"
              name="privacy"
              value={el}
              checked={checkedValue === el}
              onChange={(e) => {
                setcheckedValue(e.target.value);
                handleChange(e.target.value);
              }}
            />
            <span className="items-center align-middle leading-6 font-normal text-gray-600">
              {el}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default PrivacyEditor;
