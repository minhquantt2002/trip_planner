import { FormField } from "@/components/Form";
import { PlanType, Trip } from "@/types/types";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

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

export const trips: Trip[] = [
  {
    name: "Trip 1",
    image_url:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    start_date: "2024-11-01",
    end_date: "2024-11-10",
    plans: [
      {
        plan_type: "lodging",
        name: "Luxury Hotel",
        airline: "Air France",
        checkin_at: "2024-11-01T15:00",
        checkout_at: "2024-11-05T11:00",
        expense: 500,
        address: "Paris, France",
        phone: "0123456789",
        email: "contact@luxuryhotel.com",
        document: "https://example.com/luxury_hotel_invoice.pdf",
      },
      {
        plan_type: "flight",
        airline: "VN Airline",
        departure: {
          datetime: "2024-11-01T10:00",
          address: "New York - JFK Airport",
          terminal: "C",
          gate: "32",
          seat: "12A",
          coach: "Business",
        },
        arrival: {
          datetime: "2024-11-01T18:00",
          address: "Paris - Charles de Gaulle",
          terminal: "2E",
          gate: "14",
        },
        expense: 1000,
        document: "https://example.com/flight_ticket.pdf",
      },
      {
        plan_type: "restaurant",
        name: "Le Gourmet",
        start_datetime: "2024-11-02T20:00",
        expense: 150,
        address: "Paris, France",
        phone: "0987654321",
        email: "info@legourmet.fr",
        document: "https://example.com/dinner_invoice.pdf",
      },
    ],
  },
  {
    name: "Trip 2",
    image_url:
      "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
    start_date: "2024-12-05",
    end_date: "2024-12-12",
    plans: [
      {
        plan_type: "lodging",
        name: "Mountain Resort",
        airline: "Thai Airways",
        checkin_at: "2024-12-05T14:00",
        checkout_at: "2024-12-09T10:00",
        expense: 600,
        address: "Chiang Mai, Thailand",
        phone: "0987654321",
        email: "contact@mountainresort.com",
        document: "https://example.com/resort_invoice.pdf",
      },
      {
        plan_type: "tour",
        name: "Elephant Sanctuary Tour",
        start_datetime: "2024-12-06T09:00",
        end_datetime: "2024-12-06T17:00",
        expense: 120,
        address: "Chiang Mai, Thailand",
        phone: "0123456789",
        email: "info@elephanttour.com",
        document: "https://example.com/tour_ticket.pdf",
      },
      {
        plan_type: "boat",
        name: "River Cruise",
        coach: "A",
        seat: "14",
        departure: {
          datetime: "2024-12-07T10:00",
          address: "Chiang Mai River",
        },
        arrival: { datetime: "2024-12-07T12:00", address: "Chiang Mai River" },
        expense: 200,
        document: "https://example.com/boat_ticket.pdf",
      },
    ],
  },
  {
    name: "Trip 3",
    image_url:
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/wooden-pier-free-image.jpeg?w=600&quality=80",
    start_date: "2025-01-10",
    end_date: "2025-01-20",
    plans: [
      {
        plan_type: "flight",
        airline: "Vietjet",
        departure: {
          datetime: "2025-01-10T07:00",
          address: "Los Angeles - LAX",
          terminal: "B",
          gate: "20",
          seat: "15C",
          coach: "Economy",
        },
        arrival: {
          datetime: "2025-01-10T11:00",
          address: "Tokyo - Narita Airport",
          terminal: "1",
          gate: "10",
        },
        expense: 900,
        document: "https://example.com/flight_ticket.pdf",
      },
      {
        plan_type: "carRental",
        rentalAgency: "Tokyo Car Rentals",
        pickup: {
          datetime: "2025-01-11T09:00",
          addrress: "Tokyo Narita Airport",
          phone: "0123456789",
        },
        drop_off: {
          datetime: "2025-01-15T18:00",
          addrress: "Tokyo Narita Airport",
          phone: "0123456789",
        },
        expense: 300,
        document: "https://example.com/car_rental_receipt.pdf",
      },
      {
        plan_type: "shopping",
        name: "Akihabara Electronics",
        start_datetime: "2025-01-13T12:00",
        end_datetime: "2025-01-13T16:00",
        expense: 400,
        address: "Akihabara, Tokyo",
        phone: "0987654321",
        email: "sales@akihabara.com",
        document: "https://example.com/shopping_invoice.pdf",
      },
    ],
  },
];

