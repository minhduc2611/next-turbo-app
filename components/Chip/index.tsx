import React, { useState } from "react";
import InputPresent from "../InputPresentation";
import CloseSVG from "./svgs/CloseSVG";
enum ChipTypes {
  primary = "primary",
  secondary = "secondary",
}
interface Props {
  label?: string;
  className?: string;
  show?: boolean;
  deletable?: boolean;
  onDelete?: () => void;
  type?: `${ChipTypes}`;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Chip: React.FC<Props> = ({
  label = "",
  show = true,
  type = "primary",
  deletable = false,
  onDelete = () => {},
  onClick = () => {},
  children,
  className = "",
}) => {
  let colors;
  switch (type) {
    case ChipTypes.primary:
    default:
      colors = "text-primary-purple bg-light-purple";
      break;
    case ChipTypes.secondary:
      colors = "text-gray-700 bg-gray-100 active:bg-gray-300 select-none";
      break;
  }
  return (
    <span
      onClick={onClick}
      style={{ width: "fit-content" }}
      className={`${show ? "inline-flex" : "hidden"} ${
        deletable ? "" : "pr-3"
      } ${colors} rounded-2xl  cursor-pointer py-1 pl-3  w-auto ${className} font-medium text-sm leading-5`}
    >
      {label}
      {children}
      {deletable && (
        <button
          type="button"
          onClick={() => onDelete()}
          className="w-2 active:bg-blue-gray-100 mx-3 self-center items-center"
        >
          <CloseSVG hw={8} />
        </button>
      )}
    </span>
  );
};
export default Chip;
