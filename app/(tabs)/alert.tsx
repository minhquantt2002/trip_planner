import TabBar from "@/components/TabBar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AlertScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <Text>Alert</Text>
        </View>
      </ScrollView>

      <TabBar visited={1} />
    </SafeAreaView>
  );
};

export default AlertScreen;
