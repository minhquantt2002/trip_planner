import { Text, View } from "react-native";
import TextField from "./Field/TextField";
import TimePicker from "./Field/TimePicker";
import { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import DatePicker from "./Field/DatePicker";
import { datetimeToDay, datetimeToTime } from "@/utils/datetime";
import ImageCoverField from "./Field/ImageCoverField";

export interface FormField<T> {
  id: Extract<keyof T, string>;
  title: string;
  type: "date" | "time" | "text" | "number" | "title" | "image-cover";
  hasMinimumDate?: Extract<keyof T, string>;
  xs: number;
}

const Form = <T extends {}>({
  formFields,
  initValues,
  onChange,
}: {
  formFields: FormField<T>[];
  initValues: T;
  onChange: (field: keyof T, value: any) => void;
}) => {
  const [isVisiblePicker, setIsVisiblePicker] = useState<string>("");

  return (
    <View className="mx-auto w-[95%] flex-row flex-wrap">
      {formFields.map((field, index) => {
        const width =
          field.xs < 12
            ? field.xs !== 4
              ? `w-${field.xs}/12`
              : "w-1/3"
            : "w-full";

        let item;
        if (field.type === "title") {
          item = (
            <View className="mt-3 bg-neutral-300 pb-1 pl-3 pt-1">
              <Text className="font-InterSemiBold text-lg">{field.title}</Text>
            </View>
          );
        } else if (field.type === "time") {
          item = (
            <>
              <TextField
                label={field.title}
                value={datetimeToTime(String(initValues[field.id]))}
                onPress={() => setIsVisiblePicker(field.id + index)}
                showSoftInputOnFocus={false}
                caretHidden
                labelStyle="text-gray-600"
                IconRight={
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={24}
                    color="black"
                  />
                }
              />
              <TimePicker
                time={String(initValues[field.id])}
                handleCancel={() => setIsVisiblePicker("")}
                isVisible={isVisiblePicker === field.id + index}
                handleConfirm={(value) => {
                  setIsVisiblePicker("");
                  onChange(
                    field.id,
                    String(initValues[field.id]).split("T")[0] + "T" + value,
                  );
                }}
              />
            </>
          );
        } else if (field.type === "date") {
          item = (
            <>
              <TextField
                label={field.title}
                value={datetimeToDay(String(initValues[field.id]))}
                onPress={() => setIsVisiblePicker(field.id + index)}
                showSoftInputOnFocus={false}
                caretHidden
                labelStyle="text-gray-600"
                IconRight={
                  <MaterialIcons
                    name="calendar-month"
                    size={24}
                    color="black"
                  />
                }
              />
              <DatePicker
                date={String(initValues[field.id])}
                handleCancel={() => setIsVisiblePicker("")}
                isVisible={isVisiblePicker === field.id + index}
                minimumDate={
                  field.hasMinimumDate
                    ? String(initValues[field.hasMinimumDate])
                    : undefined
                }
                handleConfirm={(value) => {
                  setIsVisiblePicker("");
                  onChange(field.id, value);
                }}
              />
            </>
          );
        } else if (field.type === "image-cover") {
          item = <ImageCoverField />;
        } else {
          item = (
            <TextField
              label={field.title}
              placeholder={"Enter " + field.title.toLocaleLowerCase()}
              labelStyle="text-gray-600"
              value={String(initValues[field.id])}
              onChangeText={(value) => {
                onChange(field.id, value);
              }}
            />
          );
        }

        return (
          <View
            key={`${String(field.id)}-${field.type}-${index}`}
            className={`p-1.5 ${width}`}
          >
            {item}
          </View>
        );
      })}
    </View>
  );
};

export default Form;
