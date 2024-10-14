import { StyleSheet, View } from "react-native";

// Test Components
import { useRecoilState } from "recoil";
import { audioURIPlayState, changeAudio } from "@/states/RadioState";
import { WebView } from "react-native-webview";
import { useEffect } from "react";

export default function RadioItemWeb() {
  const [audioURIPlay] = useRecoilState(audioURIPlayState);
  const [, setSoundLoading] = useRecoilState<boolean>(changeAudio);

  return (
    <>
      {audioURIPlay.url !== "NOT_USE" && (
        <WebView
          style={styles.container}
          onLoadStart={() => setSoundLoading(true)}
          onLoadEnd={() => setSoundLoading(false)}
          source={{ uri: audioURIPlay.url }}
        />
      )}
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
