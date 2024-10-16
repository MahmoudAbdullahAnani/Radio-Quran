import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { width } from "@/components/Radio/Radios";
import { useState } from "react";
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
      ></ParallaxScrollView>
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
