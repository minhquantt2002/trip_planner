import React from "react";
import { Text, View } from "react-native";

interface AppBarProps {
  title: string;
  childLeft?: React.ReactNode;
  childRight?: React.ReactNode;
}

const AppBar = ({ title, childLeft, childRight }: AppBarProps) => {
  return (
    <View className="w-11/12 flex-row items-center">
      <View className="w-2/12">{childLeft && childLeft}</View>
      <Text className="w-7/12 font-InterBold text-xl">{title}</Text>
      <View className="w-3/12">{childRight && childRight}</View>
    </View>
  );
};

export default AppBar;
