import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const categories = [
  { id: 1, name: "Waterfalls", image: "https://example.com/waterfall.jpg" },
  { id: 2, name: "Beaches", image: "https://example.com/beach.jpg" },
  { id: 3, name: "Restaurants", image: "https://example.com/restaurant.jpg" },
];

const CollectionScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full px-4">
        <View className="mt-4 flex items-center">
          <Text className="text-2xl font-semibold">Collections</Text>
        </View>

        <View className="mt-4 flex flex-row items-center rounded-full border bg-gray-100 px-4 py-2">
          <FontAwesome name="search" size={18} color="gray" />
          <TextInput
            placeholder="Search Collections"
            className="ml-2 flex-1 text-base"
          />
        </View>

        <View className="mt-6 flex flex-row justify-around">
          {categories.map((category) => (
            <View key={category.id} className="items-center">
              <Image
                source={{ uri: category.image }}
                className="h-24 w-24 rounded-lg"
                resizeMode="cover"
              />
              <Text className="mt-2 text-center text-sm">{category.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScreen;
