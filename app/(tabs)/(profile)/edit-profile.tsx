import Button from "@/components/Button";
import TextField from "@/components/Form/Field/TextField";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
const EditProfileScreen = () => {
  const onSave = () => {
    alert("save successfull!");
  };

  const onCancel = () => {
    //TODO confirm un save change .
    router.back();
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [statusCamera, requestPermissionCamera] =
    ImagePicker.useCameraPermissions();

  const [statusLibrary, requestPermissionLibrary] =
    ImagePicker.useMediaLibraryPermissions();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const choosePhoto = async () => {
    toggleModal();
    console.log("statusLibrary: ", statusLibrary);
    if (statusLibrary?.granted === false) {
      requestPermissionCamera();
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    toggleModal();
    console.log("statusCamera: ", statusCamera);
    if (statusCamera?.granted === false) {
      requestPermissionCamera();
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
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
              <TouchableOpacity
                className="absolute bottom-0 right-0 h-10 w-10 items-center justify-center rounded-full bg-primaryColor"
                onPress={toggleModal}
              >
                <AntDesign name="camera" size={22} color="white" />
              </TouchableOpacity>
            </View>
            <Modal
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
              animationType="fade"
            >
              <TouchableOpacity style={{ flex: 1 }} onPress={toggleModal} />
              <View className="absolute right-[16] top-[150] w-6/12 rounded-lg border-[1px] border-gray-200 bg-white">
                <TouchableOpacity
                  onPress={choosePhoto}
                  className="border-b-[1px] border-t-[1px] border-gray-300 p-2 pl-6"
                >
                  <Text className="font-InterMedium">Choose Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto} className="p-2 pl-6">
                  <Text className="font-InterMedium">Take Photo</Text>
                </TouchableOpacity>
              </View>
            </Modal>
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
