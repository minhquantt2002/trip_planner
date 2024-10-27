import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#FFC600",
        tabBarInactiveTintColor: "#A9A9A9",
        tabBarStyle: {
          backgroundColor: "#000000",
          ...(Platform.OS === "ios"
            ? { paddingTop: 4, height: 82 }
            : { paddingTop: 6, height: 56 }),
        },
        header: () => null,
      }}
    >
      <Tabs.Screen
        name="(trip)"
        options={{
          title: "Trips",
          tabBarLabel: ({ children, focused }) => (
            <Text
              className={`${focused ? "text-primaryColor" : "text-white"} font-InterMedium`}
            >
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="work"
              size={focused ? 32 : 26}
              color={focused ? "#FFC600" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(alert)"
        options={{
          title: "Alert",
          tabBarLabel: ({ children, focused }) => (
            <Text
              className={`${focused ? "text-primaryColor" : "text-white"} font-InterMedium`}
            >
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="notifications"
              size={focused ? 32 : 26}
              color={focused ? "#FFC600" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create-trip-redirect"
        options={{
          tabBarButton: ({ ...props }) => (
            <TouchableOpacity {...props}>
              <View className="h-12 w-12 items-center justify-center rounded-full bg-primaryColor">
                <MaterialCommunityIcons name="plus" size={48} color="#ffffff" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="(collection)"
        options={{
          title: "Save",
          tabBarLabel: ({ children, focused }) => (
            <Text
              className={`${focused ? "text-primaryColor" : "text-white"} font-InterMedium`}
            >
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="bookmark"
              size={focused ? 32 : 26}
              color={focused ? "#FFC600" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarLabel: ({ children, focused }) => (
            <Text
              className={`${focused ? "text-primaryColor" : "text-white"} font-InterMedium`}
            >
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={focused ? 32 : 26}
              color={focused ? "#FFC600" : "#FFFFFF"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
