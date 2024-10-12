import PlanLine from "@/components/Plan/PlanLine";
import AppBar from "@/components/Trip/AppBar";
import { images } from "@/constants/images";
import { plans } from "@/constants/plans";
import { getRangeDate } from "@/utils/datetime";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import moment from "moment";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = {
  name: "Trip Name",
  startDate: "2024-10-01",
  endDate: "2024-10-06",
  expense: 1000,
};

const TripDetailScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBar
          title=""
          childLeft={
            <TouchableOpacity onPress={() => router.replace("/(tabs)/(trip)")}>
              <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
          }
          childRight={
            <View className="flex-row items-center justify-between">
              <TouchableOpacity>
                <Feather name="plus" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="more-horizontal" size={24} color="black" />
              </TouchableOpacity>
            </View>
          }
        />
        <ScrollView className="mt-2 w-full">
          <View className="mx-auto h-32 w-11/12 flex-row px-2">
            <View className="mt-2 w-7/12 flex-col space-y-1">
              <Text className="font-InterBold text-xl">{data.name}</Text>
              <Text className="font-InterSemiBold">
                {getRangeDate(data.startDate, data.endDate)}
              </Text>
              <Text className="font-InterSemiBold">
                Expense: {data.expense} $
              </Text>
            </View>
            <Image
              source={images.onboarding3}
              resizeMode="contain"
              className="h-full w-5/12"
            />
          </View>

          <View className="mt-4 w-full">
            <View className="bg-neutral-300 py-1">
              <Text className="mx-auto w-11/12 font-InterSemiBold">
                Monday, 30 September 2024
              </Text>
            </View>
            <PlanLine />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TripDetailScreen;
