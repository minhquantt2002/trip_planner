import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

const tabs = [
  {
    title: "Trip",
    onPress: () => {
      router.replace("/(tabs)/trip");
    },
    renderIcon: (color: string, active = false) => (
      <MaterialIcons name="work" size={active ? 32 : 26} color={color} />
    ),
  },
  {
    title: "Alert",
    onPress: () => {
      router.replace("/(tabs)/alert");
    },
    renderIcon: (color: string, active = false) => (
      <MaterialCommunityIcons
        name="bell"
        size={active ? 32 : 26}
        color={color}
      />
    ),
  },
  {
    title: "",
    onPress: () => {
      router.replace("/(tabs)/trip");
    },
    renderIcon: (color: string, active = false) => (
      <View className={`bg-primaryColor rounded-full p-1`}>
        <MaterialCommunityIcons name="plus" size={36} color="#ffffff" />
      </View>
    ),
  },
  {
    title: "Save",
    onPress: () => {
      router.replace("/(tabs)/collection");
    },
    renderIcon: (color: string, active = false) => (
      <MaterialIcons name="turned-in" size={active ? 32 : 26} color={color} />
    ),
  },
  {
    title: "Profile",
    onPress: () => {
      router.replace("/(tabs)/profile");
    },
    renderIcon: (color: string, active = false) => (
      <MaterialIcons
        name="account-circle"
        size={active ? 32 : 26}
        color={color}
      />
    ),
  },
];

const TabBar = ({ visited }: { visited: number }) => {
  return (
    <View></View>
    // <View className="h-[72px] flex-row rounded-t-xl bg-[#000000] py-2">
    //   {tabs.map((tab, index) => (
    //     <TouchableOpacity
    //       key={"tab" + index}
    //       className={`w-[20%] items-center ${index == 2 ? "justify-center" : "justify-end"}`}
    //       onPress={tab.onPress}
    //     >
    //       {tab.renderIcon(
    //         visited === index ? "#FFC600" : "#FFFFFF",
    //         visited === index,
    //       )}
    //       {index !== 2 && (
    //         <Text
    //           className={`${visited === index ? "text-primaryColor" : "text-white"} font-InterMedium`}
    //         >
    //           {tab.title}
    //         </Text>
    //       )}
    //     </TouchableOpacity>
    //   ))}
    // </View>
  );
};

export default TabBar;
