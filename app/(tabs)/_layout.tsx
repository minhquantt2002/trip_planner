import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/TabBarIcon';

// const TabLayout = () => {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name='index'
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'home' : 'home-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name='explore'
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };

const Layout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name='welcome' options={{ headerShown: false }} />
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up' options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default Layout;
