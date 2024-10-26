import AppBar from "@/components/AppBar";
import Form from "@/components/Form";
import { initPlanValues, planFormFields, planTypes } from "@/constants/plans";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreatePlanScreen = () => {
  const { planType } = useLocalSearchParams<{ planType: PlanType }>();
  const planItem = planTypes[planType];
  const formFields = useMemo(() => {
    return planFormFields(planType);
  }, []);

  const [initValues, setInitValues] = useState<CreatePlan>(
    initPlanValues(planType),
  );

  const onSave = () => {
    console.log(initValues);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex h-full w-full items-center">
        <AppBar
          title={planItem.name}
          childLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="black" />
            </TouchableOpacity>
          }
          childRight={
            <TouchableOpacity onPress={onSave}>
              <Text className="mr-2.5 text-right font-InterMedium">Save</Text>
            </TouchableOpacity>
          }
        />
        <ScrollView className="mb-2 w-full">
          <Form<CreatePlan>
            initValues={initValues}
            formFields={formFields}
            onChange={(field, value) => {
              setInitValues({
                ...initValues,
                [field]: value,
              });
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreatePlanScreen;
