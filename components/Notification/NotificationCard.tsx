import { Image, Text, View } from "react-native";

interface NotificationCardProps {
  trip: string;
  costs: string;
  time: string;
  location: string;
  imageUrl: string;
}

const NotificationCard = ({
  trip,
  costs,
  time,
  location,
  imageUrl,
}: NotificationCardProps) => {
  return (
    <View className="flex-row items-center border-b border-gray-300 p-4">
      <View className="flex-1">
        <Text className="font-InterBold">
          Upcoming Trip: <Text className="font-InterRegular">{trip}</Text>
        </Text>
        <Text className="font-InterBold">
          Expense: <Text className="font-InterRegular">{costs}</Text>
        </Text>
        <Text className="font-InterBold">
          Time: <Text className="font-InterRegular">{time}</Text>
        </Text>
        <Text className="font-InterBold">
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
