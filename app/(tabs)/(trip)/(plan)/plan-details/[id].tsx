import AppBar from "@/components/AppBar";
import { trips } from "@/constants/trips";
import { getRangeDate } from "@/utils/datetime";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Menu, Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const PlanDetailsScreen = () => {
  const { id, tripIndex } = useLocalSearchParams<{
    id: string;
    tripIndex: string;
  }>();
  const plan = trips[parseInt(tripIndex)].plans.find((v) => v.id === id);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView className="h-full bg-white">
      <Provider>
        <View className="flex h-full w-full items-center">
          <AppBar
            title=""
            childLeft={
              <TouchableOpacity onPress={() => router.back()}>
                <Feather name="chevron-left" size={28} color="black" />
              </TouchableOpacity>
            }
            childRight={
              <View className="flex items-end pr-1.5">
                <Menu
                  visible={visible}
                  onDismiss={() => setVisible(false)}
                  anchor={
                    <TouchableOpacity onPress={() => setVisible(true)}>
                      <Feather name="more-horizontal" size={28} color="black" />
                    </TouchableOpacity>
                  }
                  anchorPosition="bottom"
                  contentStyle={{ backgroundColor: "#fff" }}
                >
                  <Menu.Item
                    onPress={() => {}}
                    title="Edit plan"
                    leadingIcon={"pencil"}
                  />
                  <Menu.Item
                    onPress={() => {}}
                    title="Delete plan"
                    leadingIcon={"delete"}
                  />
                </Menu>
              </View>
            }
          />
          <ScrollView className="mb-2 w-full">
            <View className="bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                {/* {getRangeDate(plan.start_date, plan.end_date)} */}
              </Text>
            </View>
          </ScrollView>
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default PlanDetailsScreen;
