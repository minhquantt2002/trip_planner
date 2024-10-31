import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";

interface RowImageProps {
  imageUrls: string[];
}

const RowImage = ({ imageUrls }: RowImageProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <View>
      <View className="flex-row flex-wrap items-center">
        {imageUrls.map((url, idx) => (
          <TouchableOpacity
            key={`collection-image-${idx}`}
            onPress={() => {
              setSelectedImage(url);
              setModalVisible(true);
            }}
            className="mb-2 w-[20%] items-center"
            onLongPress={() => {
              console.log("......");
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
          className="ml-1.5 h-16 w-16 items-center justify-center rounded bg-gray-200"
          onPress={() => {
            /* image logic */
          }}
        >
          <AntDesign name="plus" size={24} color="gray" />
        </TouchableOpacity>
      </View>

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

export default RowImage;
