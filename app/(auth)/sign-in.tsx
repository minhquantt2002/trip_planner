import {
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import TextField from "@/components/Form/Field/TextField";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { router } from "expo-router";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    router.replace("/(tabs)/(trip)");
    // if (!email && !password) {
    //   ToastAndroid.show("Please enter Email and Password", ToastAndroid.LONG);
    //   return;
    // }
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     router.replace("/mytrip");
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage, errorCode);
    //     if (errorCode == "auth/invalid-credential") {
    //       ToastAndroid.show("Invalid Credentials", ToastAndroid.LONG);
    //     }
    //   });
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="flex min-h-screen w-full flex-col items-center">
        <Image source={images.Logo} />
        <Text className="my-4 font-InterMedium text-2xl">Sign in</Text>
        <Text className="text-md font-InterRegular text-gray-600">
          Hi Welcome back, plan your next trip
        </Text>

        <View className="mb-2 mt-6 w-[92%] rounded-2xl py-4">
          <TextField label="Email" />
          <TextField label="Password" secureTextEntry={true} />
          <Button title="Sign in" className="mt-6" onPress={onSignIn} />
        </View>
        <View className="flex flex-row items-center justify-center">
          <Text className="font-InterRegular text-gray-500">
            Don't have an account ?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/sign-up");
            }}
          >
            <Text className="text-primary font-InterMedium text-primaryColor">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
