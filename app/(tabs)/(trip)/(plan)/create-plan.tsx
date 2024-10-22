import AppBar from "@/components/AppBar";
import { plans } from "@/constants/plans";
import { PlanType } from "@/types/types";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePlanScreen = () => {
  const { planType } = useLocalSearchParams<{ planType: PlanType }>();
  const planItem = plans[planType];

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBar
          title={planItem.name}
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
          childRight={
            <TouchableOpacity onPress={() => {}}>
              <Text className="mr-2.5 text-right font-InterMedium">Save</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default CreatePlanScreen;
