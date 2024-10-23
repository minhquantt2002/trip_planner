import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import DateTimePicker from "@/components/DateTimePicker";
import Form, { FormField } from "@/components/Form";
import ImageCoverField from "@/components/ImageCoverField";
import TextField from "@/components/TextField";
import { planFormFields } from "@/constants/plans";
import { formatDate } from "@/utils/datetime";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateTripModal = () => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [isVisible, setIsVisible] = useState(0);

  const formFields: FormField[] = [
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

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="">
        <AppBar
          title="Create Your Trip"
          childLeft={
            <TouchableOpacity onPress={() => router.replace("/(tabs)/(trip)")}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
        />
        <ScrollView className="mb-10 w-full">
          {/* <ImageCoverField />

          <View className="mt-4">
            <TextField
              label="Trip Name"
              value={tripName}
              onChangeText={(value) => setTripName(value)}
            />
            <TextField
              label="Start Dates"
              value={startDate}
              onPress={() => setIsVisible(1)}
              showSoftInputOnFocus={false}
              caretHidden
              IconRight={
                <FontAwesome name="calendar" size={24} color="black" />
              }
            />
            <TextField
              label="End Dates"
              value={endDate}
              onPress={() => setIsVisible(2)}
              showSoftInputOnFocus={false}
              caretHidden
              IconRight={
                <FontAwesome name="calendar" size={24} color="black" />
              }
            />
          </View>

          <View className="mt-6 space-y-4">
            <Button
              title="Save"
              onPress={() => {
                router.replace("/(tabs)/(trip)");
              }}
            />
            <Button
              title="Cancel"
              className="bg-white"
              textStyle="text-primaryColor"
            />
          </View> */}

          <Form formFields={planFormFields("carRental")} />
        </ScrollView>
      </View>
      {/* <DateTimePicker
        date={startDate}
        isVisible={isVisible === 1}
        handleCancel={() => setIsVisible(0)}
        handleConfirm={(value) => {
          setIsVisible(0);
          setStartDate(formatDate(value));
        }}
      />

      <DateTimePicker
        date={endDate}
        isVisible={isVisible === 2}
        handleCancel={() => setIsVisible(0)}
        minimumDate={startDate}
        handleConfirm={(value) => {
          setIsVisible(0);
          setEndDate(formatDate(value));
        }}
      /> */}
    </SafeAreaView>
  );
};

export default CreateTripModal;
