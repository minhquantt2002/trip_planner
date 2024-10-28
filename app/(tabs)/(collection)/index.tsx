import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { trips } from "@/constants/trips";

const CollectionScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full px-4">
        <View className="flex items-center pt-1">
          <Text className="color-black flex-1 text-center font-InterBold text-xl">
            Collections
          </Text>
        </View>

        <View className="mt-4 flex flex-row items-center rounded-full border bg-gray-100 px-4 py-2">
          <FontAwesome name="search" size={18} color="gray" />
          <TextInput
            placeholder="Search Collections"
            className="ml-2 flex-1 text-base"
          />
        </View>

        <View className="mt-6 flex flex-row justify-around">
          {trips.map((trip, index) => (
            <TouchableOpacity
              key={index}
              className="items-center"
              onPress={() => {
                router.push({
                  pathname: "/(collection)/collection-detail/[id]",
                  params: {
                    id: index,
                    collectionData: JSON.stringify(trip),
                  },
                });
              }}
            >
              <Image
                source={{ uri: trip.image_url }}
                className="h-24 w-24 rounded-lg"
                resizeMode="cover"
              />
              <Text className="mt-2 text-center text-sm">{trip.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScreen;

const collections = [
  {
    id: 1,
    name: "Waterfalls",
    image:
      "https://kyluc.vn/userfiles/upload/images/modules/news/2016/7/11/0_hinh-anh-thien-nhien-dep-nhat-th-gioi.jpg",
  },
  {
    id: 2,
    name: "Beaches",
    image:
      "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-thien-nhien-3d-001.jpg",
  },
  {
    id: 3,
    name: "Restaurants",
    image:
      "https://posapp.vn/wp-content/uploads/2020/09/%C4%91%E1%BB%93ng-b%E1%BB%99-n%E1%BB%99i-th%E1%BA%A5t.jpg",
  },
];
