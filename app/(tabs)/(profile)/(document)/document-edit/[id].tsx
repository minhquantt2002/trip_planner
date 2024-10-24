import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import * as DocumentPicker from "expo-document-picker";

const EditDocumentScreen = () => {
  const { id, documentData } = useLocalSearchParams();
  const [documentName, setDocumentName] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");
  const [mainPhoto, setMainPhoto] = useState("");

  useEffect(() => {
    if (documentData) {
      let parsedData;
      if (Array.isArray(documentData)) {
        parsedData = JSON.parse(documentData[0]);
      } else {
        parsedData = JSON.parse(documentData);
      }
      setDocumentName(parsedData.title);
      setDocumentUrl(parsedData.url);
      setMainPhoto(parsedData.mainPhoto);
    }
  }, [documentData]);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === "success") {
        setDocumentUrl(result.uri);
        if (result.mimeType?.startsWith("image/")) {
          setMainPhoto(result.uri);
        } else {
          setMainPhoto("");
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
    router.back();
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full px-4">
        <View className="flex h-full w-full items-center">
          <View className="mt-1 w-full flex-row items-start">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="flex-1 text-center font-InterBold text-xl">
              Edit Document
            </Text>
            <View className="w-6"></View>
          </View>

          <View className="mt-4 w-10/12">
            <Text className="mb-2 text-gray-500">Document name</Text>
            <TextInput
              value={documentName}
              onChangeText={setDocumentName}
              placeholder="Enter document name"
              className="h-10 rounded-lg border border-gray-300 px-4"
            />
          </View>
          <View className="relative mt-4 w-10/12">
            {documentUrl ? (
              <View className="items-center">
                {mainPhoto ? (
                  <Image
                    source={{ uri: mainPhoto }}
                    className="h-24 w-24 rounded"
                  />
                ) : (
                  <View className="h-24 w-24 items-center justify-center rounded border border-gray-300">
                    <FontAwesome name="file" size={56} color="gray" />
                  </View>
                )}
              </View>
            ) : (
              <TouchableOpacity onPress={pickDocument}>
                <View className="h-40 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                  <FontAwesome name="upload" size={24} color="gray" />
                  <Text className="mt-2 text-gray-400">Upload Document</Text>
                </View>
              </TouchableOpacity>
            )}

            {documentUrl && (
              <TouchableOpacity
                onPress={() => {
                  setDocumentUrl("");
                  setMainPhoto("");
                }}
                className="absolute -right-3 -top-3 h-6 w-6 items-center justify-center rounded-full bg-red-600"
              >
                <AntDesign name="close" size={12} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <View className="mt-8 w-10/12">
            <Button title="Save" onPress={onSave} className="bg-yellow-400" />
            <Button
              title="Cancel"
              onPress={onCancel}
              className="mt-4 border border-yellow-400 bg-white"
              textStyle="text-yellow-400"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditDocumentScreen;
