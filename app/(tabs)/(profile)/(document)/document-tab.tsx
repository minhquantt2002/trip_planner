import DocumentCard from "@/components/Documents/DocumentCard";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const DocumentScreen = () => {
  return (
    <Provider>
      <SafeAreaView className="h-full bg-white">
        <ScrollView className="w-full">
          <View className="flex h-full w-full items-center">
            <View className="mt-1 w-full items-start px-4">
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="mt-6 w-11/12 flex-row items-center rounded-lg bg-gray-200 p-4">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-gray-300">
                <FontAwesome name="file" size={30} color="gray" />
              </View>
              <View className="ml-4">
                <Text className="text-lg font-semibold">Documents Wallet</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.push("/(tabs)/(profile)/(document)/add-document-tab");
              }}
              className="mt-6 w-8/12 flex-row items-center justify-center rounded-lg border border-dashed border-gray-400 bg-white p-6"
            >
              <FontAwesome name="plus" size={24} color="gray" />
              <Text className="ml-2 text-gray-600">Add New Document</Text>
            </TouchableOpacity>
            <View className="flex-row flex-wrap">
              {documents.map((doc, index) => (
                <DocumentCard
                  key={index}
                  mainPhoto={doc.mainPhoto}
                  title={doc.title}
                  url={doc.url}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};
export default DocumentScreen;
const documents = [
  {
    mainPhoto:
      "https://www.ritchielawfirm.com/wp-content/uploads/2019/05/Drivers-license-1080x675.jpg",
    title: "Driver License",
    url: "test",
  },
  {
    mainPhoto: "",
    title: "Passport",
    url: "test",
  },
];
