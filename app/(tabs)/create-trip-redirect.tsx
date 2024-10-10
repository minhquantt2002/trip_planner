import { Redirect } from "expo-router";

const CreateTripRedirect = () => {
  return (
    <Redirect
      href={{
        pathname: "/(tabs)/(trip)/create-trip",
        // params: { activeCreateTrip: 1 },
      }}
    />
  );
};

export default CreateTripRedirect;
