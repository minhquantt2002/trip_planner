import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import DatePicker from "@/components/Form/Field/DatePicker";
import ImageCoverField from "@/components/Form/Field/ImageCoverField";
import TextField from "@/components/Form/Field/TextField";
import { formatDate } from "@/utils/datetime";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateTripModal = () => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [isVisible, setIsVisible] = useState(0);

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
        <ScrollView className="mx-auto mt-4 w-11/12 p-2">
          <ImageCoverField />

          <View className="mt-4">
            <TextField
              label="Trip Name"
              value={tripName}
              onChangeText={(value) => setTripName(value)}
              wrapperStyle="mb-4"
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
              wrapperStyle="mb-4"
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
          </View>
        </ScrollView>
      </View>
      <DatePicker
        date={startDate}
        isVisible={isVisible === 1}
        handleCancel={() => setIsVisible(0)}
        handleConfirm={(value) => {
          setIsVisible(0);
          setStartDate(formatDate(value));
        }}
      />

      <DatePicker
        date={endDate}
        isVisible={isVisible === 2}
        handleCancel={() => setIsVisible(0)}
        minimumDate={startDate}
        handleConfirm={(value) => {
          setIsVisible(0);
          setEndDate(formatDate(value));
        }}
      />
    </SafeAreaView>
  );
};

export default CreateTripModal;
