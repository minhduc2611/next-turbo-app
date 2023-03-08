import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React from "react";
import InputPresent from "../InputPresentation";

import moment from "moment";

const FORMAT = "HH:mm:ss";
const FORMAT_WITH_ZONE = "HH:mm:ssZ";
interface Props {
  defaultValue?: string;
  handleChange: (text: string) => void;
}

const TimeEditor: React.FC<Props> = ({
  defaultValue,
  handleChange = (text: string) => {},
}) => {
  //moment().format(FORMAT)
  const [value, onChange] = React.useState("");

  const [openPopover, setOpenPopover] = React.useState(false);
  // const triggers = {
  //   onMouseEnter: () => setOpenPopover(true),
  //   onMouseLeave: () => setOpenPopover(false),
  // };
  // const finalValue = selected
  //   ? format(selected, "MM/dd/yyyy")
  //   : format(new Date(), "MM/dd/yyyy");
  return (
    <Popover
      placement="bottom-start"
      open={openPopover}
      handler={(v) => {
        console.log('v', v);
        setOpenPopover(v);
        if (v == true) {
          handleChange(value)
        }
      }}
    >
      <PopoverHandler>
        <div className="w-full">
          <InputPresent
            iconName="clock"
            value={value ? moment(value, FORMAT).format(FORMAT) : "Time"}
          />
        </div>
      </PopoverHandler>
      <PopoverContent className="translate-x-12" id="popover-content">
        <div className="bg-white drop-shadow-md rounded">
          <input
            value={value || moment().format(FORMAT)}
            step="1"
            onChange={(e) => {
              onChange(moment(e.target.value, FORMAT).format(FORMAT));
              handleChange(
                moment(e.target.value, FORMAT).format(FORMAT_WITH_ZONE)
              );
            }}
            type="time"
            id="appt"
            name="appt"
          ></input>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default TimeEditor;