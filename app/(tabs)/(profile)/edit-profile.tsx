import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfileScreen = () => {
  const onSave = () => {
    alert("save successfull!");
  };

  const onCancel = () => {
    //TODO confirm un save change.
    router.back();
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="flex-row items-center px-4">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="flex-1 text-center font-InterBold text-xl">
              Edit Profile
            </Text>
            <View className="w-4"></View>
          </View>

          <View className="mt-6 items-center">
            <View className="relative">
              <View className="h-36 w-36 items-center justify-center rounded-full bg-gray-300">
                <FontAwesome name="user" size={60} color="gray" />
              </View>
              <TouchableOpacity className="absolute bottom-0 right-0 h-10 w-10 items-center justify-center rounded-full bg-primaryColor">
                <AntDesign name="camera" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-2 w-11/12">
            <TextField className="" label="Username" />
            <TextField className="" label="Email" />
            <TextField className="" label="Phone Number" />
            <TextField className="" label="Gender" />
          </View>
          <View className="mt-4 w-11/12">
            <Button title="Save" onPress={onSave} />
            <Button
              title="Cancel"
              onPress={onCancel}
              className="mt-4 border border-primaryColor bg-white"
              textStyle="text-primaryColor"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EditProfileScreen;
