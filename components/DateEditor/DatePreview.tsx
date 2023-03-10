import { HUMAN_FORMAT2, START_AT_FORMAT } from "@/common/constants";
import moment from "moment";
import React from "react";
import InputPresent from "../InputPresentation";

interface Props {
  value?: string;
}

const DatePreview: React.FC<Props> = ({ value }) => {
  console.log("value", value);

  const finalValue = value
    ? moment(value, START_AT_FORMAT).format(HUMAN_FORMAT2)
    : "Date";
  return (
    <div className="w-full">
      <InputPresent
      classNameDiv="bg-transparent ml-2"
        classNameText=" self-center justify-center text-light-black font-semibold text-xl leading-5"
        iconName="calendar"
        value={finalValue}
      />
    </div>
  );
};
export default DatePreview;
