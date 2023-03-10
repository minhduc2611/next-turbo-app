import React from "react";
import { DEFAULT_HEIGHT_WIDTH } from "@/common/constants";

interface Props {
  hw?: string | number | undefined;
}

const DollarSignSVG: React.FC<Props> = ({
  hw = DEFAULT_HEIGHT_WIDTH,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={hw}
    height={hw}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      fill="#14597A"
      d="M7.355 6.289a2.42 2.42 0 01.595-.28v1.783a2.42 2.42 0 01-.595-.28C6.973 7.255 6.9 7.02 6.9 6.9s.073-.356.455-.611zM10.05 11.992v-1.783c.232.075.432.171.595.28.382.255.455.491.455.611s-.073.357-.455.611a2.42 2.42 0 01-.595.28z"
    ></path>
    <path
      fill="#14597A"
      fillRule="evenodd"
      d="M9 17.4A8.4 8.4 0 109 .6a8.4 8.4 0 000 16.8zm1.05-13.65a1.05 1.05 0 00-2.1 0v.097a4.762 4.762 0 00-1.76.695C5.432 5.047 4.8 5.86 4.8 6.9s.632 1.854 1.39 2.359a4.761 4.761 0 001.76.695v2.038c-.41-.134-.715-.333-.886-.53a1.05 1.05 0 00-1.586 1.376c.591.68 1.485 1.13 2.472 1.315v.097a1.05 1.05 0 102.1 0v-.097a4.763 4.763 0 001.76-.694c.758-.505 1.39-1.319 1.39-2.359s-.632-1.853-1.39-2.358a4.761 4.761 0 00-1.76-.695V6.008c.41.134.715.334.885.53a1.05 1.05 0 101.587-1.376c-.591-.68-1.485-1.13-2.472-1.315V3.75z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default DollarSignSVG;
