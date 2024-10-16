import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="plan-details/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="create-plan"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
