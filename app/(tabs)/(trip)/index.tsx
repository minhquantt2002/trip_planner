import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TripScreen = () => {
  const { activeCreateTrip } = useLocalSearchParams();
  console.log("activeCreateTrip: ", activeCreateTrip);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <Text>Trip Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TripScreen;
