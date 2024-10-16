import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import "../../global.css";
import { Image, Pressable, Text, View } from "react-native";
import { useRecoilState } from "recoil";
import { audioURIPlayState, IsStarted } from "@/states/RadioState";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isStarted, setIsStarted] = useRecoilState(IsStarted);
  const [audioURIPlay] = useRecoilState(audioURIPlayState);

  return (
    <View style={{ flex: 1 }}>
      {audioURIPlay.url !== "NOT_USE" || !audioURIPlay.url ? (
        <Pressable
          style={{
            flex: 1,
            position: "absolute",
            zIndex: 1,
            bottom: 5,
            left: 15,
          }}
          onPress={() => setIsStarted(!isStarted)}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={
              !isStarted
                ? require(`./../../assets/Audio/download.jpg`)
                : require(`./../../assets/Audio/pause.jpg`)
            }
          />
        </Pressable>
      ) : (
        <></>
      )}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="about"
          options={{
            title: "عنا",
            tabBarLabelStyle: {
              fontSize: 22,
              fontWeight: "bold",
              position: "relative",
              left: 30,
            },
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={"#92efd9"}
                style={{ marginLeft: 60 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="readQuran"
          options={{
            title: "قرآن",
            tabBarLabelStyle: {
              fontSize: 22,
              fontWeight: "bold",
              position: "relative",
              left: 0,
            },
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                name={focused ? "reader-sharp" : "reader-outline"}
                color={"#32c5a2"}
                style={{ marginLeft: 0, height: 27 }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="index"
          options={{
            tabBarLabelStyle: {
              fontSize: 22,
              fontWeight: "bold",
            },
            title: "راديو",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "radio" : "radio-outline"}
                color={"#92efd9"}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
