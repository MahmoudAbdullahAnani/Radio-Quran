import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import RadioItem from "@/components/Radio/Items/RadioItem";
import Radios from "@/components/Radio/Radios";
import { Radio } from "@/Interfaces/Radio";
import { getAllRadioData } from "@/lip/FetchData";
import { wishlistDataItemsState } from "@/states/RadioState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useRecoilState } from "recoil";

export default function wishlistScreen() {
  const [wishlistDataItems, setWishlistDataItemsState] = useRecoilState(
    wishlistDataItemsState
  );
  // //console.log({ wishlistDataItems });

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <ParallaxScrollView
        headerImage={<HeroSectionRadio />}
        headerBackgroundColor={{
          dark: "#000",
          light: "#f2f2f2",
        }}
      >
        <FlatList
          data={wishlistDataItems}
          renderItem={({ item, index }: { item: Radio; index: number }) => (
            <RadioItem radio={item} index={index} />
          )}
          keyExtractor={(item: Radio) =>
            `${Math.random()}-${item.id.toString()}`
          }
        />
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
