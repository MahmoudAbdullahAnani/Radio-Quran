import { WebView } from "react-native-webview";

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
