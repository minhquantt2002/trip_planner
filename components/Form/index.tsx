import { Text, View } from "react-native";
import TextField from "../TextField";

export interface FormField {
  id: string;
  title: string;
  type: "date" | "time" | "text" | "number" | "title";
  xs: number;
}

const Form = ({
  formFields,
  initValues,
}: {
  formFields: FormField[];
  initValues: any;
}) => {
  return (
    <View className="mx-auto w-11/12 flex-row flex-wrap">
      {formFields.map((field, index) => {
        const width =
          field.xs < 12
            ? field.xs !== 4
              ? `w-${field.xs}/12`
              : "w-1/3"
            : "w-full";
        return (
          <View key={field.id} className={`p-1.5 ${width}`}>
            {field.type === "title" ? (
              <Text className="font-InterSemiBold text-lg">{field.title}</Text>
            ) : (
              <TextField
                label={field.title}
                placeholder={"Enter " + field.title}
                labelStyle="text-gray-600"
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Form;
