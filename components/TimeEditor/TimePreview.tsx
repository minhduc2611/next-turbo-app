import React from "react";
import InputPresent from "../InputPresentation";

import { FORMAT_TIME, START_AT_FORMAT } from "@/common/constants";
import moment from "moment";

interface Props {
  value?: string;
}

const TimePreview: React.FC<Props> = ({ value }) => {
  return (
    <div className="w-full">
      <InputPresent
        iconName="clock"
        classNameDiv="bg-transparent ml-2"
        classNameText="self-center justify-center text-dark-blue font-semibold text-xl leading-5"
        value={
          value ? moment(value, START_AT_FORMAT).format(FORMAT_TIME) : "Time"
        }
      />
    </div>
  );
};
export default TimePreview;
