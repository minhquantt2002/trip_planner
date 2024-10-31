import AppBar from "@/components/AppBar";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { trips } from "@/constants/trips";
import { planTypes } from "@/constants/plans";
import CategoryItem from "@/components/Collection/CategoryItem";

const CollectionDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const trip = trips.find((v) => v.id === id);

  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar
        title={trip?.name!}
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
        childRight={
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/(tabs)/(trip)/trip-details/[id]",
                params: {
                  id: id,
                },
              });
            }}
          >
            <Text className="mr-2.5 text-right font-InterMedium text-blue-500">
              View trip
            </Text>
          </TouchableOpacity>
        }
      />

      <ScrollView>
        <View className="mx-auto mt-4 w-11/12">
          {trip?.plans.map((plan, index) => (
            <CategoryItem
              key={plan.id || index}
              planId={plan.id}
              planName={planTypes[plan.plan_type].name}
              imageUrls={plan.imageUrls}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionDetailScreen;
