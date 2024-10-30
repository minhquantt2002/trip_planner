import AppBar from "@/components/AppBar";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateContactScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <AppBar
            title="Travel Contacts"
            childLeft={
              <TouchableOpacity onPress={() => router.back()}>
                <Feather name="chevron-left" size={28} color="black" />
              </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateContactScreen;
