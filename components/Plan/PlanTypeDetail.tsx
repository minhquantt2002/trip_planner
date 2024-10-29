import { formatTitleForPlanTypeDetail } from "@/helpers/plan";
import {
  calculateDuration,
  datetimeToDay,
  datetimeToTime,
} from "@/utils/datetime";
import { Text, View } from "react-native";

interface ActivityDetailProps {
  planType: PlanType;
  startDatetime?: string;
  startAddress?: string;
  endDatetime?: string;
  endAddress?: string;
}

interface TravelDetailProps extends ActivityDetailProps {
  startGate?: string;
  startTerminal?: string;
  endGate?: string;
  endTerminal?: string;
}

interface PlanTypeDetailProps extends TravelDetailProps {}

const ActivityDetail = ({
  planType,
  startDatetime,
  startAddress,
  endDatetime,
  endAddress,
}: ActivityDetailProps) => {
  const [titleFirst, titleSecond] = formatTitleForPlanTypeDetail(planType);

  return (
    <View>
      <View>
        <Text className="font-InterMedium">{titleFirst}</Text>
        <Text className="font-InterMedium">
          <Text className="font-InterBold text-lg">
            {datetimeToDay(startDatetime, "YYYY-MM-DDTHH:mm", "dddd, D MMMM")}
            {`\n`}
            {datetimeToTime(startDatetime)}
          </Text>
        </Text>
      </View>
      <View className="mt-4">
        <Text className="font-InterMedium">{titleSecond}</Text>
        <Text className="font-InterMedium">
          <Text className="font-InterBold text-lg">
            {datetimeToDay(endDatetime, "YYYY-MM-DDTHH:mm", "dddd D MMMM")}
            {`\n`}
            {datetimeToTime(endDatetime)}{" "}
          </Text>
          ({calculateDuration(startDatetime, endDatetime)})
        </Text>
      </View>
    </View>
  );
};

const TravelDetail = ({
  startDatetime,
  startAddress,
  endDatetime,
  endAddress,
  startGate,
  startTerminal,
  endGate,
  endTerminal,
}: TravelDetailProps) => {
  return (
    <View className="h-52 flex-row">
      <View className="my-auto h-44 flex-col justify-between">
        <Text className="font-InterMedium">Departure</Text>
        <Text className="font-InterMedium">Arrival</Text>
      </View>
      <View className="mx-3.5 h-full flex-col items-center justify-center">
        <View className="h-4 w-4 rounded-full border-[3px] border-gray-400 bg-white" />
        <View className="h-36 w-1 bg-gray-400" />
        <View className="h-4 w-4 rounded-full border-[3px] border-gray-400 bg-white" />
      </View>
      <View className="flex-col items-start justify-between">
        <Text className="font-InterMedium">
          {startAddress} at{" "}
          {datetimeToDay(startDatetime, "YYYY-MM-DDTHH:mm", "DD MMM")}
          {`\n`}
          <Text className="font-InterBold text-lg">
            {datetimeToTime(startDatetime)}
          </Text>
          {`\n`}
          <Text className="text-blue-600">
            Terminal {startTerminal} - Gate {startGate}
          </Text>
        </Text>

        <Text className="font-InterMedium">
          Duration {calculateDuration(startDatetime, endDatetime)}
        </Text>

        <Text className="font-InterMedium">
          {endAddress} at{" "}
          {datetimeToDay(startDatetime, "YYYY-MM-DDTHH:mm", "DD MMM")}
          {`\n`}
          <Text className="font-InterBold text-lg">
            {datetimeToTime(endDatetime)}
          </Text>
          {`\n`}
          <Text className="text-blue-600">
            Terminal {endTerminal} - Gate {endGate}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const PlanTypeDetail = ({
  planType,
  startDatetime,
  startAddress,
  endDatetime,
  endAddress,
  startGate,
  startTerminal,
  endGate,
  endTerminal,
}: PlanTypeDetailProps) => {
  return (
    <View className="mt-4">
      {planType === "flight" || planType === "boat" || planType === "train" ? (
        <TravelDetail
          planType={planType}
          startDatetime={startDatetime}
          startAddress={startAddress}
          endDatetime={endDatetime}
          endAddress={endAddress}
          startGate={startGate}
          startTerminal={startTerminal}
          endGate={endGate}
          endTerminal={endTerminal}
        />
      ) : (
        <ActivityDetail
          planType={planType}
          startDatetime={startDatetime}
          startAddress={startAddress}
          endDatetime={endDatetime}
        />
      )}
    </View>
  );
};

export default PlanTypeDetail;
