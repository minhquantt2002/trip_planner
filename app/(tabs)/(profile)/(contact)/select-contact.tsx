import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const contactTypes = [
  "Emergency Contact",
  "Work Contact",
  "Family Contact",
  "Doctor",
  "Child Care",
  "Pet Care",
  "House Sitter",
  "Pharmacy",
  "Other Contact",
];

const ContactTypeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full flex-row items-center border-b border-gray-300 px-4 py-2">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-semibold">
          Select Contact Type
        </Text>
      </View>

      <FlatList
        data={contactTypes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity className="border-b border-gray-300 px-4 py-3">
            <Text className="text-base">{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ContactTypeScreen;
