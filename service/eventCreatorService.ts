import {
  EventCreatorData, EventCreatorDataState
} from "@/common/types";
import axios from "axios";
import moment from "moment";
import * as Yup from "yup";
export const validators = {
  date: {
    isAfterToday: {
      check(date: string | Date) {
        const today = moment();
        const selected = moment(date);
        return selected.isAfter(today);
      },
      errMessage: "Date you have chosen must be after today.",
    },
  },
};

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  date: Yup.string()
    .test("len", "Date is required.", (val = "") => val?.length > 0)
    .test("date", validators.date.isAfterToday.errMessage, (val = "") =>
      validators.date.isAfterToday.check(val)
    )
    .required("Date is required."),
  time: Yup.string()
    .test("len", "Time is required.", (val = "") => val?.length > 0)
    .required("Time is required."),
  venue: Yup.string().required("Venue is required."),
  capacity: Yup.number()
    .required("Capacity is required.")
    .min(1, "Capacity must be at least 1 person."),
  price: Yup.number()
    .required("Price is required.")
    .min(1, "price must be greater than 0."),
  description: Yup.string().required("Description is required."),
  banner: Yup.string().required("Banner is required."),
  tags: Yup.array()
    .required("Tags are required.")
    .min(1, "Tags should have at least 1 element."),
  privacy: Yup.string().required("Privacy are required."),
});

const TemporailBypassCorsBaseURL = "https://cors-anywhere.herokuapp.com/";
export const submitForm = (data: EventCreatorData) =>
  axios.post<EventCreatorDataState>(
    TemporailBypassCorsBaseURL +
      "https://api.supermomos-dev.com/interview/social",
    { ...data },
    { headers: { "Content-Type": "application/json" } }
  );
export const getEvent = (eventId: string) => {
  const url =
    "https://api.supermomos-dev.com/interview/social/" +
    eventId;
  console.log("url", url);

  return axios.get<EventCreatorDataState>(url);
};
