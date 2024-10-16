import React from "react";
import { Dimensions, Text, TextInput, View } from "react-native";
// State Mangemant
import { InitialMaxViewItems, kewordSearchState } from "@/states/RadioState";
import { useRecoilState } from "recoil";
import { useNavigationState } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

export default function InputSearchRadio() {
  const [kewordSearch, setKewordSearch] = useRecoilState(kewordSearchState);

  const [, setMaxViewItems] = useRecoilState(InitialMaxViewItems);
  const currentTabIndex = useNavigationState((state) => state.index);

  const currentTabName = useNavigationState(
    (state) => state.routes[currentTabIndex].name
  );

  return (
    <View
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        width: "80%",
        maxWidth: 300,
        borderRadius: 25,
        padding: 10,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -25 }],
      }}
    >
      {["readQuran"].includes(currentTabName) ? (
        <View style={{ width: "100%", height: "100%" }}>
          <Text
            style={{ fontSize: 22, textAlign: "center", fontWeight: "bold" }}
          >
            اقرأ علي الاقل كل يوم صفحة
          </Text>
        </View>
      ) : (
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
          }}
        />
      )}
    </View>
  );
}
