import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSave = () => {alert('save successfull!') };
  const onCancel = () => {
    //TODO confirm un save change.
    router.back();
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="mt-1 flex-row items-center px-4">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="flex-1 text-center font-InterBold text-xl">
              Change Password
            </Text>
            <View className="w-4"></View>
          </View>
          <View className="mt-4 w-10/12">
            <View className="mt-3">
              <Text className="font-InterRegular">Enter old password</Text>
              <View className="mt-2 flex-row items-center rounded-md border border-gray-300 px-2 py-2">
                <TextInput
                  secureTextEntry={!showOldPassword}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  placeholder="Enter old password"
                  className="flex-1"
                />
                <TouchableOpacity
                  onPress={() => setShowOldPassword(!showOldPassword)}
                >
                  <FontAwesome
                    name={showOldPassword ? "eye-slash" : "eye"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-3">
              <Text className="font-InterRegular">Enter new password</Text>
              <View className="mt-2 flex-row items-center rounded-md border border-gray-300 px-2 py-2">
                <TextInput
                  secureTextEntry={!showNewPassword}
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Enter new password"
                  className="flex-1"
                />
                <TouchableOpacity
                  onPress={() => setShowNewPassword(!showNewPassword)}
                >
                  <FontAwesome
                    name={showNewPassword ? "eye-slash" : "eye"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-3">
              <Text className="font-InterRegular">Confirm password</Text>
              <View className="mt-2 flex-row items-center rounded-md border border-gray-300 px-2 py-2">
                <TextInput
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm password"
                  className="flex-1"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <FontAwesome
                    name={showConfirmPassword ? "eye-slash" : "eye"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-6 w-full">
              <Button title="Save" onPress={onSave} />
              <Button
                title="Cancel"
                onPress={onCancel}
                className="mt-4 border border-primaryColor bg-white"
                textStyle="text-primaryColor"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ChangePasswordScreen;
