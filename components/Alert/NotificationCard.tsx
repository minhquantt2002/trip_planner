import { Image, Text, View } from "react-native";

interface dataTrip {
  trip: string;
  costs: string;
  time: string;
  location: string;
  imageUrl: string;
}

const NotificationCard = ({ trip, costs, time, location, imageUrl }: dataTrip) => {
  return (
    <View className="flex-row items-center border-b border-t border-gray-300 px-4 py-4">
      <View className="flex-1">
        <Text className="font-InterBold text-base">
          Upcoming Trip: <Text className="font-InterRegular">{trip}</Text>
        </Text>
        <Text className="font-InterBold text-base">
          Expected Costs: <Text className="font-InterRegular">{costs}</Text>
        </Text>
        <Text className="font-InterBold text-base">
          Time: <Text className="font-InterRegular">{time}</Text>
        </Text>
        <Text className="font-InterBold text-base">
          Location: <Text className="font-InterRegular">{location}</Text>
        </Text>
      </View>
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-24 w-24 rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
};

export default NotificationCard;
