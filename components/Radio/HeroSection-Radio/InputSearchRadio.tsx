import React from "react";
import { TextInput, View } from "react-native";
// State Mangemant
import { kewordSearchState } from "@/states/RadioState";
import { useRecoilState } from "recoil";

export default function InputSearchRadio() {
  const [kewordSearch, setKewordSearch] = useRecoilState(kewordSearchState);

  return (
    <View
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: "80%",
        maxWidth: 300,
        borderRadius: 25,
        padding: 10,
        top: "50%",
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -25 }],
      }}
      className={`absolute`}
    >
      <TextInput
        placeholder="محمد صديق المنشاوي"
        placeholderTextColor="#888"
        className={`text-2xl font-bold  w-full h-full font-semibold text-center`}
        style={{ color: "black" }}
        onChangeText={(text) => {
          // Handle search input change
          setKewordSearch(text);
          // You can add your search logic here
        }}
      />
    </View>
  );
}
