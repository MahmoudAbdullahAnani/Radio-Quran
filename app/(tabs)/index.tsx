import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import { Dimensions, FlatList, View } from "react-native";

import Radios from "@/components/Radio/Radios";
import AudioPlayer from "@/components/Radio/Items/AudioPlayer";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={<HeroSectionRadio />}
      headerBackgroundColor={{
        dark: "#000",
        light: "#fff",
      }}
    >
      <Radios />
      {/* <AudioPlayer /> */}
    </ParallaxScrollView>
  );
}
