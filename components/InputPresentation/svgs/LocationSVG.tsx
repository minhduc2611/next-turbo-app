import React from "react";
import { DEFAULT_HEIGHT_WIDTH } from "@/common/constants";

interface Props {
  hw?: string | number | undefined;
}

const LocationSVG: React.FC<Props> = ({
  hw = DEFAULT_HEIGHT_WIDTH,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={hw}
    height={hw}
    viewBox="0 0 14 18"
    fill="none"
    {...props}
  >
    <path
      fill="#14597A"
      fillRule="evenodd"
      d="M2.08 2.638a6.959 6.959 0 019.84 9.841L7 17.4l-4.92-4.92a6.959 6.959 0 010-9.842zM7 9.548A1.988 1.988 0 107 5.57a1.988 1.988 0 000 3.976z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default LocationSVG;
