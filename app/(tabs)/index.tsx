import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import RadioItemWeb from "@/components/Radio/Items/RadioItemWeb";

import Radios from "@/components/Radio/Radios";
import { getAllRadioData } from "@/lip/FetchData";
import { IsStarted } from "@/states/RadioState";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useRecoilState } from "recoil";

export default function HomeScreen() {
  const [isStarted] = useRecoilState(IsStarted);

  return (
    <>
      <ParallaxScrollView
        headerImage={<HeroSectionRadio />}
        headerBackgroundColor={{
          dark: "#000",
          light: "#f2f2f2",
        }}
      >
      </ParallaxScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          position: "absolute",
          top: 250,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <Radios />
        </View>
      </SafeAreaView>

      <View style={{ display: "none" }}>{isStarted && <RadioItemWeb />}</View>
    </>
  );
}
