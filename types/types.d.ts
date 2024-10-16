import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface OptionCardProps {
  option: any;
  selectedOption: any;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  textStyle?: string;
}

declare interface TextFieldProps extends TextInputProps {
  label?: string;
  labelStyle?: string;
  hintStyle?: string;
  hint?: string;
  size?: "small" | "medium" | "large";
  IconLeft?: any;
  IconRight?: any;
  secureTextEntry?: boolean;
  containerStyle?: string;
  inputStyle?: string;
  wrapperStyle?: string;
}

declare interface Trip {
  name: string;
  image_url: string;
  start_date: string;
  end_date: string;
  plans: Plan[];
}

declare interface Plan {
  plan_type: PlanType;
  name?: string;
  rentalAgency?: string;
  airline?: string;
  checkin_at?: string;
  coach?: string;
  seat?: string;
  checkout_at?: string;
  expense: number;
  address?: string;
  phone?: string;
  email?: string;
  document?: string;
  departure?: {
    datetime: string;
    address: string;
    terminal?: string;
    gate?: string;
    seat?: string;
    coach?: string;
  };
  arrival?: {
    datetime: string;
    address: string;
    terminal?: string;
    gate?: string;
  };
  pickup?: {
    datetime: string;
    addrress: string;
    phone: string;
  };
  drop_off?: {
    datetime: string;
    addrress: string;
    phone: string;
  };
  start_datetime?: string;
  end_datetime?: string;
}

declare type PlanType =
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
