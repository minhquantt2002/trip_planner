import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Menu } from "react-native-paper";

const ImageCoverField = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [statusCamera, requestPermissionCamera] =
    ImagePicker.useCameraPermissions();

  const [statusLibrary, requestPermissionLibrary] =
    ImagePicker.useMediaLibraryPermissions();

  const choosePhoto = async () => {
    toggleMenu();
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
    toggleMenu();
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
    <View>
      <Menu
        visible={isMenuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <TouchableOpacity
            onPress={toggleMenu}
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
          </TouchableOpacity>
        }
        contentStyle={{
          backgroundColor: "#fff",
          marginLeft: "50%",
          width: "50%",
        }}
        anchorPosition="bottom"
      >
        <Menu.Item
          onPress={() => {
            takePhoto();
          }}
          title="Camera"
          leadingIcon={() => (
            <MaterialCommunityIcons name="camera" size={24} color="#000" />
          )}
          titleStyle={{ fontFamily: "Inter-Medium" }}
        />
        <Menu.Item
          onPress={() => {
            choosePhoto();
          }}
          title="Library"
          leadingIcon={() => (
            <MaterialCommunityIcons name="image" size={24} color="#000" />
          )}
          titleStyle={{ fontFamily: "Inter-Medium" }}
        />
      </Menu>
    </View>
  );
};

export default ImageCoverField;
