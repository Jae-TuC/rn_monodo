import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(isoWeek);
dayjs.extend(weekday);
// export const weekDay = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
// ] as const;

// export type WeekDay = (typeof weekDay)[number];

export const globalFormatter = "YYYY-MM-DD";
export const localFormatter = `MMMM, DD YYYY`;
export const weekDayFormatter = "dddd";

export const weekDays = [...Array(5).keys()].map((key) => {
  return dayjs().startOf("isoWeek").add(key, "day").format(globalFormatter);
});
