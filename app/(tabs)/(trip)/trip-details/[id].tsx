import PlanLine from "@/components/Plan/PlanLine";
import AppBar from "@/components/Trip/AppBar";
import { images } from "@/constants/images";
import { trips } from "@/constants/plans";
import { compareDate, getRangeDate } from "@/utils/datetime";
import { formatPlanByPlanItem, PlanTypeItemProps } from "@/utils/plan";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import moment from "moment";
import React, { useMemo } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TripDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = trips[parseInt(id)];

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
          return [...pre, ...formatPlanByPlanItem(cur)];
        }, [])
        .sort((a, b) => {
          return a.datetime.localeCompare(b.datetime);
        }),
    [],
  );

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBar
          title=""
          childLeft={
            <TouchableOpacity onPress={() => router.replace("/(tabs)/(trip)")}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
          childRight={
            <View className="flex-row items-center justify-around">
              <TouchableOpacity>
                <Feather name="plus" size={28} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={28} color="black" />
              </TouchableOpacity>
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
                Expense: {trip.plans.reduce((pre, cur) => pre + cur.expense, 0)}{" "}
                $
              </Text>
            </View>
            <Image
              source={images.onboarding3}
              resizeMode="contain"
              className="h-full w-5/12"
            />
          </View>

          <View className="mt-4 w-full">
            {mapTripDays().map((date, index, arr) => {
              const plans = formatedPlans.filter((v) =>
                v.datetime.includes(date),
              );
              const isLastLine = plans.includes(
                formatedPlans[formatedPlans.length - 1],
              );
              return (
                <PlanLine
                  key={"pl" + index}
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
    </SafeAreaView>
  );
};

export default TripDetailScreen;
