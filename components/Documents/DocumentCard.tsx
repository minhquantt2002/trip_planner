import { Entypo, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { Menu, Provider } from "react-native-paper";
import { useState } from "react";
interface DocumentData {
  mainPhoto: string;
  title: string;
  url: string;
}

const DocumentCard = (props: DocumentData) => {
  const [visible, setVisible] = useState(false);

  // Xử lý khi nhấn vào icon 3 chấm
  const openMenu = () => {
    console.log("Opening menu");
    setVisible(true);
  };
  const closeMenu = () => {
    console.log("Closing menu");
    setVisible(false);
  };

  // Xử lý khi nhấn vào tài liệu
  const handlePress = (uri: string) => {
    Linking.openURL(uri).catch((err) =>
      console.error("Failed to open file:", err),
    );
  };

  // Xử lý khi nhấn vào sửa/xóa
  const handleEdit = () => {
    router.push({
      pathname: "/(document)/document-edit/[id]",
      params: {
        id: 1,
        documentData: JSON.stringify({
          mainPhoto: props.mainPhoto,
          title: props.title,
          url: props.url,
        }),
      },
    });
    closeMenu();
  };

  const handleDelete = () => {
    console.log("Xóa tài liệu");
    closeMenu();
  };

  return (
    <View className="my-2 w-6/12 px-2">
      <View className="items-end">
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu} className="p-4">
              <Entypo name="dots-three-horizontal" size={20} color="black" />
            </TouchableOpacity>
          }
          anchorPosition="bottom"
        >
          <Menu.Item onPress={handleEdit} title="Sửa" />
          <Menu.Item onPress={handleDelete} title="Xóa" />
        </Menu>
      </View>

      <TouchableOpacity
        onPress={() => handlePress(props.url)}
        className="items-center"
      >
        {props.mainPhoto ? (
          <Image
            source={{ uri: props.mainPhoto }}
            className="h-24 w-24 rounded"
          />
        ) : (
          <View className="h-24 w-24 items-center justify-center rounded border border-gray-300">
            <FontAwesome name="file" size={56} color="gray" />
          </View>
        )}
        <Text className="mt-2 font-InterMedium">{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentCard;
