import AppBar from "@/components/AppBar";
import { listPlans } from "@/constants/plans";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SelectPlanScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBar
          title="Select a plan"
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
        />
        <ScrollView className="my-2 w-full">
          <View className="flex-col">
            {listPlans.map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`w-full items-center border-b-[1px] border-inactiveColor ${index === 0 ? "border-t-[1px]" : ""}`}
                onPress={() => {
                  router.push({
                    pathname: "/(tabs)/(trip)/(plan)/create-plan",
                    params: {
                      planType: item.id,
                    },
                  });
                }}
              >
                <View className="w-11/12 flex-row items-center space-x-3 py-1.5">
                  <View className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryColor">
                    {item.icon}
                  </View>
                  <Text className="font-InterMedium text-lg">{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SelectPlanScreen;
