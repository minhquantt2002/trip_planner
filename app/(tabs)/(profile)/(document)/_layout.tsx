import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="verify"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen name="add-document" options={{ headerShown: false }} />
      <Stack.Screen name="document" options={{ headerShown: false }} />
      <Stack.Screen
        name="document-edit/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};
export default Layout;
