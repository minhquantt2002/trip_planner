import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

type DocumentDetailParams = {
  mainPhoto: string;
  title: string;
};

const DocumentDetailScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleMenuPress = () => {
    setModalVisible(true); 
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-bold">Document Detail</Text>
            <TouchableOpacity onPress={handleMenuPress}>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentDetailScreen;
