import { TextFieldProps } from "@/types/types";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const TextField = ({
  label,
  labelStyle,
  IconLeft,
  IconRight,
  secureTextEntry = false,
  containerStyle,
  wrapperStyle,
  inputStyle,
  ...props
}: TextFieldProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className={`${wrapperStyle}`}>
        {label && (
          <Text className={`text-md mb-2 font-InterMedium ${labelStyle}`}>
            {label}
          </Text>
        )}
        <View
          className={`flex flex-row items-center justify-between rounded-xl border-[1px] border-neutral-300 bg-white px-4 ${containerStyle}`}
        >
          {IconLeft && IconLeft}

          <TextInput
            className={`flex-1 rounded-xl px-1.5 py-2 font-InterRegular ${inputStyle} `}
            secureTextEntry={secureTextEntry}
            {...props}
          />

          {IconRight && IconRight}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TextField;
