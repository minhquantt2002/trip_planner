import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { trips } from "@/constants/trips";
import AppBar from "@/components/AppBar";
import TextField from "@/components/Form/Field/TextField";
import { useState } from "react";

const CollectionScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar
        title="Collections"
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView>
        <View className="mx-auto w-11/12">
          <TextField
            wrapperStyle="w-full mt-4"
            IconLeft={<MaterialIcons name="search" size={24} color="gray" />}
            placeholder="Trip name"
            value={search}
            onChangeText={(value) => setSearch(value)}
          />

          <View className="mt-6 flex-row flex-wrap">
            {trips.map((trip, index) => (
              <TouchableOpacity
                key={index}
                className="w-4/12 items-center p-2"
                onPress={() =>
                  router.push({
                    pathname: "/(collection)/collection-detail/[id]",
                    params: {
                      id: trip.id,
                    },
                  })
                }
              >
                <Image
                  source={{ uri: trip.image_url }}
                  className="h-24 w-full rounded-lg"
                  resizeMode="cover"
                />
                <Text className="mt-2 text-center font-InterSemiBold">
                  {trip.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScreen;
