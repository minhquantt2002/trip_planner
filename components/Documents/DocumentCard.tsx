import { Entypo, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "react-native-paper";
import { useState } from "react";

interface DocumentData {
  imageUrl: string;
  title: string;
  url: string;
}

const DocumentCard = (props: DocumentData) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const handlePress = (uri: string) => {
    Linking.openURL(uri).catch((err) =>
      console.error("Failed to open file:", err),
    );
  };

  const handleEdit = () => {
    router.push({
      pathname: "/(document)/document-edit/[id]",
      params: {
        id: 1,
        documentData: JSON.stringify({
          imageUrl: props.imageUrl,
          title: props.title,
          url: props.url,
        }),
      },
    });
    closeMenu();
  };

  const handleDelete = () => {
    console.log("Delete document");
    closeMenu();
  };

  return (
    <View className="m-2 w-5/12 rounded-lg border border-neutral-300 px-2">
      <View className="items-end">
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </TouchableOpacity>
          }
          anchorPosition="bottom"
          mode="elevated"
        >
          <Menu.Item
            titleStyle={{ fontFamily: "Inter-Medium" }}
            onPress={handleEdit}
            title="Edit document"
          />
          <Menu.Item
            titleStyle={{ fontFamily: "Inter-Medium" }}
            onPress={handleDelete}
            title="Delete document"
          />
        </Menu>
      </View>

      <TouchableOpacity
        onPress={() => handlePress(props.url)}
        className="items-center"
      >
        {props.imageUrl ? (
          <Image
            source={{ uri: props.imageUrl }}
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
