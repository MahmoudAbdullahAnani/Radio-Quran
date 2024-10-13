import { Radio } from "@/Interfaces/Radio";
import React from "react";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";
import AudioPlayer from "./AudioPlayer";
import { useRecoilState } from "recoil";
import {
  audioURIPlayState,
  SoundState,
  toggleSoundStateData,
} from "@/states/RadioState";

export default function RadioItem(radio: Radio) {
  const colorScheme = useColorScheme();
  const colorText = colorScheme === "dark" ? "text-[#fff]" : "text-[#000]";
  // handle sound mojawwad
  const handel_mojawwad = radio.url.split("_").includes("mojawwad");
  const name = handel_mojawwad ? `${radio.name} مجود` : `${radio.name}`;
  // console.log({handel_mojawwad});

  const [sound, setSound] = useRecoilState(SoundState);
  const [toggleSoundState, setToggleSound] =
    useRecoilState(toggleSoundStateData);

  const [AudioURIPlay, setAudioURIPlay] = useRecoilState(audioURIPlayState);

  const toggleSound = async () => {
    // @ts-ignore
    sound !== null && (await sound.stopAsync());
    setToggleSound(false);
    setAudioURIPlay({ ...radio, name });

    console.log(AudioURIPlay);
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={toggleSound}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 50,
          borderRadius: 10,
          marginVertical: 10,
          display: "flex",
          // flex:1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
          justifyContent: "space-between",
        }}
        className={`rounded-lg`}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require(`./../../../assets/Audio/download.jpg`)}
        />
        <Text style={{ textAlign: "center" }}>
          {radio.name.length > 60 ? `${radio.name.slice(20)}..` : name}
        </Text>
      </View>
    </Pressable>
  );
}
