import AppBar from "@/components/AppBar";
import DocumentCard from "@/components/Documents/DocumentCard";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const DocumentScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <Provider>
        <AppBar
          title="Document"
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View className="mx-auto flex w-11/12 items-center">
            <TouchableOpacity
              onPress={() =>
                router.push("/(tabs)/(profile)/(document)/add-document")
              }
              className="mt-4 w-full flex-row items-center justify-center rounded-lg border border-dashed border-gray-400 bg-white p-6"
            >
              <FontAwesome name="plus" size={28} color="gray" />
              <Text className="ml-3 font-InterMedium text-base text-gray-600">
                Add New Document
              </Text>
            </TouchableOpacity>
            <View className="flex-row flex-wrap">
              {documents.map((doc, index) => (
                <DocumentCard
                  key={index}
                  imageUrl={doc.imageUrl}
                  title={doc.title}
                  url={doc.url}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </Provider>
    </SafeAreaView>
  );
};

export default DocumentScreen;

const documents = [
  {
    imageUrl:
      "https://www.ritchielawfirm.com/wp-content/uploads/2019/05/Drivers-license-1080x675.jpg",
    title: "Driver License",
    url: "test",
  },
  {
    imageUrl: "",
    title: "Passport",
    url: "test",
  },
];
