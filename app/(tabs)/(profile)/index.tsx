import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const user = {
    name: "Name",
    address: "HN-VN",
    image: null,
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <Text className="text-center font-InterBold text-xl">Profile</Text>

          <TouchableOpacity
            className="mx-4 mt-4 w-11/12 flex-row items-center rounded-lg bg-gray-200 p-4"
            onPress={() => router.push("/(tabs)/(profile)/edit-profile")}
          >
            <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-300">
              {user.image ? (
                <Image source={{ uri: user.image }} />
              ) : (
                <FontAwesome name="user" size={30} color="gray" />
              )}
            </View>
            <View className="ml-4">
              <Text className="Inter-SemiBold text-lg">{user.name}</Text>
              <View className="flex-row items-center">
                <MaterialIcons name="location-pin" size={16} color="gray" />
                <Text className="ml-1 font-InterRegular">{user.address}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View className="mt-10 w-11/12">
            {/* <TouchableOpacity
              className="flex-row items-center justify-between border-y border-gray-200 p-4"
              onPress={() => {
                router.push("/(tabs)/(profile)/(document)");
              }}
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
            </TouchableOpacity> */}

            <TouchableOpacity
              className="flex-row items-center justify-between border-b border-gray-200 p-4"
              onPress={() => {
                router.push("/(tabs)/(profile)/change-password");
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
