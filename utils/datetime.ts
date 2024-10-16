import moment from "moment";

export const formatDate = (date: Date): string => {
  return moment(date).format("ddd, DD MMM YYYY");
};

export const formatTime = (time: string): string => {
  return moment(time).format("HH:mm");
};

export const formatDatetime = (datetime: string): string => {
  return moment(datetime).format("YYYY-MM-DDTHH:mm");
};

export const getRangeTime = (startTime: string, endTime: string): string => {
  const startTimeMoment = moment(startTime);
  const endTimeMoment = moment(endTime);
  const duration = moment.duration(endTimeMoment.diff(startTimeMoment));
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  return `${hours} hrs ${minutes}`;
};

export const getRangeDate = (startDate: string, endDate: string): string => {
  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);
  let rangeDate = endDateMoment.format("ddd, D MMM YYYY");
  if (startDateMoment.get("year") === endDateMoment.get("year")) {
    if (startDateMoment.get("month") === endDateMoment.get("month")) {
      if (startDateMoment.get("D") !== endDateMoment.get("D")) {
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

export const compareDate = (a: string, b: string): boolean => {
  const aMoment = moment(a);
  const bMoment = moment(b);
  const isSameDay = aMoment.isSame(bMoment, "day");
  const isSameMonth = aMoment.isSame(bMoment, "month");
  const isSameYear = aMoment.isSame(bMoment, "year");
  return isSameDay && isSameMonth && isSameYear;
};
