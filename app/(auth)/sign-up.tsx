import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { images } from "@/constants/images";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const onCreateAccount = () => {
    // if (!email && !password && !fullName) {
    //   ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM);
    //   return;
    // }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed up
    //     const user = userCredential.user;
    //     console.log(user);
    //     router.replace('/mytrip');
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage, errorCode);
    //     // ..
    //   });
  };
  return (
    <SafeAreaView className="bg-white">
      <View className="flex min-h-screen w-full flex-col items-center">
        <Image source={images.Logo} />
        <Text className="my-4 font-InterMedium text-2xl">
          Create an account
        </Text>
        <Text className="text-md w-8/12 text-center font-InterRegular">
          Fill your information below or register with your social account
        </Text>

        <View className="mb-2 mt-6 w-[92%] rounded-2xl py-4">
          <TextField label="First Name" />
          <TextField label="Last Name" />
          <TextField label="Email" />
          <TextField label="Password" secureTextEntry={true} />
          <Button title="Sign in" className="mt-6" />
        </View>
        <View className="flex flex-row items-center justify-center">
          <Text className="font-InterRegular text-gray-500">
            Do you have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/sign-in");
            }}
          >
            <Text className="text-primary font-InterMedium">Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
