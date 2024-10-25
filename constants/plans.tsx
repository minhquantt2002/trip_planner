import { FormField } from "@/components/Form";
import {
  formatDatetime,
  formatStringTime,
  getRangeTime,
} from "@/utils/datetime";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";

export const plans = {
  lodging: {
    name: "Lodging",
    icon: <MaterialCommunityIcons name="bed-king" size={28} color="white" />,
  },
  flight: {
    name: "Flight",
    icon: <MaterialCommunityIcons name="airplane" size={28} color="white" />,
  },
  restaurant: {
    name: "Restaurant",
    icon: <MaterialIcons name="restaurant" size={28} color="white" />,
  },
  tour: {
    name: "Tour",
    icon: <MaterialCommunityIcons name="flag" size={28} color="white" />,
  },
  boat: {
    name: "Boat",
    icon: <MaterialIcons name="directions-boat" size={28} color="white" />,
  },
  train: {
    name: "Train",
    icon: <MaterialCommunityIcons name="train" size={28} color="white" />,
  },
  meeting: {
    name: "Meeting",
    icon: <MaterialCommunityIcons name="laptop" size={28} color="white" />,
  },
  concert: {
    name: "Concert",
    icon: <MaterialIcons name="music-note" size={28} color="white" />,
  },
  carRental: {
    name: "Car Rental",
    icon: <MaterialCommunityIcons name="car" size={28} color="white" />,
  },
  note: {
    name: "Note",
    icon: <MaterialIcons name="event-note" size={28} color="white" />,
  },
  theater: {
    name: "Theater",
    icon: <MaterialIcons name="theaters" size={28} color="white" />,
  },
  shopping: {
    name: "Shopping",
    icon: <MaterialIcons name="shopping-cart" size={28} color="white" />,
  },
  activity: {
    name: "Activity",
    icon: <MaterialIcons name="directions-walk" size={28} color="white" />,
  },
};

export const listPlans: {
  id: PlanType;
  name: string;
  icon: React.JSX.Element;
}[] = [
  {
    id: "lodging",
    name: "Lodging",
    icon: <MaterialCommunityIcons name="bed-king" size={28} color="white" />,
  },
  {
    id: "flight",
    name: "Flight",
    icon: <MaterialCommunityIcons name="airplane" size={28} color="white" />,
  },
  {
    id: "restaurant",
    name: "Restaurant",
    icon: <MaterialIcons name="restaurant" size={28} color="white" />,
  },
  {
    id: "tour",
    name: "Tour",
    icon: <MaterialCommunityIcons name="flag" size={28} color="white" />,
  },
  {
    id: "boat",
    name: "Boat",
    icon: <MaterialIcons name="directions-boat" size={28} color="white" />,
  },
  {
    id: "train",
    name: "Train",
    icon: <MaterialCommunityIcons name="train" size={28} color="white" />,
  },
  {
    id: "meeting",
    name: "Meeting",
    icon: <MaterialCommunityIcons name="laptop" size={28} color="white" />,
  },
  {
    id: "concert",
    name: "Concert",
    icon: <MaterialIcons name="music-note" size={28} color="white" />,
  },
  {
    id: "carRental",
    name: "Car Rental",
    icon: <MaterialCommunityIcons name="car" size={28} color="white" />,
  },
  {
    id: "note",
    name: "Note",
    icon: <MaterialIcons name="event-note" size={28} color="white" />,
  },
  {
    id: "theater",
    name: "Theater",
    icon: <MaterialIcons name="theaters" size={28} color="white" />,
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: <MaterialIcons name="shopping-cart" size={28} color="white" />,
  },
  {
    id: "activity",
    name: "Activity",
    icon: <MaterialIcons name="directions-walk" size={28} color="white" />,
  },
];

