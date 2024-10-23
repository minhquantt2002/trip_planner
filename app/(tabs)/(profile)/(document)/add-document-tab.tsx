import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";

const AddDocumentScreen = () => {
  const [documentName, setDocumentName] = useState("");
  const [documentUrl, setDocumentUrl] = useState<string | null>(null);
  const [documentImage, setDocumentImage] = useState<string | null>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === "success") {
        setDocumentUrl(result.uri);

        if (result.mimeType?.startsWith("image/")) {
          setDocumentImage(result.uri);
        } else {
          setDocumentImage(null);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSave = () => {
    if (!documentName || !documentUrl) {
      alert("Please enter document name and upload a file.");
      return;
    }
    alert(`Document saved!\nName: ${documentName}\nURL: ${documentUrl}`);
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="mt-1 w-full flex-row items-start px-4">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="flex-1 text-center font-InterBold text-xl">
              Add new document
            </Text>
            <View className="w-6"></View>
          </View>
          <View className="mt-2 w-10/12">
            <TextField
              className=""
              label="Enter name of document"
              value={documentName}
              onChangeText={setDocumentName}
            />
          </View>

          <TouchableOpacity
            onPress={pickDocument}
            className="mt-6 w-10/12 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8"
          >
            <FontAwesome name="upload" size={24} color="gray" />
            <Text className="mt-2 text-gray-400">Upload Document</Text>
          </TouchableOpacity>

          {documentImage && (
            <Image
              source={{ uri: documentImage }}
              className="mt-4 h-24 w-24 rounded"
            />
          )}

          <View className="mt-8 w-10/12">
            <Button title="Save" onPress={onSave} />
            <Button
              title="Cancel"
              onPress={onCancel}
              className="mt-4 border border-primaryColor bg-white"
              textStyle="text-primaryColor"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddDocumentScreen;
