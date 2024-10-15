import { Pressable, StyleSheet, View } from "react-native";

// Test Components
import { useRecoilState } from "recoil";
import { audioURIPlayState, changeAudio } from "@/states/RadioState";
import { WebView } from "react-native-webview";
import { useEffect } from "react";

export default function RadioItemWeb({
  styles,
  url,
  setLoadingStart,
  setLoadingEnd,
}: any) {
  return (
    <>
      <WebView
        style={styles.container}
        onLoadStart={() => setLoadingStart()}
        onLoadEnd={() => setLoadingEnd()}
        source={{ uri: url }}
      />
    </>
  );
}
