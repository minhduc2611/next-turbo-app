import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { format } from "date-fns";
import DatePicker from "../DayPicker";
import InputPresent from "../InputPresentation";
import moment from "moment";
import { HUMAN_FORMAT, SYSTEM_FORMAT } from "@/common/constants";

interface Props {
  defaultValue?: string;
  errorMessage?: string;
  handleChange: (text: string) => void;
}

const DateEditor: React.FC<Props> = ({
  defaultValue,
  errorMessage="",
  handleChange = (text: string) => {},
}) => {
  const [selected, setSelected] = React.useState<Date>();
  const [openPopover, setOpenPopover] = React.useState(false);
  const finalValue = selected
    ? moment(selected).format(HUMAN_FORMAT)
    : "Date";
  return (
    <Popover
      placement="bottom-start"
      open={openPopover}
      handler={(v) => {
        console.log('v', v);
        setOpenPopover(v);
        if (v == true) {
          handleChange(selected ? moment(selected).format(SYSTEM_FORMAT) : "")
        }
      }}
    >
      <PopoverHandler >
        <div className="w-full">
          <InputPresent iconName="calendar" value={finalValue} />
        </div>
      </PopoverHandler>
      <PopoverContent>
        <div className="bg-white drop-shadow-md rounded">
          <DatePicker
            mode="single"
            selected={selected}
            onSelect={(value: Date | undefined) => {
              if (value) {
                setSelected(value);
                handleChange(moment(value).format(SYSTEM_FORMAT));
              }
            }}
            modifiersClassNames={{
              selected:
                " text-secondary-yellow bg-primary-purple hover:text-light-black",
              today: "text-light-black",
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default DateEditor;
