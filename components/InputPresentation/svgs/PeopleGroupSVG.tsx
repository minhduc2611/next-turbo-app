import React from "react";
import { DEFAULT_HEIGHT_WIDTH } from "@/common/constants";

interface Props {
  hw?: string | number | undefined;
}

const PeopleGroupSVG: React.FC<Props> = ({
  hw = DEFAULT_HEIGHT_WIDTH,

  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={hw}
    height={hw}
    viewBox="0 0 18 14"
    fill="none"
    {...props}
  >
    <path
      fill="#14597A"
      d="M11.8 2.8a2.8 2.8 0 11-5.6 0 2.8 2.8 0 015.6 0zM16.467 4.667a1.867 1.867 0 11-3.734 0 1.867 1.867 0 013.734 0zM12.733 11.2a3.733 3.733 0 10-7.466 0V14h7.466v-2.8zM5.267 4.667a1.867 1.867 0 11-3.734 0 1.867 1.867 0 013.734 0zM14.6 14v-2.8c0-.984-.254-1.908-.7-2.712a2.804 2.804 0 013.5 2.712V14h-2.8zM4.1 8.488a5.575 5.575 0 00-.7 2.712V14H.6v-2.8a2.8 2.8 0 013.5-2.712z"
    ></path>
  </svg>
);

export default PeopleGroupSVG;
