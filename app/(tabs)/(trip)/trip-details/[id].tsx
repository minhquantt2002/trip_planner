import PlanLine from "@/components/Plan/PlanLine";
import AppBar from "@/components/AppBar";
import { images } from "@/constants/images";
import { getRangeDate } from "@/utils/datetime";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import moment from "moment";
import React, { useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu, Provider } from "react-native-paper";
import { trips } from "@/constants/trips";
import { PlanTypeItemProps, formatPlanForPlanLine } from "@/helpers/plan";

const TripDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips[parseInt(id)];
  const [visible, setVisible] = useState(false);

  const mapTripDays = () => {
    const startDate = moment(trip.start_date);
    const endDate = moment(trip.end_date);
    const tripDays = [];

    let currentDate = startDate.clone();
    while (currentDate.isSameOrBefore(endDate)) {
      tripDays.push(currentDate.clone().format("YYYY-MM-DD"));
      currentDate.add(1, "days");
    }

    return tripDays;
  };

  const formatedPlans = useMemo(
    () =>
      trip.plans
        .reduce<PlanTypeItemProps[]>((pre, cur) => {
          return [...pre, ...formatPlanForPlanLine(cur)];
        }, [])
        .sort((a, b) => {
          return a.datetime?.localeCompare(b.datetime ?? "") ?? 0;
        }),
    [],
  );

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
              <View className="flex-row items-center justify-end pr-1.5">
                <TouchableOpacity
                  className="pr-3"
                  onPress={() =>
                    router.push("/(tabs)/(trip)/(plan)/select-plan")
                  }
                >
                  <Feather name="plus" size={28} color="black" />
                </TouchableOpacity>

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
                    title="View Collection"
                    leadingIcon={"content-copy"}
                  />
                  <Menu.Item
                    onPress={() => {}}
                    title="Edit Trip"
                    leadingIcon={"pencil"}
                  />
                  <Menu.Item
                    onPress={() => {}}
                    title="Delete Trip"
                    leadingIcon={"delete"}
                  />
                </Menu>
              </View>
            }
          />
          <ScrollView className="mt-2 w-full">
            <View className="mx-auto h-32 w-11/12 flex-row px-2">
              <View className="mt-2 w-7/12 flex-col space-y-1">
                <Text className="font-InterBold text-xl">{trip.name}</Text>
                <Text className="font-InterSemiBold">
                  {getRangeDate(trip.start_date, trip.end_date)}
                </Text>
                <Text className="font-InterSemiBold">
                  Expense:{" "}
                  {trip.plans.reduce((pre, cur) => pre + cur.expense, 0)} $
                </Text>
              </View>
              <Image
                source={images.onboarding3}
                resizeMode="contain"
                className="h-full w-5/12"
              />
            </View>

            <View className="mt-4 w-full">
              {mapTripDays().map((date, index) => {
                const plans = formatedPlans.filter((v) =>
                  v.datetime?.includes(date),
                );
                const isLastLine = plans.includes(
                  formatedPlans[formatedPlans.length - 1],
                );
                return (
                  <PlanLine
                    key={"pl" + index}
                    tripId={trip.id}
                    date={date}
                    isFirstLine={index === 0}
                    isLastLine={isLastLine}
                    plans={plans}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default TripDetailScreen;
