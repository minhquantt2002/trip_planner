import { Redirect } from "expo-router";

const MainPage = () => {
  return <Redirect href={"/(tabs)/(trip)"} />;
  // return <Redirect href={"/(auth)/welcome"} />;
};

export default MainPage;
