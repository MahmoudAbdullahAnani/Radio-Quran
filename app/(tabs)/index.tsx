import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import RadioItemWeb from "@/components/Radio/Items/RadioItemWeb";

import Radios from "@/components/Radio/Radios";
import { getAllRadioData } from "@/lip/FetchData";
import { IsStarted } from "@/states/RadioState";
import { View } from "react-native";
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
        {/* <AudioPlayer /> */}
        <Radios functoinGetData={getAllRadioData} />
      </ParallaxScrollView>

      <View style={{ display: "none" }}>{isStarted && <RadioItemWeb />}</View>
    </>
  );
}
