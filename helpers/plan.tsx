import { FormField } from "@/components/Form";
import { planTypes } from "@/constants/plans";
import {
  datetimeToTime,
  getCurrentDatetime,
  getRangeTime,
} from "@/utils/datetime";

export const planFormFields = (planType: PlanType): FormField<CreatePlan>[] => {
  switch (planType) {
    case "lodging":
      return [
        {
          id: "name",
          title: "Lodging Name",
          type: "text",
          xs: 12,
        },
        {
          id: "checkin_at",
          title: "Check-in Date",
          type: "date",
          xs: 8,
        },
        {
          id: "checkin_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "checkout_at",
          title: "Checkout Date",
          type: "date",
          xs: 8,
          hasMinimumDate: "checkin_at",
        },
        {
          id: "checkout_at",
          title: "Time",
          type: "time",
          xs: 4,
          hasMinimumDate: "checkin_at",
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "address",
          title: "Address",
          type: "text",
          xs: 12,
        },
        {
          id: "phone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
        {
          id: "email",
          title: "Email",
          type: "text",
          xs: 12,
        },
      ];
    case "flight":
      return [
        {
          id: "airline",
          title: "Airline *",
          type: "text",
          xs: 12,
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "title",
          title: "Departure",
          type: "title",
          xs: 12,
        },
        {
          id: "departure_at",
          title: "Departure Date",
          type: "date",
          xs: 8,
        },
        {
          id: "departure_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "coach",
          title: "Coach",
          type: "number",
          xs: 6,
        },
        {
          id: "seat",
          title: "Seat",
          type: "number",
          xs: 6,
        },
        {
          id: "departure_terminal",
          title: "Terminal",
          type: "text",
          xs: 6,
        },
        {
          id: "departure_gate",
          title: "Gate",
          type: "text",
          xs: 6,
        },
        {
          id: "departure_terminal",
          title: "Address",
          type: "text",
          xs: 12,
        },
        {
          id: "title",
          title: "Arrival",
          type: "title",
          xs: 12,
        },
        {
          id: "arrival_at",
          title: "Arrival Date",
          type: "date",
          xs: 8,
          hasMinimumDate: "departure_at",
        },
        {
          id: "arrival_at",
          title: "Time",
          type: "time",
          xs: 4,
          hasMinimumDate: "departure_at",
        },
        {
          id: "arrival_terminal",
          title: "Terminal",
          type: "text",
          xs: 6,
        },
        {
          id: "arrival_gate",
          title: "Gate",
          type: "text",
          xs: 6,
        },
        {
          id: "arrival_address",
          title: "Address",
          type: "text",
          xs: 12,
        },
      ];
    case "restaurant":
      return [
        {
          id: "name",
          title: "Restaurant",
          type: "text",
          xs: 12,
        },
        {
          id: "start_at",
          title: "Date",
          type: "date",
          xs: 8,
        },
        {
          id: "start_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "address",
          title: "Address",
          type: "text",
          xs: 12,
        },
        {
          id: "phone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
        {
          id: "email",
          title: "Email",
          type: "text",
          xs: 12,
        },
      ];
    case "boat":
      return [
        {
          id: "name",
          title: "Boat Name",
          type: "text",
          xs: 12,
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "title",
          title: "Departure",
          type: "title",
          xs: 12,
        },
        {
          id: "departure_at",
          title: "Departure Date",
          type: "date",
          xs: 8,
        },
        {
          id: "departure_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "coach",
          title: "Coach",
          type: "number",
          xs: 6,
        },
        {
          id: "seat",
          title: "Seat",
          type: "number",
          xs: 6,
        },
        {
          id: "departure_address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "title",
          title: "Arrival",
          type: "title",
          xs: 12,
        },
        {
          id: "arrival_at",
          title: "Arrival Date",
          type: "date",
          xs: 8,
          hasMinimumDate: "departure_at",
        },
        {
          id: "arrival_at",
          title: "Time",
          type: "time",
          xs: 4,
          hasMinimumDate: "departure_at",
        },
        {
          id: "arrival_address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
      ];
    case "train":
      return [
        {
          id: "name",
          title: "Train Name",
          type: "text",
          xs: 12,
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "title",
          title: "Departure",
          type: "title",
          xs: 12,
        },
        {
          id: "departure_at",
          title: "Departure Date",
          type: "date",
          xs: 8,
        },
        {
          id: "departure_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "coach",
          title: "Coach",
          type: "number",
          xs: 6,
        },
        {
          id: "seat",
          title: "Seat",
          type: "number",
          xs: 6,
        },
        {
          id: "departure_address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "title",
          title: "Arrival",
          type: "title",
          xs: 12,
        },
        {
          id: "arrival_at",
          title: "Arrival Date",
          type: "date",
          xs: 8,
          hasMinimumDate: "departure_at",
        },
        {
          id: "arrival_at",
          title: "Time",
          type: "time",
          xs: 4,
          hasMinimumDate: "departure_at",
        },
        {
          id: "arrival_address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
      ];
    case "carRental":
      return [
        {
          id: "rental_agency",
          title: "Rental Agency",
          type: "text",
          xs: 12,
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "title",
          title: "Pickup",
          type: "title",
          xs: 12,
        },
        {
          id: "pickup_at",
          title: "Pickup Date",
          type: "date",
          xs: 8,
        },
        {
          id: "pickup_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "pickup_address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "pickup_phone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
        {
          id: "title",
          title: "Drop-Off",
          type: "title",
          xs: 12,
        },
        {
          id: "drop_off_at",
          title: "Drop-Off Date",
          type: "date",
          xs: 8,
        },
        {
          id: "drop_off_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "drop_off_addrress",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "drop_off_phone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
      ];
    default:
      return [
        {
          id: "name",
          title: planTypes[planType].name,
          type: "text",
          xs: 12,
        },
        {
          id: "start_at",
          title: "Start Date",
          type: "date",
          xs: 8,
        },
        {
          id: "start_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "end_at",
          title: "End Date",
          type: "date",
          xs: 8,
        },
        {
          id: "end_at",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "expense",
          title: "Expense",
          type: "number",
          xs: 12,
        },
        {
          id: "address",
          title: "Address",
          type: "text",
          xs: 12,
        },
        {
          id: "phone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
        {
          id: "email",
          title: "Email",
          type: "text",
          xs: 12,
        },
      ];
  }
};

export interface PlanTypeItemProps {
  id: string;
  planType: PlanType;
  titleRight?: string;
  valueLeft?: string;
  descriptionRight?: string;
  datetime?: string;
}

export const initPlanValues = (planType: PlanType): CreatePlan => {
  const values = { expense: 0, plan_type: planType };
  const currentDatetime = getCurrentDatetime();

  switch (planType) {
    case "lodging":
      return {
        ...values,
        name: "",
        checkin_at: currentDatetime,
        checkout_at: currentDatetime,
        address: "",
        phone: "",
        email: "",
      };
    case "flight":
      return {
        ...values,
        name: "",
        airline: "",
        coach: "",
        seat: "",
        departure_at: currentDatetime,
        departure_address: "",
        departure_terminal: "",
        departure_gate: "",
        arrival_at: currentDatetime,
        arrival_address: "",
        arrival_terminal: "",
        arrival_gate: "",
      };
    case "restaurant":
      return {
        ...values,
        name: "",
        start_at: currentDatetime,
        address: "",
        phone: "",
        email: "",
      };
    case "boat":
      return {
        ...values,
        name: "",
        coach: "",
        seat: "",
        departure_at: currentDatetime,
        departure_address: "",
        arrival_at: currentDatetime,
        arrival_address: "",
      };
    case "train":
      return {
        ...values,
        name: "",
        coach: "",
        seat: "",
        departure_at: currentDatetime,
        departure_address: "",
        arrival_at: currentDatetime,
        arrival_address: "",
      };
    case "carRental":
      return {
        ...values,
        name: "",
        rental_agency: "",
        pickup_at: currentDatetime,
        pickup_address: "",
        pickup_phone: "",
        drop_off_at: currentDatetime,
        drop_off_addrress: "",
        drop_off_phone: "",
      };
    default:
      return {
        ...values,
        name: "",
        start_at: currentDatetime,
        end_at: currentDatetime,
        phone: "",
        address: "",
        email: "",
      };
  }
};

export const formatPlanForPlanLine = (plan: Plan): PlanTypeItemProps[] => {
  switch (plan.plan_type) {
    case "lodging":
      return [
        {
          id: plan.id,
          titleRight: plan.name,
          descriptionRight: `Checkin: ${datetimeToTime(plan.checkin_at)}`,
          valueLeft: "",
          datetime: plan.checkin_at,
          planType: plan.plan_type,
        },
        {
          id: plan.id,
          titleRight: plan.name,
          descriptionRight: `Checkout: ${datetimeToTime(plan.checkout_at)}`,
          valueLeft: "",
          datetime: plan.checkout_at,
          planType: plan.plan_type,
        },
      ];

    case "carRental":
      return [
        {
          id: plan.id,
          titleRight: plan.rental_agency,
          descriptionRight: `Pick up: ${datetimeToTime(plan.pickup_at)}`,
          valueLeft: "",
          datetime: plan.pickup_at,
          planType: plan.plan_type,
        },
        {
          id: plan.id,
          titleRight: plan.rental_agency,
          descriptionRight: `Drop-off: ${datetimeToTime(plan.drop_off_at)}`,
          valueLeft: "",
          datetime: plan.drop_off_at,
          planType: plan.plan_type,
        },
      ];

    case "flight":
      return [
        {
          id: plan.id,
          titleRight: "Flight",
          descriptionRight: `${plan.airline}\nArriving in ${getRangeTime(plan.departure_at, plan.arrival_at)} at ${datetimeToTime(plan.pickup_at)}`,
          valueLeft: datetimeToTime(plan.departure_at),
          datetime: plan.departure_at,
          planType: plan.plan_type,
        },
      ];

    case "boat":
      return [
        {
          id: plan.id,
          titleRight: plan.name,
          descriptionRight: plan.arrival_at,
          valueLeft: datetimeToTime(plan.departure_at),
          datetime: plan.departure_at,
          planType: plan.plan_type,
        },
      ];

    case "train":
      return [
        {
          id: plan.id,
          titleRight: plan.name,
          descriptionRight: plan.arrival_at,
          valueLeft: datetimeToTime(plan.departure_at),
          datetime: plan.departure_at,
          planType: plan.plan_type,
        },
      ];

    default:
      return [
        {
          id: plan.id,
          titleRight: plan.name,
          descriptionRight: "",
          valueLeft: datetimeToTime(plan.start_at),
          datetime: plan.start_at,
          planType: plan.plan_type,
        },
      ];
  }
};

export const formatPlanForPlanDetails = () => {
  return;
};
