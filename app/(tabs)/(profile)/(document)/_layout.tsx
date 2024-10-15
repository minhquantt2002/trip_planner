import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="add-document-tab"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="document-tab"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="document-details/[id]"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="document-edit/[id]"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
