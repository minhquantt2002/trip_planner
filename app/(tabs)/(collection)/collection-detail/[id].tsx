import AppBar from "@/components/AppBar";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { collectionImages } from "@/constants/collectionDetails";
import CollectionItem from "@/components/Collection/CollectionItems";

const CollectionDetailScreen = () => {
  const { id, collectionData } = useLocalSearchParams();
  const [collectionDetail, setCollectionDetail] = useState<Trip>();

  useEffect(() => {
    if (collectionData) {
      let parsedData;
      if (Array.isArray(collectionData)) {
        parsedData = JSON.parse(collectionData[0]);
      } else {
        parsedData = JSON.parse(collectionData);
      }
      setCollectionDetail(parsedData);
    }
  }, [collectionData]);

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="items-center">
            <AppBar
              title={collectionDetail ? collectionDetail.name : "Loading..."}
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
                        id: collectionDetail!.id,
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
          </View>
          <View className="mt-4 w-11/12">
            {collectionDetail?.plans.map((item, index) => (
              <CollectionItem
                key={item.id || index}
                item={item}
                collectionImages={collectionImages}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionDetailScreen;
