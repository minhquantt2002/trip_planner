import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const user = {
    name: "Name",
    address: "Ha Noi, Viet Nam",
    image: null,
  };

  const signOut = () => {
    Alert.alert(
      "Sign Out of App",
      "Are you sure that you would like to sign out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Sign out",
          onPress: () => console.log("Sign out Pressed"),
        },
      ],
    );
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar title="Profile" />

      <ScrollView>
        <View className="mx-auto flex w-11/12 items-center">
          <TouchableOpacity
            className="mt-2 w-full flex-row items-center rounded-lg border border-neutral-200 bg-neutral-100 p-4"
            onPress={() => router.push("/(tabs)/(profile)/edit-profile")}
          >
            <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-200">
              {user.image ? (
                <Image source={{ uri: user.image }} />
              ) : (
                <FontAwesome name="user" size={30} color="gray" />
              )}
            </View>
            <View className="ml-4">
              <Text className="font-InterBold text-lg">{user.name}</Text>
              <View className="flex-row items-center">
                <MaterialIcons name="location-pin" size={22} color="gray" />
                <Text className="ml-1 font-InterMedium">{user.address}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View className="mt-6 w-full">
            <TouchableOpacity
              className="flex-row items-center justify-between border-t border-neutral-200 p-4"
              onPress={() => {
                router.push("/(tabs)/(profile)/(document)/document");
              }}
            >
              <View className="flex-row items-center">
                <MaterialIcons name="folder-open" size={24} color="black" />
                <Text className="ml-4 font-InterRegular text-base">
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
              className="flex-row items-center justify-between border-y border-neutral-200 p-4"
              onPress={() => {
                router.push("/(tabs)/(profile)/(contact)");
              }}
            >
              <View className="flex-row items-center">
                <AntDesign name="contacts" size={24} color="black" />
                <Text className="ml-4 font-InterRegular text-base">
                  Travel Contacts
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="gray"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between border-b border-neutral-200 p-4"
              onPress={() => {
                router.push("/(tabs)/(profile)/change-password");
              }}
            >
              <View className="flex-row items-center">
                <AntDesign name="key" size={24} color="black" />
                <Text className="ml-4 font-InterRegular text-base">
                  Change Password
                </Text>
              </View>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="gray"
              />
            </TouchableOpacity>

            <Button
              title="Sign out"
              onPress={signOut}
              className="mt-10 bg-primaryColor"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
