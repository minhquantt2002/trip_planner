import AppBar from "@/components/AppBar";
import { planTypes } from "@/constants/plans";
import { trips } from "@/constants/trips";
import { getRangeDate } from "@/utils/datetime";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Menu, Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const PlanDetailsScreen = () => {
  const { id, tripId } = useLocalSearchParams<{
    id: string;
    tripId: string;
  }>();

  const plan = trips
    .find((v) => v.id === tripId)
    ?.plans.find((v) => v.id === id);
  const planType = planTypes[plan?.plan_type ?? "activity"];

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView className="h-full bg-white">
      <Provider>
        <View className="flex h-full w-full items-center">
          <AppBar
            title={planType.name}
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
            <View className="mx-auto my-2 w-11/12">
              <Text className="font-InterBold text-lg">{plan?.name}</Text>
              <View className="flex-row items-center justify-between">
                <Text className="font-InterMedium">{planType.name}</Text>
                <Text className="font-InterMedium">
                  Expense:{" "}
                  <Text className="font-InterBold">{plan?.expense} $</Text>
                </Text>
              </View>
            </View>

            <View className="my-2 bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                {/* {getRangeDate(plan.start_date, plan.end_date)} */}
                Mon 30 Sep - Tue 1 Oct, 2024
              </Text>
            </View>

            <View className="my-2 bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                {/* {getRangeDate(plan.start_date, plan.end_date)} */} Others
                Informations
              </Text>
            </View>

            <View className="my-2 bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                Collections
              </Text>
            </View>

            <View className="my-2 bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                Documents
              </Text>
            </View>
          </ScrollView>
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default PlanDetailsScreen;
