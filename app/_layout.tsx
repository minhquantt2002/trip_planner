import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { CreateTripContext } from '../context/CreateTripContext';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'Inter-Thin': require('../assets/fonts/Inter_18pt-Thin.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter_18pt-Medium.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter_18pt-ExtraBold.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // const [tripData, setTripData] = useState([]);
  return (
    // <CreateTripContext.Provider value={{ tripData, setTripData }}>
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='+not-found' />
    </Stack>
    // </CreateTripContext.Provider>
  );
}
