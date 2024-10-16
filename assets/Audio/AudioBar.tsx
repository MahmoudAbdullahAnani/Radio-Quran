import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

const MusicBar: React.FC = () => {
  const bar1Height = useRef<Animated.Value>(new Animated.Value(10)).current;
  const bar2Height = useRef<Animated.Value>(new Animated.Value(10)).current;
  const bar3Height = useRef<Animated.Value>(new Animated.Value(10)).current;
  const bar4Height = useRef<Animated.Value>(new Animated.Value(10)).current;

  useEffect(() => {
    const animateBar = (
      bar: Animated.Value,
      minHeight: number,
      maxHeight: number,
      delay: number
    ) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, {
            toValue: maxHeight,
            duration: 300,
            useNativeDriver: false,
            delay,
          }),
          Animated.timing(bar, {
            toValue: minHeight,
            duration: 300,
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    animateBar(bar1Height, 10, 25, 0);
    animateBar(bar2Height, 10, 25, 150);
    animateBar(bar3Height, 10, 25, 300);
    animateBar(bar4Height, 10, 25, 450);
  }, [bar1Height, bar2Height, bar3Height, bar4Height]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.bar, { height: bar1Height, backgroundColor: "#ff7a1d" }]}
      />
      <Animated.View
        style={[styles.bar, { height: bar2Height, backgroundColor: "#e77627" }]}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 22,
    height: 22,
  },
  bar: {
    width: 5,
    backgroundColor: "#000",
    marginHorizontal: 2,
  },
});

export default MusicBar;
