import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface OptionCardProps {
  option: any;
  selectedOption: any;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  textStyle?: string;
}

declare interface TextFieldProps extends TextInputProps {
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
