import { FontAwesome } from "@expo/vector-icons";
import { useLinkTo } from "@react-navigation/native";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface DocumentData {
  mainPhoto: string;
  title: string;
}

const DocumentCard = (props: DocumentData) => {


  const handlePress = () => {
    router.push({
      pathname:'/(document)/document-details/[id]',
      params:{
        id: 1,
      }
    })
  };
  return (
    <TouchableOpacity onPress={handlePress} className="items-center p-9">
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
      <Text className="mt-2">{props.title}</Text>
    </TouchableOpacity>
  );
};

export default DocumentCard;
