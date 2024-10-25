declare interface Lodging {
  plan_type: PlanType;
  name: string;
  checkin_at?: string;
  checkout_at?: string;
  expense: number;
  address?: string;
  phone?: string;
  email?: string;
  document?: string;
}

declare interface Flight {
  plan_type: PlanType;
  airline?: string;
  coach?: string;
  seat?: string;
  expense: number;
  document?: string;
  departure_at?: string;
  departure_address?: string;
  departure_terminal?: string;
  departure_gate?: string;
  arrival_at?: string;
  arrival_address?: string;
  arrival_terminal?: string;
  arrival_gate?: string;
}

declare interface BoatTrain {
  plan_type: PlanType;
  name: string;
  expense: number;
  document?: string;
  coach?: string;
  seat?: string;
  departure_at?: string;
  departure_address?: string;
  arrival_at?: string;
  arrival_address?: string;
}

declare interface CarRental {
  plan_type: PlanType;
  rental_agency?: string;
  expense: number;
  document?: string;
  pickup_at?: string;
  pickup_address?: string;
  pickup_phone?: string;
  drop_off_at?: string;
  drop_off_addrress?: string;
  drop_off_phone?: string;
}

declare interface Activity {
  plan_type: PlanType;
  name: string;
  expense: number;
  address?: string;
  phone?: string;
  email?: string;
  document?: string;
  start_at?: string;
  end_at?: string;
}


declare interface Trip {
  name: string;
  image_url: string;
  start_date: string;
  end_date: string;
  plans: Plan[];
}

declare type Plan  = Activity & Flight & CarRental & BoatTrain & Lodging & {title?: string};

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
