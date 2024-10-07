import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="create-trip" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