export const planFormFields = (planType: PlanType): FormField[] => {
  switch (planType) {
    case "lodging":
      return [
        {
          id: "lodgingName",
          title: "Lodging Name",
          type: "text",
          xs: 12,
        },
        {
          id: "checkinDate",
          title: "Check-in Date",
          type: "date",
          xs: 8,
        },
        {
          id: "checkinTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "checkoutDate",
          title: "Checkout Date",
          type: "date",
          xs: 8,
        },
        {
          id: "checkoutTime",
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
          id: "titleDeparture",
          title: "Departure",
          type: "title",
          xs: 12,
        },
        {
          id: "departureDate",
          title: "Departure Date",
          type: "date",
          xs: 8,
        },
        {
          id: "departureTime",
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
          id: "departureTerminal",
          title: "Terminal",
          type: "text",
          xs: 6,
        },
        {
          id: "departureGate",
          title: "Gate",
          type: "text",
          xs: 6,
        },
        {
          id: "address",
          title: "Address",
          type: "text",
          xs: 12,
        },
        {
          id: "titleArrival",
          title: "Arrival",
          type: "title",
          xs: 12,
        },
        {
          id: "arrivalDate",
          title: "Arrival Date",
          type: "date",
          xs: 8,
        },
        {
          id: "arrivalTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "arrivalTerminal",
          title: "Terminal",
          type: "text",
          xs: 6,
        },
        {
          id: "arrivalGate",
          title: "Gate",
          type: "text",
          xs: 6,
        },
        {
          id: "arrivalAddress",
          title: "Address",
          type: "text",
          xs: 12,
        },
      ];
    case "restaurant":
      return [
        {
          id: "restaurant",
          title: "Restaurant",
          type: "text",
          xs: 12,
        },
        {
          id: "date",
          title: "Date",
          type: "date",
          xs: 8,
        },
        {
          id: "time",
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
          id: "boatName",
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
          id: "titleDeparture",
          title: "Departure",
          type: "title",
          xs: 12,
        },
        {
          id: "departureDate",
          title: "Departure Date",
          type: "date",
          xs: 8,
        },
        {
          id: "departureTime",
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
          id: "address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "titleArrival",
          title: "Arrival",
          type: "title",
          xs: 12,
        },
        {
          id: "arrivalDate",
          title: "Arrival Date",
          type: "date",
          xs: 8,
        },
        {
          id: "arrivalTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "arrivalAddress",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
      ];
    case "train":
      return [
        {
          id: "boatName",
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
          id: "titleDeparture",
          title: "Departure",
          type: "title",
          xs: 12,
        },
        {
          id: "departureDate",
          title: "Departure Date",
          type: "date",
          xs: 8,
        },
        {
          id: "departureTime",
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
          id: "address",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "titleArrival",
          title: "Arrival",
          type: "title",
          xs: 12,
        },
        {
          id: "arrivalDate",
          title: "Arrival Date",
          type: "date",
          xs: 8,
        },
        {
          id: "arrivalTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "arrivalAddress",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
      ];
    case "carRental":
      return [
        {
          id: "rentalAgency",
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
          id: "titlePickup",
          title: "Pickup",
          type: "title",
          xs: 12,
        },
        {
          id: "pickupDate",
          title: "Pickup Date",
          type: "date",
          xs: 8,
        },
        {
          id: "pickupTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "pickupAddress",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "pickupPhone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
        {
          id: "titleDropOff",
          title: "Drop-Off",
          type: "title",
          xs: 12,
        },
        {
          id: "dropOffDate",
          title: "Drop-Off Date",
          type: "date",
          xs: 8,
        },
        {
          id: "dropOffTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "dropOffAddress",
          title: "Location / Address",
          type: "text",
          xs: 12,
        },
        {
          id: "dropOffPhone",
          title: "Phone",
          type: "text",
          xs: 12,
        },
      ];
    default:
      return [
        {
          id: "eventName",
          title: plans[planType].name,
          type: "text",
          xs: 12,
        },
        {
          id: "startDate",
          title: "Start Date",
          type: "date",
          xs: 8,
        },
        {
          id: "startTime",
          title: "Time",
          type: "time",
          xs: 4,
        },
        {
          id: "endDate",
          title: "End Date",
          type: "date",
          xs: 8,
        },
        {
          id: "endTime",
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
