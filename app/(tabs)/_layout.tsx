import { Stack, Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="trip" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabLayout;
