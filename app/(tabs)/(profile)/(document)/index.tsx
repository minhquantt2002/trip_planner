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
    <SafeAreaView className="flex-1 justify-center bg-white">
      <View className="items-center">
        <Text className="mb-5 text-xl font-semibold text-gray-700">
          Please enter your pin code
        </Text>
        <View className="flex-row space-x-3">
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
                borderWidth: 1,
                borderColor: "gray",
                width: 50,
                height: 50,
                textAlign: "center",
                fontSize: 24,
                borderRadius: 10,
              }}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PinCodeScreen;
