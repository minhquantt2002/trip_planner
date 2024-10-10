import { Modal, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateTripModal = () => {
  return (
    <Modal visible={true} animationType="slide">
      <SafeAreaView className="bg-white">
        <ScrollView>
          <View className="flex min-h-screen w-full flex-col items-center">
            <Text className="text-xl text-black">Create Your Trip</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateTripModal;
