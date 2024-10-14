import { PlanType, plans } from "@/constants/plans";
import { Text, TouchableOpacity, View } from "react-native";

interface PlanItemProps {
  isFirst?: boolean;
  isLast?: boolean;
  valueLeft?: string;
  titleRight: string;
  descriptionRight?: string;
  planType: PlanType;
}

interface PlanLineProps {
  index: number;
}

const PlanItem = ({
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
            {plans[planType].icon}
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
  const data = [
    {
      title: "Flight",
      planType: "flight",
      startDatetime: "2024-09-01T08:00",
      endDatetime: "2024-09-01T12:00",
      airline: "VN Airline",
    },
    {
      title: "Lodging",
      planType: "lodging",
      startDatetime: "2024-09-01T08:00",
      endDatetime: "2024-09-01T12:00",
    },
    {
      title: "Car Rental",
      planType: "carRental",
      startDatetime: "2024-09-01T08:00",
      endDatetime: "2024-09-01T12:00",
    },
    {
      title: "Tour",
      planType: "tour",
      startDatetime: "2024-09-01T08:00",
      endDatetime: "2024-09-01T12:00",
    },
  ];
  return (
    <View>
      {data.map((plan, index) => (
        <PlanItem
          isLast={index === data.length - 1}
          isFirst={index === 0}
          planType={plan.planType as PlanType}
          valueLeft="08:00"
          titleRight={plan.title}
          descriptionRight="Checkout: 08:00"
        />
      ))}
    </View>
  );
};

export default PlanLine;
