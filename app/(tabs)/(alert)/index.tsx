import NotificationCard from "@/components/Alert/NotificationCard";
import { FontAwesome } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AlertScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <View className="w-full flex-row items-center pt-6 mb-8">
          <View className="w-11" />
          <Text className="color-primaryColor flex-1 text-center font-InterBold text-xl">
            Notification
          </Text>
          <View className="mr-5">
            <FontAwesome name="bell" size={24} color={"#FFC600"} />
          </View>
        </View>
        <ScrollView className="w-full">
        {notifications.map((notification, index) => (
            <NotificationCard
              key={index}
              trip={notification.trip}
              costs={notification.costs}
              time={notification.time}
              location={notification.location}
              imageUrl={notification.imageUrl}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AlertScreen;

const notifications = [
  {
    trip: "Go To Beaches",
    costs: "2000$",
    time: "Sep 30 - Oct 1.",
    location: "Hawaii",
    imageUrl:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
  },
  {
    trip: "Mountain Hiking",
    costs: "1500$",
    time: "Oct 5 - Oct 8.",
    location: "Colorado",
    imageUrl:
      "https://vemaybay123.vn/static/team/upload/images/tin-tuc/1%201kham-pha-nhung-diem-du-lich-hap-dan-tai-colorado/L%E1%BA%ADp%20k%E1%BA%BF%20ho%E1%BA%A1ch%20cho%20chuy%E1%BA%BFn%20du%20l%E1%BB%8Bch%20Colorado.jpg",
  },
  {
    trip: "City Tour",
    costs: "1000$",
    time: "Nov 1 - Nov 3.",
    location: "New York",
    imageUrl:
      "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
  },
];