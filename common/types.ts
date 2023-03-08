export type EventCreatorDataState = EventCreatorData & {
  date: string;
  time: string;
};

export type EventCreatorData = {
  title: string;
  startAt: string;
  venue: string;
  capacity: Number;
  price?: Number;
  description: string;
  banner: string;
  tags: Array<string>;
  isManualApprove?: Boolean;
  privacy: string;
};

export const eventCreatorDataDefaultValue: EventCreatorData = {
  title: "Untitle Event",
  startAt: "",
  venue: "",
  capacity: 0,
  price: 0,
  description: "",
  banner: "",
  tags: [],
  isManualApprove: false,
  privacy: "",
};
