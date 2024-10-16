import { Radio } from "@/Interfaces/Radio";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useRecoilState } from "recoil";
import {
  audioURIPlayState,
  changeAudio,
  IsStarted,
  SoundState,
  toggleSoundStateData,
} from "@/states/RadioState";
const { width } = Dimensions.get("screen");
import AudioBar from "@/assets/Audio/AudioBar";
import WishlistItem from "./WishlistItem";

// Localization
import { getLocales } from "expo-localization";

export default function RadioItem({
  radio,
  index,
}: {
  radio: Radio;
  index: number;
}) {
  const deviceLanguage = getLocales()[0].languageCode;
  console.log(deviceLanguage);

  const [soundLoading] = useRecoilState<boolean>(changeAudio);

  // index of digets
  const IndexOfDigets = `${index + 1}`.split("").length;
  //
  const colorScheme = useColorScheme();
  // handle sound mojawwad
  const handel_mojawwad = radio.url.split("_").includes("mojawwad");
  const name = handel_mojawwad ? `${radio.name} مجود` : `${radio.name}`;

  const [sound, setSound] = useRecoilState(SoundState);
  const [toggleSoundState, setToggleSound] =
    useRecoilState(toggleSoundStateData);

  const [AudioURIPlay, setAudioURIPlay] = useRecoilState(audioURIPlayState);
  const [, setIsStarted] = useRecoilState(IsStarted);

  const toggleSound = async () => {
    // @ts-ignore
    sound !== null && (await sound.stopAsync());
    setToggleSound(false);
    setIsStarted(true);
    setAudioURIPlay({ ...radio, name });
  };
  // Hover
  const [hoverItem, setHoverItem] = useState(false);

  const toggleHover = function () {
    setHoverItem((prev) => !prev);
  };

  return (
    <>
      <Pressable
        style={{
          backgroundColor: colorScheme === "dark" ? "#f3f0f0" : "#ffffff",
          width: "100%",
          height: width <= 800 ? 60 : 80,
          borderRadius: 10,
          marginVertical: 10,
          display: "flex",
          flex: 1,
          flexDirection: deviceLanguage === "en" ? "row" : "row-reverse",
          alignItems: "center",
          paddingHorizontal: 5,
          justifyContent: "space-between",
        }}
        onPress={toggleSound}
        onPressIn={toggleHover}
        onPressOut={toggleHover}
      >
        <WishlistItem {...{ radio, index }} />
        <View
          style={{
            display: "flex",
            flexDirection: deviceLanguage === "en" ? "row" : "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: width > 400 ? 20 : 18,
              fontWeight: "bold",
              color: hoverItem ? "#b7ecff" : "#000",
            }}
          >
            {radio.name.length > 40 ? `${radio.name.slice(0, 30)}..` : name}
          </Text>
          <View
            style={{
              flexDirection: deviceLanguage === "en" ? "row" : "row-reverse",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: width > 400 ? 55 : 40,
                height: width > 400 ? 55 : 40,
              }}
              source={require(`./../../../assets/Audio/star.jpg`)}
            />
            {name === AudioURIPlay.name ? (
              <View
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: [
                    {
                      translateX: -10,
                    },
                  ],
                }}
              >
                {soundLoading ? (
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require(`./../../../assets/loading.gif`)}
                  />
                ) : (
                  <AudioBar />
                )}
              </View>
            ) : (
              <Text
                style={{
                  position: "absolute",
                  left: "50%",
                  textAlign: "center",
                  color: hoverItem ? "#b7ecff" : "#000",
                  transform: [
                    {
                      translateX:
                        IndexOfDigets === 1
                          ? -3
                          : IndexOfDigets === 2
                          ? -6
                          : -12,
                    },
                  ],
                }}
              >
                {index + 1}
              </Text>
            )}
          </View>
        </View>
      </Pressable>
    </>
  );
}
