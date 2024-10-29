import moment from "moment";

export const getCurrentDatetime = (
  format: string = "YYYY-MM-DDTHH:mm",
): string => {
  return moment().format(format);
};

export const datetimeToDay = (
  datetime?: string,
  formatInput: string = "YYYY-MM-DDTHH:mm",
  formatOutput: string = "ddd, DD MMM YYYY",
): string => {
  return moment(datetime, formatInput).format(formatOutput);
};

export const dateToTime = (date: Date): string => {
  return moment(date).format("HH:mm");
};

export const datetimeToTime = (datetime?: string): string => {
  return moment(datetime, "YYYY-MM-DDTHH:mm").format("HH:mm");
};

export const formattedDateHasNaN = (datetime?: string): Date | undefined => {
  const formattedDate = moment(datetime, "YYYY-MM-DDTHH:mm").toDate();
  return isNaN(formattedDate.getDate()) ? undefined : formattedDate;
};

export const dateToDatetime = (date: Date): string => {
  return moment(date).format("YYYY-MM-DDTHH:mm");
};

export const getRangeTime = (startTime?: string, endTime?: string): string => {
  const startTimeMoment = moment(startTime);
  const endTimeMoment = moment(endTime);
  const duration = moment.duration(endTimeMoment.diff(startTimeMoment));
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  return `${hours} hrs ${minutes}`;
};

export const getRangeDate = (startDate?: string, endDate?: string): string => {
  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);
  if (!endDate && startDate) {
    return startDateMoment.format("dddd, D MMMM YYYY");
  }
  let rangeDate = endDateMoment.format("ddd, D MMM YYYY");
  if (startDateMoment.get("year") === endDateMoment.get("year")) {
    if (startDateMoment.get("month") === endDateMoment.get("month")) {
      if (startDateMoment.get("D") !== endDateMoment.get("D")) {
        rangeDate = startDateMoment.format("ddd, DD") + " - " + rangeDate;
      } else {
        rangeDate = startDateMoment.format("dddd, D MMMM YYYY");
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

export const calculateDuration = (
  startDatetime?: string,
  endDatetime?: string,
): string => {
  const start = moment(startDatetime, "YYYY-MM-DDTHH:mm");
  const end = moment(endDatetime, "YYYY-MM-DDTHH:mm");
  const duration = moment.duration(end.diff(start));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();

  let result = "";
  if (minutes > 0) result += `${minutes}min`;
  if (hours > 0) {
    if (result !== "") result = `${hours}hrs, ` + result;
    else result = `${hours}hrs` + result;
  }
  if (days > 0) {
    if (result !== "") result = `${days}day, ` + result;
    else result = `${days}day` + result;
  }

  return result.trim();
};

export const compareDate = (a: string, b: string): boolean => {
  const aMoment = moment(a);
  const bMoment = moment(b);
  const isSameDay = aMoment.isSame(bMoment, "day");
  const isSameMonth = aMoment.isSame(bMoment, "month");
  const isSameYear = aMoment.isSame(bMoment, "year");
  return isSameDay && isSameMonth && isSameYear;
};
