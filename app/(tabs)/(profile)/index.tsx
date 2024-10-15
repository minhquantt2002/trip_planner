import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="mt-1 items-center">
            <Text className="font-InterBold text-xl">Profile</Text>
          </View>

          <TouchableOpacity
            className="mx-4 mt-6 w-11/12 flex-row items-center rounded-lg bg-gray-200 pb-6 pl-4 pr-4 pt-6"
            onPress={() => router.push("/(tabs)/(profile)/edit-profile-tab")}
          >
            <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-300">
              <FontAwesome name="user" size={30} color="gray" />
            </View>
            <View className="ml-4">
              <Text className="Inter-SemiBold text-lg">Name</Text>
              <View className="flex-row items-center">
                <MaterialIcons name="location-pin" size={16} color="gray" />
                <Text className="ml-1 font-InterRegular">Address, Address</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View className="mt-6 w-11/12">
            <TouchableOpacity className="mx-4 flex-row items-center justify-between border-b border-t border-gray-200 py-4"
              onPress={()=>{router.push('/(tabs)/(profile)/(document)')}}
            >
              <View className="flex-row items-center">
                <MaterialIcons name="folder-open" size={24} color="black" />
                <Text className="ml-4 font-InterRegular text-lg">
                  Documents
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="gray"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="mx-4 flex-row items-center justify-between border-b border-gray-200 py-4"
              onPress={() => {
                router.push("/(tabs)/(profile)/change-password-tab");
              }}
            >
              <View className="flex-row items-center">
                <AntDesign name="key" size={24} color="black" />
                <Text className="ml-4 font-InterRegular text-lg">
                  Change Password
                </Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
