import { Redirect } from "expo-router";

const CreateTripRedirect = () => {
  return (
    <Redirect
      href={{ pathname: "/(tabs)/(trip)", params: { activeCreateTrip: 1 } }}
    />
  );
};

export default CreateTripRedirect;
