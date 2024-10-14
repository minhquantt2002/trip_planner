import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export type PlanType =
  | "lodging"
  | "flight"
  | "restaurant"
  | "tour"
  | "boat"
  | "train"
  | "meeting"
  | "concert"
  | "carRental"
  | "note"
  | "theater"
  | "shopping"
  | "activity";

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
