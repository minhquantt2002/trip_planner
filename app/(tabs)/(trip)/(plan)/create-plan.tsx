import AppBar from "@/components/AppBar";
import Form from "@/components/Form";
import { planTypes } from "@/constants/plans";
import { initPlanValues, planFormFields } from "@/helpers/plan";
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
    router.back();
    console.log(initValues);
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <AppBar
        title={planItem.name}
        childLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <Text className="ml-1.5 text-left font-InterMedium">Cancel</Text>
          </TouchableOpacity>
        }
        childRight={
          <TouchableOpacity onPress={onSave}>
            <Text className="mr-1.5 text-right font-InterMedium">Save</Text>
          </TouchableOpacity>
        }
      />

      <ScrollView className="mb-2 mt-4 w-full">
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
    </SafeAreaView>
  );
};

export default CreatePlanScreen;
