import TextField from "@/components/TextField";
import TripTypeTab from "@/components/Trip/TripTypeTab";
import TripCard from "@/components/Trip/TripCard";
import { images } from "@/constants/images";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "Trip 1",
    image: images.onboarding1,
    expense: 0,
    startDate: "2024-10-06",
    endDate: "2024-10-20",
  },
  {
    id: 2,
    name: "Trip 2",
    image: images.onboarding2,
    expense: 0,
    startDate: "2024-10-06",
    endDate: "2024-10-20",
  },
  {
    id: 3,
    name: "Trip 3",
    image: images.onboarding2,
    expense: 0,
    startDate: "2024-10-06",
    endDate: "2024-10-20",
  },
  {
    id: 4,
    name: "Trip 4",
    image: images.onboarding2,
    expense: 0,
    startDate: "2024-10-06",
    endDate: "2024-10-20",
  },
  {
    id: 5,
    name: "Trip 5",
    image: images.onboarding2,
    expense: 0,
    startDate: "2024-10-06",
    endDate: "2024-10-20",
  },
];

const TripScreen = () => {
  const [tab, setTab] = useState(1);
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <TripTypeTab tab={tab} setTab={setTab} />
        <ScrollView className="mt-2 w-full">
          <View className="m-auto w-11/12">
            <TextField
              wrapperStyle="w-full"
              IconLeft={<MaterialIcons name="search" size={24} color="black" />}
              placeholder="Trip name"
              value={search}
              onChangeText={(value) => setSearch(value)}
            />

            <View className="mt-4 w-full space-y-2">
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