export const planFormFields = (planType: PlanType): FormField<Plan>[] => {
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
          title: plans[planType].name,
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

export const initPlanValues = (planType: PlanType): Plan => {
  const values = { expense: 0, plan_type: planType };
  switch (planType) {
    case "lodging":
      return {
        ...values,
        name: "",
        checkin_at: moment().format("YYYY-MM-DDTHH:mm"),
        checkout_at: moment().format("YYYY-MM-DDTHH:mm"),
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
        departure_at: moment().format("YYYY-MM-DDTHH:mm"),
        departure_address: "",
        departure_terminal: "",
        departure_gate: "",
        arrival_at: moment().format("YYYY-MM-DDTHH:mm"),
        arrival_address: "",
        arrival_terminal: "",
        arrival_gate: "",
      };
    case "restaurant":
      return {
        ...values,
        name: "",
        start_at: moment().format("YYYY-MM-DDTHH:mm"),
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
        departure_at: moment().format("YYYY-MM-DDTHH:mm"),
        departure_address: "",
        arrival_at: moment().format("YYYY-MM-DDTHH:mm"),
        arrival_address: "",
      };
    case "train":
      return {
        ...values,
        name: "",
        coach: "",
        seat: "",
        departure_at: moment().format("YYYY-MM-DDTHH:mm"),
        departure_address: "",
        arrival_at: moment().format("YYYY-MM-DDTHH:mm"),
        arrival_address: "",
      };
    case "carRental":
      return {
        ...values,
        name: "",
        rental_agency: "",
        pickup_at: moment().format("YYYY-MM-DDTHH:mm"),
        pickup_address: "",
        pickup_phone: "",
        drop_off_at: moment().format("YYYY-MM-DDTHH:mm"),
        drop_off_addrress: "",
        drop_off_phone: "",
      };
    default:
      return {
        ...values,
        name: "",
        start_at: moment().format("YYYY-MM-DDTHH:mm"),
        end_at: moment().format("YYYY-MM-DDTHH:mm"),
        phone: "",
        address: "",
        email: "",
      };
  }
};

export interface PlanTypeItemProps {
  planType: PlanType;
  titleRight: string;
  valueLeft: string;
  descriptionRight: string;
  datetime: string;
}

export const formatPlanByPlanItem = (plan: Plan): PlanTypeItemProps[] => {
  switch (plan.plan_type) {
    case "lodging":
      return [
        {
          titleRight: plan.name!,
          descriptionRight: `Checkin: ${formatStringTime(plan.checkin_at!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.checkin_at!),
          planType: plan.plan_type,
        },
        {
          titleRight: plan.name!,
          descriptionRight: `Checkout: ${formatStringTime(plan.checkout_at!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.checkout_at!),
          planType: plan.plan_type,
        },
      ];

    case "carRental":
      return [
        {
          titleRight: plan.rental_agency!,
          descriptionRight: `Pick up: ${formatStringTime(plan.pickup_at!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.pickup_at!),
          planType: plan.plan_type,
        },
        {
          titleRight: plan.rental_agency!,
          descriptionRight: `Drop-off: ${formatStringTime(plan.drop_off_at!)}`,
          valueLeft: "",
          datetime: formatDatetime(plan.drop_off_at!),
          planType: plan.plan_type,
        },
      ];

    case "flight":
      return [
        {
          titleRight: "Flight",
          descriptionRight: `${plan.airline}\nArriving in ${getRangeTime(plan.departure_at!, plan.arrival_at!)} at ${formatStringTime(plan.pickup_at!)}`,
          valueLeft: formatStringTime(plan.departure_at!),
          datetime: formatDatetime(plan.departure_at!),
          planType: plan.plan_type,
        },
      ];

    case "boat":
      return [
        {
          titleRight: plan.name!,
          descriptionRight: plan.arrival_at!,
          valueLeft: formatStringTime(plan.departure_at!),
          datetime: formatDatetime(plan.departure_at!),
          planType: plan.plan_type,
        },
      ];

    case "train":
      return [
        {
          titleRight: plan.name!,
          descriptionRight: plan.arrival_at!,
          valueLeft: formatStringTime(plan.departure_at!),
          datetime: formatDatetime(plan.departure_at!),
          planType: plan.plan_type,
        },
      ];

    default:
      return [
        {
          titleRight: plan.name!,
          descriptionRight: "",
          valueLeft: formatStringTime(plan.start_at!),
          datetime: formatDatetime(plan.start_at!),
          planType: plan.plan_type,
        },
      ];
  }
};
