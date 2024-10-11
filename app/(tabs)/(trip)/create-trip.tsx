import Button from "@/components/Button";
import DateTimePicker from "@/components/DateTimePicker";
import ImageCoverField from "@/components/ImageCoverField";
import TextField from "@/components/TextField";
import formatDate from "@/utils/format-datetime";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateTripModal = () => {
  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [isVisible, setIsVisible] = useState(0);

  return (
    <Modal visible={true} animationType="slide">
      <SafeAreaView
        className={`bg-white ${Platform.OS === "ios" ? "mt-8" : ""}`}
      >
        <View className="mx-auto min-h-screen w-11/12">
          <View className="my-2 w-full flex-row items-center">
            <TouchableOpacity
              onPress={() => {
                router.replace("/(tabs)/(trip)");
              }}
            >
              <Text className="font-InterRegular">Cancel</Text>
            </TouchableOpacity>
            <Text className="mr-10 flex-1 text-center font-InterSemiBold text-xl text-black">
              Create Your Trip
            </Text>
          </View>
          <ScrollView className="my-2">
            <ImageCoverField />

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
              <Button title="Save" />
              <Button
                title="Cancel"
                className="bg-white"
                textStyle="text-primaryColor"
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <DateTimePicker
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
      />
    </Modal>
  );
};

export default CreateTripModal;
