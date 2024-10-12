import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Pressable, Text, Image } from "react-native";
import { Audio } from "expo-av";

// Image
import { PlayAutioSVG } from "./../../../assets/Audio/AutioSVG";
export default function AudioPlayer(props: { uri: string; name: string }) {
  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log(`press ${props.uri}`);

    const { sound } = await Audio.Sound.createAsync({
      uri: props.uri,
    });
    // @ts-ignore
    setSound(sound);
    await sound.playAsync(); // Play the sound
  };

  // Cleanup the sound on component unmount
  useEffect(() => {
    return sound
      ? () => {
          // @ts-ignore
          sound.unloadAsync(); // Unload sound to free up resources
        }
      : undefined;
  }, [sound]);

  return (
    <Pressable style={{ flex: 1 }} onPress={playSound}>
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
          {props.name.length > 60 ? `${props.name.slice(20)}..` : props.name}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
