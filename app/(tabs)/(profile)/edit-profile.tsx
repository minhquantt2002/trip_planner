import Button from "@/components/Button";
import TextField from "@/components/Form/Field/TextField";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import AppBar from "@/components/AppBar";

const EditProfileScreen = () => {
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

  const onSave = () => {
    alert("save successfull!");
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar
        title="Edit profile"
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView className="mx-auto mt-2 w-11/12 p-2">
        <View className="mt-6 items-center">
          <View className="relative">
            <View className="h-36 w-36 items-center justify-center rounded-full bg-gray-200">
              <FontAwesome name="user" size={60} color="gray" />
            </View>
            <TouchableOpacity
              className="absolute bottom-0 right-0 h-12 w-12 items-center justify-center rounded-full bg-primaryColor"
              onPress={toggleModal}
            >
              <AntDesign name="camera" size={24} color="white" />
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

        <View className="mt-2">
          <TextField label="Username" wrapperStyle="mb-4" />
          <TextField label="Email" wrapperStyle="mb-4" />
          <TextField label="Phone Number" wrapperStyle="mb-4" />
          <TextField label="Gender" wrapperStyle="mb-4" />
          <TextField label="Address" wrapperStyle="mb-4" />
        </View>

        <View className="mt-4">
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

export default EditProfileScreen;
