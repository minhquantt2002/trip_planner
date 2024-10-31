import AppBar from "@/components/AppBar";
import NotificationCard from "@/components/Notification/NotificationCard";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar title="Notifications" />

      <ScrollView className="mt-4 w-full">
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
    </SafeAreaView>
  );
};

export default NotificationScreen;

const notifications = [
  {
    trip: "Go To Beaches",
    costs: "2000$",
    time: "7 a.m Sep 30.",
    location: "Hawaii",
    imageUrl:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg",
  },
  {
    trip: "Mountain Hiking",
    costs: "1500$",
    time: "3 p.m Oct 5.",
    location: "Colorado",
    imageUrl:
      "https://vemaybay123.vn/static/team/upload/images/tin-tuc/1%201kham-pha-nhung-diem-du-lich-hap-dan-tai-colorado/L%E1%BA%ADp%20k%E1%BA%BF%20ho%E1%BA%A1ch%20cho%20chuy%E1%BA%BFn%20du%20l%E1%BB%8Bch%20Colorado.jpg",
  },
  {
    trip: "City Tour",
    costs: "1000$",
    time: "2 a.m Nov 1",
    location: "New York",
    imageUrl:
      "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
  },
];
