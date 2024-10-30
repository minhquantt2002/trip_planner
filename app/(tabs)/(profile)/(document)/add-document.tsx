import Button from "@/components/Button";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as DocumentPicker from "expo-document-picker";
import TextField from "@/components/Form/Field/TextField";
import AppBar from "@/components/AppBar";

const AddDocumentScreen = () => {
  const [documentName, setDocumentName] = useState("");
  const [documentUrl, setDocumentUrl] = useState<string | null>(null);
  const [documentImage, setDocumentImage] = useState<string | null>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      const document = result.assets && result.assets[0];
      if (document) {
        setDocumentUrl(document.uri);
        setDocumentName(document.name);
        if (document.mimeType?.startsWith("image/")) {
          setDocumentImage(document.uri);
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
      <AppBar
        title="New document"
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView>
        <View className="flex w-full items-center">
          <View className="mt-2 w-11/12">
            <TextField
              label="Document name"
              value={documentName}
              onChangeText={setDocumentName}
            />
          </View>

          {!documentUrl ? (
            <TouchableOpacity
              onPress={pickDocument}
              className="mt-6 w-11/12 items-center justify-center rounded-lg border border-gray-300 p-8"
            >
              <FontAwesome name="upload" size={28} color="gray" />
              <Text className="mt-2 font-InterMedium text-base text-gray-600">
                Upload Document
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              {documentImage ? (
                <Image
                  source={{ uri: documentImage }}
                  className="mt-4 h-24 w-24 rounded"
                />
              ) : (
                <View className="h-24 w-24 items-center justify-center rounded border border-gray-300">
                  <FontAwesome name="file" size={56} color="gray" />
                </View>
              )}
            </>
          )}

          <View className="mt-8 w-11/12">
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
