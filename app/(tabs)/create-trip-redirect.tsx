import { Redirect } from "expo-router";

const CreateTripRedirect = () => {
  return (
    <Redirect
      href={{
        pathname: "/(tabs)/(trip)/create-trip",
      }}
    />
  );
};

export default CreateTripRedirect;
