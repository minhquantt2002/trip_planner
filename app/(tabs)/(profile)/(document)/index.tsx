import React, { useRef, useState } from "react";
import { Text, TextInput, View, Alert, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PinCodeScreen = () => {
  const [pin, setPin] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const correctPin = "123456";

  const handleChange = (text: string, index: number) => {
    //check value -> move to next position
    const newPin = [...pin];
    const numericValue = text.replace(/[^0-9]/g, "");
    newPin[index] = numericValue;
    setPin(newPin);

    if (
      numericValue.length === 1 &&
      index < 5 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
    if (newPin.join("").length === 6) {
      handlePinSubmit(newPin.join(""));
    }
  };
  //Backspace
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && pin[index] === "") {
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
        const newPin = [...pin];
        newPin[index - 1] = ""; 
        setPin(newPin);
      }
    }
  };

  const handlePinSubmit = (enteredPin: string) => {
    if (enteredPin === correctPin) {
      router.replace("/(tabs)/(profile)/(document)/document-tab");
    } else {
      Alert.alert("Invalid PIN", "The PIN code you entered is incorrect.");
      setPin(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="w-full">
        <View className="flex h-full w-full items-center">
          <View className="mt-48 flex-1 items-center justify-center rounded-lg bg-gray-100 pt-8">
            <MaterialIcons name="lock-outline" size={64} color="gray" />

            <Text className="mb-8 mt-5 text-xl font-semibold text-gray-700">
              Please enter your pin code
            </Text>

            <View className="flex-row justify-between p-5">
              {pin.map((p, index) => (
                <TextInput
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={p}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    width: 40,
                    height: 50,
                    textAlign: "center",
                    fontSize: 24,
                    marginHorizontal: 5,
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PinCodeScreen;
