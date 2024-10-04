import { ButtonProps } from "@/types/types";
import { Text, TouchableOpacity } from "react-native";

const getBgVariant = (bgVariant: ButtonProps["bgVariant"]) => {
  switch (bgVariant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariant = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const Button = ({
  title,
  onPress,
  IconLeft,
  IconRight,
  className = "",
  bgVariant = "primary",
  textVariant = "default",
  textStyle = "",
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full flex-row items-center justify-center rounded-xl p-2 ${className} ${getBgVariant(
        bgVariant,
      )}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`font-JosefinSemiBold mb-1 px-2 text-lg ${getTextVariant(
          textVariant,
        )} ${textStyle}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default Button;
