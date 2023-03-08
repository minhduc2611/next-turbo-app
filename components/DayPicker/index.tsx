import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function DatePicker({ ...props }: any) {
  return <DayPicker {...props} />;
}
export default DatePicker;
