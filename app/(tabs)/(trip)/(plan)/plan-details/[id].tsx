import AppBar from "@/components/AppBar";
import RowImage from "@/components/Collection/RowImage";
import PlanTypeDetail from "@/components/Plan/PlanTypeDetail";
import { trips } from "@/constants/trips";
import { formatPlanForPlanDetails } from "@/helpers/plan";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
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

  const [visible, setVisible] = useState(false);

  const formatedPlanDetails = formatPlanForPlanDetails(plan!);

  const menuItems = useMemo(() => {
    return [
      {
        title: "Edit plan",
        icon: "pencil",
        onPress: () =>
          router.push({
            pathname: "/(tabs)/(trip)/(plan)/edit-plan/[id]",
            params: {
              id: id,
            },
          }),
      },
      {
        title: "Delete plan",
        icon: "delete",
        onPress: () => {
          Alert.alert("Delete plan?", "Are you sure????????", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel delete plan."),
              style: "cancel",
            },
            {
              text: "Delete",
              onPress: () => console.log("Delete plan."),
            },
          ]);
        },
      },
    ];
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <Provider>
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
                {menuItems.map((item, index) => (
                  <Menu.Item
                    key={"item" + index}
                    onPress={item.onPress}
                    title={item.title}
                    leadingIcon={item.icon}
                    contentStyle={{ backgroundColor: "#fff" }}
                  />
                ))}
              </Menu>
            </View>
          }
        />

        {/* title details */}
        <ScrollView className="my-2 w-full">
          <View className="mx-auto my-2 w-11/12">
            <Text className="font-InterBold text-lg">
              {formatedPlanDetails?.title}
            </Text>
            <View className="mt-1 flex-row items-end justify-between">
              <Text className="font-InterMedium leading-[21px]">
                {formatedPlanDetails?.description}
              </Text>
              <Text className="font-InterMedium">
                Expense:{" "}
                <Text className="font-InterBold">{plan?.expense} $</Text>
              </Text>
            </View>
          </View>

          {/* main details */}
          <View className="my-2">
            <View className="bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                {formatedPlanDetails?.rangeDateTime}
              </Text>
            </View>
            <View className="mx-auto w-11/12">
              <PlanTypeDetail
                planType={plan?.plan_type!}
                {...formatedPlanDetails.detail}
              />
            </View>
          </View>

          {/* other contacts */}
          {formatedPlanDetails?.contact !== null && (
            <View className="my-2">
              <View className="bg-neutral-300 pb-1 pt-4">
                <Text className="mx-auto w-11/12 font-InterSemiBold">
                  Other Contacts
                </Text>
              </View>
              <View className="mx-auto mt-3 w-11/12">
                {["Address", "Phone", "Email"].map((item, index) => (
                  <View key={"contact" + index} className="mt-1">
                    <Text className="font-InterBold">
                      {item}:{" "}
                      <Text className="font-InterMedium">
                        {formatedPlanDetails?.contact[index]}
                      </Text>
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* collections */}
          <View className="my-2">
            <View className="bg-neutral-300 pb-1 pt-4">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                Collections
              </Text>
            </View>
            <View className="mx-auto mt-4 w-11/12">
              <RowImage imageUrls={plan?.imageUrls!} />
            </View>
          </View>

          {/* documents */}
          <View className="my-2">
            <View className="bg-neutral-300 pb-1 pt-4">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                Documents
              </Text>
            </View>
            <View className="mx-auto mt-4 w-11/12 flex-row items-center">
              <TouchableOpacity
                className="h-20 w-20 items-center justify-center rounded-xl bg-gray-300"
                onPress={() => {
                  //
                }}
              >
                <MaterialCommunityIcons name="plus" size={24} color="black" />
              </TouchableOpacity>
              <Text className="ml-4 font-InterMedium">
                Attach a photo or pdf
              </Text>
            </View>
          </View>
        </ScrollView>
      </Provider>
    </SafeAreaView>
  );
};

export default PlanDetailsScreen;
