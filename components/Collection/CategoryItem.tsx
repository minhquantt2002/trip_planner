import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import RowImage from "./RowImage";

interface CategoryItemProps {
  planId: string;
  planName: string;
  imageUrls: string[];
}

const CategoryItem = ({ planId, planName, imageUrls }: CategoryItemProps) => {
  return (
    <View className="mb-4">
      <View className="flex-row items-end justify-between">
        <Text className="mb-2 font-InterMedium text-lg">{planName}</Text>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(tabs)/(trip)/(plan)/plan-details/[id]",
              params: {
                id: planId,
                tripId: 1,
              },
            })
          }
          className="mt-2 self-start"
        >
          <Text className="font-InterRegular text-sm text-gray-500">
            View plan
          </Text>
        </TouchableOpacity>
      </View>

      <RowImage imageUrls={imageUrls} />
    </View>
  );
};

export default CategoryItem;
