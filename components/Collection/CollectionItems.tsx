import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { PropsWithChildren, useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

type CollectionItemProps = PropsWithChildren<{
  item: Plan;
  collectionImages: collectImages[];
}>;
const CollectionItem = ({ item, collectionImages }: CollectionItemProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <View className="" key={item.id}>
      <View className="mb-4">
        <Text className="mb-2 font-InterMedium text-lg">{item.name}</Text>
        <View className="flex-row flex-wrap items-center space-x-2">
          {collectionImages
            .filter((v) => v.plan_id === item.id)
            .flatMap((v) => v.imageUrls)
            .map((url, idx) => (
              <TouchableOpacity
                key={`${item.id}-${idx}`}
                onPress={() => {
                  setSelectedImage(url);
                  setModalVisible(true);
                }}
              >
                <Image
                  source={{ uri: url }}
                  className="h-16 w-16 rounded"
                  style={{ resizeMode: "cover" }}
                />
              </TouchableOpacity>
            ))}
          <TouchableOpacity
            className="h-16 w-16 items-center justify-center rounded bg-gray-200"
            onPress={() => {
              /* image logic */
            }}
          >
            <AntDesign name="plus" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/(tabs)/(trip)/(plan)/plan-details/[id]",
            params: {
              id: item.id,
            },
          })
        }
        className="mt-2 self-start"
      >
        <Text className="text-gray-500">View Plan</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedImage(null);
        }}
      >
        <View className="flex-1 items-center justify-center bg-black">
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              className="h-full w-full"
              style={{ resizeMode: "contain" }}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              setSelectedImage(null);
            }}
            className="absolute right-10 top-10"
          >
            <AntDesign name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CollectionItem;
