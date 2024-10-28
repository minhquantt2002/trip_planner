import AppBar from "@/components/AppBar";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const TravelContactsScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="">
          <AppBar
            title="Travel Contacts"
            childLeft={
              <TouchableOpacity onPress={() => router.back()}>
                <Feather name="chevron-left" size={28} color="black" />
              </TouchableOpacity>
            }
          />
        </View>
        <View className="mt-12 items-center">
          <TouchableOpacity
            onPress={() => {
              router.push("/(tabs)/(profile)/(contact)/select-contact");
            }}
            className="mt-6 w-8/12 flex-row items-center justify-center rounded-lg border border-dashed border-primaryColor bg-primaryColor p-6"
          >
            <FontAwesome name="plus" size={24} color="white" />
            <Text className="ml-2 text-white">Add New Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TravelContactsScreen;
