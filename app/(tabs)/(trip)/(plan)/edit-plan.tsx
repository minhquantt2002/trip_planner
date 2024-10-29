import AppBar from "@/components/AppBar";
import Form from "@/components/Form";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditPlanScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBar
          title="{planItem.name}"
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="ml-1.5 text-left font-InterMedium">Cancel</Text>
            </TouchableOpacity>
          }
          childRight={
            <TouchableOpacity
              onPress={() => {
                //
              }}
            >
              <Text className="mr-1.5 text-right font-InterMedium">Save</Text>
            </TouchableOpacity>
          }
        />
        <ScrollView className="mb-2 w-full">
          {/* <Form<CreatePlan>
            initValues={initValues}
            formFields={formFields}
            onChange={(field, value) => {
              setInitValues({
                ...initValues,
                [field]: value,
              });
            }}
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditPlanScreen;
