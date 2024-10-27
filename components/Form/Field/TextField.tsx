import {
  Keyboard,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface TextFieldProps extends TextInputProps {
  label?: string;
  labelStyle?: string;
  hintStyle?: string;
  hint?: string;
  size?: "small" | "medium" | "large";
  IconLeft?: any;
  IconRight?: any;
  secureTextEntry?: boolean;
  containerStyle?: string;
  inputStyle?: string;
  wrapperStyle?: string;
}

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
          className={`flex flex-row items-center justify-between rounded-xl border-[1px] border-neutral-300 bg-white px-2 ${containerStyle}`}
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
