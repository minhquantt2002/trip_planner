import { Redirect } from 'expo-router';

export default function MainPage() {
  return <Redirect href={'/(auth)/sign-in'} />;
}
