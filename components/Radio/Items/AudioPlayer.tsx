import React, { useEffect } from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { Audio } from "expo-av";
import { useRecoilState } from "recoil";
import {
  audioURIPlayState,
  changeAudio,
  SoundState,
  toggleSoundStateData,
} from "@/states/RadioState";
import { getLocales } from "expo-localization";

export default function AudioPlayer() {
  const deviceLanguage = getLocales()[0].languageCode;

  // State Management
  const [audioURIPlay] = useRecoilState(audioURIPlayState);
  const [sound, setSound] = useRecoilState(SoundState);
  const [soundLoading, setSoundLoading] = useRecoilState<boolean>(changeAudio);
  const [toggleSoundState, setToggleSound] =
    useRecoilState(toggleSoundStateData);

  const getSound = async () => {
    if (audioURIPlay.url !== "NOT_USE" && audioURIPlay.url) {
      setSoundLoading(true);
      try {
        const { sound } = await Audio.Sound.createAsync({
          uri: audioURIPlay.url,
        });
        setSound(sound);
      } catch (error) {
        console.error("Error loading sound:", error);
      } finally {
        setSoundLoading(false);
      }
    }
  };

  const toggleSound = async () => {
    if (sound) {
      try {
        setSoundLoading(true);
        toggleSoundState ? await sound.stopAsync() : await sound.playAsync();
        setToggleSound(!toggleSoundState);
        setSoundLoading(false);
      } catch (error) {
        console.error("Error toggling sound:", error);
      }
    }
  };

  // Cleanup the sound on component unmount
  useEffect(() => {
    if (audioURIPlay.url !== "NOT_USE") {
      getSound();
    }

    return () => {
      if (sound) {
        sound
          .unloadAsync()
          .then(() => {
            setSound(null);
          })
          .catch((error: string) => {
            console.error("Error unloading sound:", error);
          });
      }
    };
  }, [audioURIPlay.url]); // Added 'sound' to dependencies to track sound updates

  if (audioURIPlay.url === "NOT_USE" || audioURIPlay.name === "NOT_USE") {
    return null;
  }
  return (
    <View style={{ height: 100, backgroundColor: "#e2e8f0 " }}>
      <View
        style={{
          paddingHorizontal: 30,
          width: "100%",
          height: 50,
          display: "flex",
          flexDirection: deviceLanguage === "en" ? "row" : "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={toggleSound}>
          <Image
            style={{ width: 50, height: 50 }}
            source={
              soundLoading
                ? require(`./../../../assets/loading.gif`)
                : toggleSoundState
                ? require(`./../../../assets/Audio/pause.jpg`)
                : require(`./../../../assets/Audio/download.jpg`)
            }
          />
        </Pressable>
        <Text style={styles.textPlayr}>
          {audioURIPlay.name.length > 60
            ? `${audioURIPlay.name.slice(20)}..`
            : audioURIPlay.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  textPlayr: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

