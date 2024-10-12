import { countDays, getRangeDate } from "@/utils/datetime";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface TripProps {
  id: number;
  name: string;
  image: any;
  expense: number;
  startDate: string;
  endDate: string;
}

const TripCard = ({ trip }: { trip: TripProps }) => {
  return (
    <TouchableOpacity
      className="mb-4 h-36 w-full flex-row rounded-lg border-[1px] border-neutral-200 px-4 py-2"
      onPress={() => {
        router.push({
          pathname: "/(tabs)/(trip)/trip-details/[id]",
          params: {
            id: trip.id,
          },
        });
      }}
    >
      <Image
        source={trip.image}
        className="h-full w-5/12"
        resizeMode="contain"
      />

      <View className="ml-4 h-full flex-col items-start justify-center">
        <Text className="font-InterSemiBold text-lg">{trip.name}</Text>
        <Text className="font-InterMedium text-gray-700">
          {getRangeDate(trip.startDate, trip.endDate)} {"\n"} (
          {countDays(trip.startDate, trip.endDate)} days)
        </Text>
        <Text className="mt-4 font-InterMedium text-gray-700">
          Expense: {trip.expense} $
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;
