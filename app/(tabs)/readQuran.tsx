import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import {
  DimensionValue,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Image } from "expo-image";
import { width } from "@/components/Radio/Radios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigationState } from "@react-navigation/native";
import RadioItemWeb from "@/components/Radio/Items/RadioItemWeb";

export default function QuranScreen() {
  const colorScheme = useColorScheme();
  const [, setFullQuran] = useState(false);
  function toggleFullQuran() {
    setFullQuran((prev) => !prev);
  }

  const setLoadingStart = () => {};
  const setLoadingEnd = () => {};
  return (
    <>
      <ParallaxScrollView
        headerImage={<HeroSectionRadio />}
        headerBackgroundColor={{
          dark: "#000",
          light: "#f2f2f2",
        }}
      >
        {/* <Text style={{ color: "red" }}>hello</Text> */}
      </ParallaxScrollView>
      <Pressable
        style={[
          styles.container,
          {
            backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
            height: "75%",
          },
        ]}
        onPress={toggleFullQuran}
      >
        <RadioItemWeb
          {...{
            styles,
            url: getRandomNumber().urlImage,
            setLoadingStart,
            setLoadingEnd,
          }}
        />

        {/* <Image
          style={styles.image}
          source={getRandomNumber().urlImage}
          // placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        /> */}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    flex: 1,
    height: "100%",
    width: width,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
});
export function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 604) + 1;

  const formattedNumber = String(randomNumber).padStart(3, "0");

  return {
    formattedNumber,
    urlImage: `https://www.mp3quran.net/api/quran_pages_svg/${formattedNumber}.svg`,
  };
}
