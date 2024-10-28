import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="select-contact" options={{ headerShown: false }} />
      <Stack.Screen name="create-contact" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
