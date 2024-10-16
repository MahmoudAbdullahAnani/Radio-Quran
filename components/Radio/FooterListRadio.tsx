import {
  currentPageState,
  InitialMaxViewItems,
  MaxLengthOfDataState,
} from "@/states/RadioState";
import React, { useState } from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { useRecoilState } from "recoil";

export default function FooterListRadio() {
  const colorScheme = useColorScheme();
  const colorText = colorScheme === "dark" ? "#fff" : "#000";

  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [maxPageView, setMaxPageView] = useRecoilState(InitialMaxViewItems);
  const [maxLengthOfData] = useRecoilState(MaxLengthOfDataState);

  return (
    <View style={{ marginVertical: 10 }}>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: colorScheme === "dark" ? "#457169" : "#6caba0",
          width: "100%",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
        onPress={() => {
          currentPage >= maxLengthOfData
            ? setCurrentPage(currentPage - 5)
            : setCurrentPage(currentPage + 5);
        }}
      >
        <Text
          style={{
            color: colorText,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {currentPage >= maxLengthOfData ? "عرض اقل" : "عرض المزيد"}
        </Text>
      </Pressable>
    </View>
  );
}
