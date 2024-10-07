import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CollectionScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <Text>Collection Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScreen;
