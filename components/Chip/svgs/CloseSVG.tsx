import React from "react";
import { DEFAULT_HEIGHT_WIDTH } from "@/common/constants";

interface Props {
  hw?: string | number | undefined;
}

const CloseSVG: React.FC<Props> = ({
  hw = DEFAULT_HEIGHT_WIDTH,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={hw}
    height={hw}
    fill="none"
    viewBox="0 0 8 8"
    {...props}
  >
    <path
      stroke="#942F70"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7 1L1 7m0-6l6 6"
    ></path>
  </svg>
);

export default CloseSVG;
