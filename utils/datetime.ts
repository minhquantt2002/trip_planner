import moment from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).format("ddd, DD MMM YYYY");
};

export const getRangeDate = (startDate: string, endDate: string): string => {
  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);
  let rangeDate = endDateMoment.format("ddd, D MMM YYYY");
  if (startDateMoment.get("year") === endDateMoment.get("year")) {
    if (startDateMoment.get("month") === endDateMoment.get("month")) {
      if (startDateMoment.get("day") !== endDateMoment.get("day")) {
        rangeDate = startDateMoment.format("ddd, DD") + " - " + rangeDate;
      }
    } else {
      rangeDate = startDateMoment.format("ddd, DD MMM") + " - " + rangeDate;
    }
  } else {
    rangeDate = startDateMoment.format("ddd, DD MMM YYYY") + " - " + rangeDate;
  }
  return rangeDate;
};

export const countDays = (startDate: string, endDate: string): number => {
  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);
  return endDateMoment.diff(startDateMoment, "days") + 1;
};
