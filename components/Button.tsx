import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity } from "react-native";

const Button = ({
  title,
  onPress,
  IconLeft,
  IconRight,
  className = "",
  textStyle = "",
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full flex-row items-center justify-center rounded-xl bg-primary p-2 ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`font-JosefinSemiBold mb-1 px-2 text-lg text-white ${textStyle}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default Button;
