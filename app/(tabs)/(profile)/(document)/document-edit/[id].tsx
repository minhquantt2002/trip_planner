import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type DocumentDetailParams = {
  mainPhoto: string;
  title: string;
};

const DocumentDetailScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <Text>edit Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DocumentDetailScreen;
