import React from "react";
import { DEFAULT_HEIGHT_WIDTH } from "@/common/constants";

interface Props {
  hw?: string | number | undefined;
}

const CalendarSVG: React.FC<Props> = ({
  hw = DEFAULT_HEIGHT_WIDTH,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={hw}
    height={hw}
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <path
      fill="#14597A"
      fillRule="evenodd"
      d="M8.6.2a2.1 2.1 0 00-2.1 2.1v2.1H4.4A4.2 4.2 0 00.2 8.6v21a4.2 4.2 0 004.2 4.2h25.2a4.2 4.2 0 004.2-4.2v-21a4.2 4.2 0 00-4.2-4.2h-2.1V2.3a2.1 2.1 0 00-4.2 0v2.1H10.7V2.3A2.1 2.1 0 008.6.2zm0 10.5a2.1 2.1 0 100 4.2h16.8a2.1 2.1 0 000-4.2H8.6z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default CalendarSVG;
