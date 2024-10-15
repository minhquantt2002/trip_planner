import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddDocumentScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      presentation: "modal",
      headerShown: false,
    });
  }, [navigation]);
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
          <View className="mt-1 w-full flex-row items-start px-4">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="flex-1 text-center font-InterBold text-xl">
              Add new document
            </Text>
            <View className="w-6"></View>
          </View>
          <View className="mt-2 w-10/12">
            <TextField className="" label="Enter name of document" />
          </View>

          <View className="mt-6 w-10/12 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8">
            <FontAwesome name="upload" size={24} color="gray" />
            <Text className="mt-2 text-gray-400">Upload Document</Text>
          </View>

          <View className="mt-8 w-10/12">
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

export default AddDocumentScreen;
