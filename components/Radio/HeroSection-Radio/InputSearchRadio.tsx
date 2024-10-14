import React from "react";
import { TextInput, View } from "react-native";
// State Mangemant
import { InitialMaxViewItems, kewordSearchState } from "@/states/RadioState";
import { useRecoilState } from "recoil";
import { width } from "../Radios";

export default function InputSearchRadio() {
  const [kewordSearch, setKewordSearch] = useRecoilState(kewordSearchState);

  const [, setMaxViewItems] = useRecoilState(InitialMaxViewItems);
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
        className={`text-2xl w-full h-full font-semibold text-center`}
        style={{ color: "black" }}
        value={kewordSearch === "NOT_USE" ? "" : kewordSearch}
        onChangeText={(text) => {
          // Handle search input change
          setMaxViewItems(width <= 400 ? 10 : 50);
          setKewordSearch(text);
          // You can add your search logic here
        }}
      />
    </View>
  );
}
