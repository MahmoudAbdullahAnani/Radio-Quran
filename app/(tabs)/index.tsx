import RadioItemWeb from "@/components/Radio/Items/RadioItemWeb";

import Radios from "@/components/Radio/Radios";
import { audioURIPlayState, changeAudio, IsStarted } from "@/states/RadioState";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useRecoilState } from "recoil";

export default function HomeScreen() {
  const [isStarted] = useRecoilState(IsStarted);

  const [audioURIPlay] = useRecoilState(audioURIPlayState);
  const [, setSoundLoading] = useRecoilState<boolean>(changeAudio);
  function setLoadingStart() {
    setSoundLoading(true);
  }
  function setLoadingEnd() {
    setSoundLoading(false);
  }
  return (
    <>
      {/* <ParallaxScrollView
        headerImage={<HeroSectionRadio />}
        headerBackgroundColor={{
          dark: "#000",
          light: "#f2f2f2",
       
          }}
      >
      </ParallaxScrollView> */}
      <SafeAreaView
        style={{
          flex: 1,
          
          // position: "absolute",
          // top: 250,
          // left: 0,
          // right: 0,
          // bottom: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          <Radios />
        </View>
      </SafeAreaView>

      <View style={{ display: "none" }}>
        {isStarted && audioURIPlay.url !== "NOT_USE" ? (
          <RadioItemWeb
            {...{
              styles,
              url: audioURIPlay.url,
              setLoadingStart,
              setLoadingEnd,
            }}
          />
        ) : (
          <></>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
