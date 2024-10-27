import { planTypes } from "@/constants/plans";
import { PlanTypeItemProps } from "@/helpers/plan";
import { datetimeToDay } from "@/utils/datetime";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface PlanItemProps {
  planId: string;
  tripId: string;
  isFirst?: boolean;
  isLast?: boolean;
  valueLeft?: string;
  titleRight?: string;
  descriptionRight?: string;
  planType: PlanType;
}

interface PlanLineProps {
  tripId: string;
  date: string;
  isFirstLine?: boolean;
  isLastLine?: boolean;
  plans: PlanTypeItemProps[];
}

const PlanItem = ({
  planId,
  tripId,
  isFirst,
  isLast,
  planType,
  valueLeft = "",
  titleRight,
  descriptionRight = "",
}: PlanItemProps) => {
  return (
    <TouchableOpacity
      className={`mx-auto w-11/12 flex-row items-start space-x-3 ${isFirst ? "mt-1.5" : ""}`}
      onPress={() =>
        router.push({
          pathname: "/(tabs)/(trip)/(plan)/plan-details/[id]",
          params: {
            id: planId,
            tripId: tripId,
          },
        })
      }
    >
      <View className="flex-row space-x-1">
        <Text className="mt-4 w-14 text-center font-InterSemiBold">
          {valueLeft}
        </Text>
        <View className="h-full flex-col items-center">
          <View
            className={`h-2 w-1 ${isFirst ? "bg-white" : "bg-primaryColor"}`}
          />
          <View className="h-9 w-9 rounded-full bg-primaryColor p-1">
            {planTypes[planType].icon}
          </View>
          <View
            className={`w-1 flex-1 ${isLast ? "bg-white" : "bg-primaryColor"}`}
          />
        </View>
      </View>

      <View className={`mb-2 mt-1 w-7/12`}>
        <Text className="font-InterBold text-lg">{titleRight}</Text>
        <Text className="font-InterMedium">{descriptionRight}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PlanLine = ({
  date,
  isFirstLine,
  isLastLine,
  plans,
  tripId,
}: PlanLineProps) => {
  return (
    plans.length !== 0 && (
      <View>
        <View className="bg-neutral-300 py-1">
          <Text className="mx-auto w-11/12 font-InterSemiBold">
            {datetimeToDay(date, "YYYY-MM-DD", "dddd, DD MMMM YYYY")}
          </Text>
        </View>
        {plans.map((plan, index) => (
          <PlanItem
            key={index}
            planId={plan.id}
            tripId={tripId}
            isLast={index === plans.length - 1 && isLastLine}
            isFirst={index === 0 && isFirstLine}
            planType={plan.planType}
            valueLeft={plan.valueLeft}
            titleRight={plan.titleRight}
            descriptionRight={plan.descriptionRight}
          />
        ))}
      </View>
    )
  );
};

export default PlanLine;
