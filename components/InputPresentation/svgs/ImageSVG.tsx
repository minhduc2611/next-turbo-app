import React from "react";
import { DEFAULT_HEIGHT_WIDTH } from "@/common/constants";

interface Props {
  hw?: string | number | undefined;
}

const ImageSVG: React.FC<Props> = ({
  hw = DEFAULT_HEIGHT_WIDTH,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={hw}
    height={hw}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g fill="#14597A" clipPath="url(#clip0_8826_82568)">
      <path d="M11.122 12.536a3 3 0 00-4.244 0l-6.84 6.84A4.991 4.991 0 005 24h14c.98 0 1.938-.29 2.753-.833l-10.63-10.631zM18 8a2 2 0 100-4 2 2 0 000 4z"></path>
      <path d="M19 0H5a5.006 5.006 0 00-5 5v11.586l5.464-5.464a5.001 5.001 0 017.072 0l10.631 10.631A4.97 4.97 0 0024 19V5a5.006 5.006 0 00-5-5zm-1 10a4 4 0 110-8 4 4 0 010 8z"></path>
    </g>
    <defs>
      <clipPath id="clip0_8826_82568">
        <path fill="#fff" d="M0 0H24V24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default ImageSVG;
