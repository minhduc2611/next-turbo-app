import React, { useState } from "react";
import InputPresent from "../InputPresentation";

interface Props {
  defaultChecked?: boolean;
  handleChange: (check: boolean) => void;
}

const AttendeeEditor: React.FC<Props> = ({
  defaultChecked = false,
  handleChange = (check: boolean) => {},
}) => {
  const [checkedValue, setcheckedValue] = useState<boolean>(defaultChecked);

  return (
    <div className="w-full">
      <input
        className="mr-3 items-center align-middle border-solid border-[1px] border-gray-300 rounded-md h-5 w-5 accent-primary-purple"
        type={"checkbox"}
        defaultChecked={checkedValue}
        checked={checkedValue}
        onChange={(e) => {
          setcheckedValue(e.target.checked);
          handleChange(e.target.checked);
        }}
      />
      <span className="items-center align-middle font-medium text-sm leading-5">
        I want to approve attendees
      </span>
    </div>
  );
};
export default AttendeeEditor;
