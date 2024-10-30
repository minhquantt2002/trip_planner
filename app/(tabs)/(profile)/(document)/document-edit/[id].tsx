import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Button from "@/components/Button";
import * as DocumentPicker from "expo-document-picker";
import AppBar from "@/components/AppBar";
import TextField from "@/components/Form/Field/TextField";

const EditDocumentScreen = () => {
  const { id, documentData } = useLocalSearchParams();
  const [documentName, setDocumentName] = useState("");
  const [documentUrl, setDocumentUrl] = useState<string | null>(null);
  const [mainPhoto, setMainPhoto] = useState<string | null>(null);

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
      const document = result.assets && result.assets[0];
      if (document) {
        setDocumentUrl(document.uri);
        if (document.mimeType?.startsWith("image/")) {
          setMainPhoto(document.uri);
        } else {
          setMainPhoto(null);
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
      <AppBar
        title="Edit Document"
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView>
        <View className="mx-auto my-4 w-11/12">
          <TextField
            label="Document name"
            value={documentName}
            onChangeText={setDocumentName}
          />
        </View>
        <View className="relative mx-auto w-11/12">
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
              className="absolute -top-2 right-0 h-6 w-6 items-center justify-center rounded-full bg-red-600"
            >
              <AntDesign name="close" size={12} color="white" />
            </TouchableOpacity>
          )}
        </View>

        <View className="mx-auto mt-8 w-11/12">
          <Button title="Save" onPress={onSave} className="bg-yellow-400" />
          <Button
            title="Cancel"
            onPress={onCancel}
            className="mt-4 border border-yellow-400 bg-white"
            textStyle="text-yellow-400"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditDocumentScreen;
