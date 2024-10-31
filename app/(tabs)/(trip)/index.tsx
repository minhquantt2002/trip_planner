import TextField from "@/components/Form/Field/TextField";
import TripTypeTab from "@/components/Trip/TripTypeTab";
import TripCard from "@/components/Trip/TripCard";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { trips } from "@/constants/trips";

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
              IconLeft={<MaterialIcons name="search" size={24} color="gray" />}
              placeholder="Trip name"
              value={search}
              onChangeText={(value) => setSearch(value)}
            />

            <View className="mt-4 w-full space-y-2">
              {trips.map((trip, index) => (
                <TripCard
                  key={index}
                  id={index}
                  name={trip.name}
                  image={trip.image_url}
                  startDate={trip.start_date}
                  endDate={trip.end_date}
                  expense={trip.plans.reduce(
                    (pre, cur) => pre + cur.expense,
                    0,
                  )}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TripScreen;
