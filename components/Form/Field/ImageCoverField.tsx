import { Feather, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageCoverField = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [statusCamera, requestPermissionCamera] =
    ImagePicker.useCameraPermissions();

  const [statusLibrary, requestPermissionLibrary] =
    ImagePicker.useMediaLibraryPermissions();

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
    <TouchableOpacity
      onPress={toggleModal}
      className={`h-28 w-full items-center justify-center ${!imageUri ? "border-[1px] border-dashed border-gray-500" : ""}`}
    >
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          className="h-full w-full rounded-lg"
          resizeMode="contain"
        />
      ) : (
        <>
          <Feather name="upload" size={24} color="black" />
          <Text className="mt-2 font-InterRegular text-gray-800">
            Upload Trip Cover Image
          </Text>
        </>
      )}
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        animationType="fade"
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={toggleModal} />
        <View className="absolute right-[16] top-[150] w-6/12 rounded-lg border-[1px] border-gray-200 bg-white">
          <View className="flex-row items-center justify-between p-2 pl-6">
            <Text className="font-InterBold">Upload Trip Image</Text>
            <FontAwesome name="photo" size={20} color="black" />
          </View>
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
    </TouchableOpacity>
  );
};

export default ImageCoverField;
