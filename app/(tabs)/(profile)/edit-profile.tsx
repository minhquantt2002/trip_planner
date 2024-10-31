import Button from "@/components/Button";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import AppBar from "@/components/AppBar";
import { Menu, Provider } from "react-native-paper";
import Form, { FormField } from "@/components/Form";

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

  const formFields = useMemo<FormField<CreateUser>[]>(() => {
    return [
      {
        id: "username",
        title: "Username",
        type: "text",
        xs: 12,
      },
      {
        id: "full_name",
        title: "Full name",
        type: "text",
        xs: 12,
      },
      {
        id: "email",
        title: "Email",
        type: "text",
        xs: 12,
      },
      {
        id: "phone_number",
        title: "Phone number",
        type: "text",
        xs: 12,
      },
      {
        id: "address",
        title: "Address",
        type: "text",
        xs: 12,
      },
    ];
  }, []);

  const [initValues, setInitValues] = useState<CreateUser>({
    address: "",
    full_name: "",
    email: "",
    phone_number: "",
    username: "",
  });

  return (
    <Provider>
      <SafeAreaView className="h-full bg-white">
        <AppBar
          title="Edit profile"
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
        />

        <ScrollView className="mt-4">
          <View className="items-center">
            <Menu
              visible={isModalVisible}
              onDismiss={() => setModalVisible(false)}
              anchor={
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
              }
              contentStyle={{
                backgroundColor: "#fff",
              }}
              anchorPosition="bottom"
            >
              <Menu.Item
                onPress={() => {
                  takePhoto();
                }}
                title="Camera"
                leadingIcon={() => (
                  <MaterialCommunityIcons
                    name="camera"
                    size={24}
                    color="#000"
                  />
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

          <View className="mt-2">
            <Form<CreateUser>
              formFields={formFields}
              initValues={initValues}
              onChange={(field, value) => {
                setInitValues({
                  ...initValues,
                  [field]: value,
                });
              }}
            />
          </View>

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
    </Provider>
  );
};

export default EditProfileScreen;
