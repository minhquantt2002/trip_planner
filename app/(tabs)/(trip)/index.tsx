import TextField from "@/components/TextField";
import AppBarTrip from "@/components/Trip/AppBar";
import TripCard from "@/components/Trip/TripCard";
import { images } from "@/constants/images";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "Trip 1",
    image: images.onboarding1,
    expense: 0,
    startDate: "",
    endDate: "12 - 13 July 2024",
  },
  {
    id: 2,
    name: "Trip 2",
    image: images.onboarding2,
    expense: 0,
    startDate: "",
    endDate: "12 - 13 July 2024",
  },
  {
    id: 3,
    name: "Trip 3",
    image: images.onboarding2,
    expense: 0,
    startDate: "",
    endDate: "12 - 13 July 2024",
  },
  {
    id: 4,
    name: "Trip 4",
    image: images.onboarding2,
    expense: 0,
    startDate: "",
    endDate: "12 - 13 July 2024",
  },
  {
    id: 5,
    name: "Trip 5",
    image: images.onboarding2,
    expense: 0,
    startDate: "",
    endDate: "12 - 13 July 2024",
  },
];

const TripScreen = () => {
  const { activeCreateTrip } = useLocalSearchParams();
  console.log("activeCreateTrip: ", activeCreateTrip);

  const [tab, setTab] = useState(1);
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBarTrip tab={tab} setTab={setTab} />
        <ScrollView className="mt-4 w-full">
          <View className="m-auto w-11/12">
            <TextField
              wrapperStyle="w-full"
              IconLeft={<MaterialIcons name="search" size={24} color="black" />}
              placeholder="Trip name"
              value={search}
              onChangeText={(value) => setSearch(value)}
            />

            <View className="mt-6 w-full space-y-2">
              {data.map((trip, index) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TripScreen;
