import { Text, TouchableOpacity, View } from "react-native";

const AppBarTrip = ({ tab, setTab }: { tab: number; setTab: any }) => {
  return (
    <View className="mt-2 flex-row items-center rounded-xl bg-[#D9D9D9]">
      <TouchableOpacity
        className={`w-5/12 py-3 ${tab === 1 ? "rounded-xl bg-primaryColor" : ""}`}
        onPress={() => {
          if (tab !== 1) {
            setTab(1);
          }
        }}
        disabled={tab === 1}
      >
        <Text
          className={`text-center font-InterMedium text-lg text-white ${tab === 1 ? "text-white" : "text-black"}`}
        >
          Ongoing Trips
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`w-5/12 py-3 ${tab === 2 ? "rounded-xl bg-primaryColor" : ""}`}
        onPress={() => {
          if (tab !== 2) {
            setTab(2);
          }
        }}
        disabled={tab === 2}
      >
        <Text
          className={`text-center font-InterMedium text-lg text-black ${tab === 2 ? "text-white" : "text-black"}`}
        >
          Past Trips
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppBarTrip;
