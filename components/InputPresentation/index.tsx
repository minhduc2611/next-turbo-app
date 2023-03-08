import React from "react";
import CalendarSVG from "./svgs/CalendarSVG";
import ClockSVG from "./svgs/ClockSVG";
import { DEFAULT_HEIGHT_WIDTH } from "../../common/constants";
import DollarSignSVG from "./svgs/DollarSignSVG";
import ImageSVG from "./svgs/ImageSVG";
import LocationSVG from "./svgs/LocationSVG";
import PeopleGroupSVG from "./svgs/PeopleGroupSVG";

export enum IconTypes {
  calendar = "calendar",
  clock = "clock",
  location = "location",
  peopleGroup = "people-group",
  dollarSign = "dollar-sign",
  image = "image",
}

interface Props {
  iconName: `${IconTypes}`;
  value: string;
  editable?: boolean;
  iconWidth?: number;
  errorMessage?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  defaultValue?: string;
  className?: string;
  classNameText?: string;
  classNameDiv?: string;
  placeholder?: string;
  handleChange?: (text: any) => void;
}

const InputPresent: React.FC<Props> = ({
  iconName,
  value,
  editable = false,
  placeholder = "",
  errorMessage = "",
  classNameDiv = "",
  type = "text",
  className = "",
  classNameText = "",
  iconWidth = DEFAULT_HEIGHT_WIDTH,
  handleChange = () => {},
}) => {
  const [valueState, setValue] = React.useState<string>("");

  let renderIcon: JSX.Element | null = null;
  switch (iconName) {
    case IconTypes.calendar:
      renderIcon = <CalendarSVG hw={iconWidth} />;
      break;
    case IconTypes.clock:
      renderIcon = <ClockSVG hw={iconWidth} />;
      break;
    case IconTypes.location:
      renderIcon = <LocationSVG hw={iconWidth} />;
      break;
    case IconTypes.peopleGroup:
      renderIcon = <PeopleGroupSVG hw={iconWidth} />;
      break;
    case IconTypes.dollarSign:
      renderIcon = <DollarSignSVG hw={iconWidth} />;
      break;
    case IconTypes.image:
      renderIcon = <ImageSVG hw={iconWidth} />;
      break;

    default:
      break;
  }
  const localHandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setValue(e.target.value);
      handleChange(undefined);
    } else {
      setValue(e.target.value);
      handleChange(e.target.value);
    }
  }

  return (
    <div title="InputPresent" className={`flex w-full relative ${className}`}>
      <div className={`flex w-[${iconWidth}px]`}>
        <span className="self-center ">{renderIcon}</span>
      </div>
      <div
        className={`${editable ? "rounded-[4px]" : "rounded-lg"}  ${
          classNameDiv
            ? classNameDiv
            : "bg-white ml-3 px-1 h-10 cursor-pointer grow "
        } flex`}
      >
        {editable ? (
          <>
            <input
              placeholder={placeholder}
              value={valueState}
              onChange={localHandleChange}
              onBlur={localHandleChange}
              min={0}
              className="placeholder:text-light-black placeholder:font-semibold placeholder:text-base placeholder:leading-10 focus-visible:shadow-none focus-visible:outline-none pl-1 w-full self-center text-base font-semibold text-light-black"
              type={type}
            />
          </>
        ) : (
          <span
            className={`${
              classNameText
                ? classNameText
                : " text-[28px] font-semibold text-light-black"
            } "self-center items-center align-middle"`}
          >
            {value}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputPresent;
