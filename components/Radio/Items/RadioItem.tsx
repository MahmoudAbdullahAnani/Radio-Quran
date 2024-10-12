import { Radio } from "@/Interfaces/Radio";
import React from "react";
import { Text, useColorScheme, View } from "react-native";
import AudioPlayer from "./AudioPlayer";

export default function RadioItem(radio: Radio) {
  const colorScheme = useColorScheme();
  const colorText = colorScheme === "dark" ? "text-[#fff]" : "text-[#000]";
  return (
    // <View
    //   className={`flex-1`}
    // >
      <AudioPlayer uri={radio.url} name={radio.name} />
    // </View>
  );
}
