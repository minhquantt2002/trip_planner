import AppBar from "@/components/AppBar";
import Button from "@/components/Button";
import Form, { FormField } from "@/components/Form";
import { getCurrentDatetime } from "@/utils/datetime";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const EditTripScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  console.log("trip id: ", id);

  const formFields: FormField<CreateTrip>[] = useMemo<
    FormField<CreateTrip>[]
  >(() => {
    return [
      {
        id: "image_url",
        title: "",
        type: "image-cover",
        xs: 12,
      },
      {
        id: "name",
        title: "Trip name",
        type: "text",
        xs: 12,
      },
      {
        id: "start_date",
        title: "Start date",
        type: "date",
        xs: 12,
      },
      {
        id: "end_date",
        title: "End date",
        type: "date",
        xs: 12,
        hasMinimumDate: "start_date",
      },
    ];
  }, []);

  const [initValues, setInitValues] = useState<CreateTrip>({
    image_url: "",
    name: "",
    start_date: getCurrentDatetime(),
    end_date: getCurrentDatetime(),
  });

  const onSave = () => {
    console.log(initValues);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <Provider>
        <AppBar
          title="Edit your trip"
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
        />

        <ScrollView className="mt-4">
          <Form<CreateTrip>
            formFields={formFields}
            initValues={initValues}
            onChange={(field, value) => {
              setInitValues({
                ...initValues,
                [field]: value,
              });
            }}
          />

          <View className="mx-auto mt-4 w-11/12 space-y-4 p-1.5">
            <Button
              title="Save"
              onPress={() => {
                onSave();
                router.replace("/(tabs)/(trip)");
              }}
            />
            <Button
              title="Cancel"
              className="bg-white"
              textStyle="text-primaryColor"
            />
          </View>
        </ScrollView>
      </Provider>
    </SafeAreaView>
  );
};

export default EditTripScreen;
