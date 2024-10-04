import TabBar from "@/components/TabBar";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TripScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center"></View>
      </ScrollView>
      <TabBar />
    </SafeAreaView>
  );
};

export default TripScreen;
