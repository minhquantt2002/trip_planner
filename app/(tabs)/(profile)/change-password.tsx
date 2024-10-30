import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import TextField from "@/components/Form/Field/TextField";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSave = () => {
    alert("save successfull!");
  };

  const onCancel = () => {
    //TODO confirm un save change.
    router.back();
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar
        title="Create Your Trip"
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView className="mx-auto mt-4 w-11/12 p-2">
        <TextField
          label="Old password"
          value={oldPassword}
          onChangeText={(value) => setOldPassword(value)}
          wrapperStyle="mb-4"
          IconRight={
            <TouchableOpacity
              className="mr-1"
              onPress={() => setShowOldPassword(!showOldPassword)}
            >
              <FontAwesome
                name={showOldPassword ? "eye-slash" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          }
        />
        <TextField
          label="New password"
          value={newPassword}
          onChangeText={(value) => setNewPassword(value)}
          wrapperStyle="mb-4"
          IconRight={
            <TouchableOpacity
              className="mr-1"
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <FontAwesome
                name={showNewPassword ? "eye-slash" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          }
        />
        <TextField
          label="Confirm new password"
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
          wrapperStyle="mb-4"
          IconRight={
            <TouchableOpacity
              className="mr-1"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <FontAwesome
                name={showConfirmPassword ? "eye-slash" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          }
        />

        <View className="mt-4 w-full">
          <Button title="Save" onPress={onSave} />
          <Button
            title="Cancel"
            onPress={onCancel}
            className="mt-4 border border-primaryColor bg-white"
            textStyle="text-primaryColor"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
