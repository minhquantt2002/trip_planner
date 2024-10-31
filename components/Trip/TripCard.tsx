import { countDays, getRangeDate } from "@/utils/datetime";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface TripCardProps {
  id: number;
  name: string;
  image: string;
  expense: number;
  startDate: string;
  endDate: string;
}

const TripCard = ({
  id,
  name,
  image,
  expense,
  startDate,
  endDate,
}: TripCardProps) => {
  return (
    <TouchableOpacity
      className="mb-4 h-36 w-full flex-row rounded-lg border-[1px] border-neutral-200 px-4 py-2"
      onPress={() => {
        router.push({
          pathname: "/(tabs)/(trip)/trip-details/[id]",
          params: {
            id: id,
          },
        });
      }}
    >
      <Image
        source={{ uri: image }}
        className="my-auto h-28 w-5/12"
        resizeMode="cover"
      />

      <View className="ml-4 h-full flex-col items-start justify-center">
        <Text className="font-InterSemiBold text-lg">{name}</Text>
        <Text className="font-InterMedium text-gray-700">
          {getRangeDate(startDate, endDate)} {"\n"} (
          {countDays(startDate, endDate)} days)
        </Text>
        <Text className="mt-4 font-InterMedium text-gray-700">
          Expense: {expense} $
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;
