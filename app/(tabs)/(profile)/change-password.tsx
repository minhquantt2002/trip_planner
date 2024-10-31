import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import Form, { FormField } from "@/components/Form";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePasswordScreen = () => {
  const formFields = useMemo<FormField<ChangePassword>[]>(() => {
    return [
      {
        id: "old_password",
        title: "Old password",
        type: "text",
        xs: 12,
      },
      {
        id: "new_password",
        title: "New password",
        type: "text",
        xs: 12,
      },
      {
        id: "confirm_password",
        title: "Confirm password",
        type: "text",
        xs: 12,
      },
    ];
  }, []);

  const [initValues, setInitValues] = useState<ChangePassword>({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

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
        title="Change password"
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView className="mt-4">
        <Form<ChangePassword>
          formFields={formFields}
          initValues={initValues}
          onChange={(field, value) => {
            setInitValues({
              ...initValues,
              [field]: value,
            });
          }}
        />

        <View className="mx-auto mt-4 w-11/12">
          <Button title="Save" onPress={onSave} />
          <Button
            title="Cancel"
            onPress={onCancel}
            className="my-4 border border-primaryColor bg-white"
            textStyle="text-primaryColor"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
