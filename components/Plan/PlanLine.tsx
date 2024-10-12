import { plans } from "@/constants/plans";
import { Text, TouchableOpacity, View } from "react-native";

interface PlanItemProps {
  isFirst?: boolean;
  isLast?: boolean;
  valueLeft?: string;
  titleRight: string;
  descriptionRight?: string;
}

interface PlanLineProps {
  index: number;
}

const PlanItem = ({
  isFirst,
  isLast,
  valueLeft = "",
  titleRight,
  descriptionRight = "",
}: PlanItemProps) => {
  return (
    <TouchableOpacity
      className={`mx-auto w-11/12 flex-row items-start space-x-3 ${isFirst ? "mt-1.5" : ""}`}
    >
      <View className="flex-row space-x-1">
        <Text className="mt-4 w-14 text-center font-InterMedium">
          {valueLeft}
        </Text>
        <View className="h-full flex-col items-center">
          <View
            className={`h-2 w-1 ${isFirst ? "bg-white" : "bg-primaryColor"}`}
          />
          <View className="h-9 w-9 rounded-full bg-primaryColor p-1">
            {plans.flight.icon}
          </View>
          <View
            className={`w-1 flex-1 ${isLast ? "bg-white" : "bg-primaryColor"}`}
          />
        </View>
      </View>

      <View className="mb-1.5 w-6/12">
        <Text className="font-InterBold text-lg">{titleRight}</Text>
        <Text className="font-InterMedium">{descriptionRight}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PlanLine = () => {
  return (
    <>
      <PlanItem
        isFirst
        valueLeft="08:00"
        titleRight="Lodging"
        descriptionRight="Checkout: 08:00"
      />
      <PlanItem
        valueLeft="08:00"
        titleRight="Lodging"
        descriptionRight="Checkout: 08:00"
      />
      <PlanItem
        valueLeft="08:00"
        titleRight="Lodging"
        descriptionRight="VN 12345 (Vietnam Airline) Arriving in 5 hrs 30 min at 01:00"
      />
      <PlanItem
        isLast
        valueLeft="08:00"
        titleRight="Lodging"
        descriptionRight="Checkout: 08:00"
      />
    </>
  );
};

export default PlanLine;
