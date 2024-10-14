import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  useColorScheme,
  View,
} from "react-native";
// Images
import { ArrowUpSVG } from "./../../assets/Audio/AutioSVG";
// Fake Data
import RadioFakeData from "../../lip/FakeData.json";
import { Radio, RadiosResponse } from "@/Interfaces/Radio";
import { useEffect, useState } from "react";
import { getAllRadioData } from "@/lip/FetchData";
import RadioItem from "@/components/Radio/Items/RadioItem";
import { InitialMaxViewItems, kewordSearchState } from "@/states/RadioState";
import { useRecoilState } from "recoil";

const RadioData: RadiosResponse = RadioFakeData;

// Device
export const { width, height } = Dimensions.get("window");

export default function Radios() {
  const colorScheme = useColorScheme();
  const colorText = colorScheme === "dark" ? "#fff" : "#000";
  // State Management
  const [kewordSearch, setKewordSearch] = useRecoilState(kewordSearchState);

  // Data
  const [maxViewItems, setMaxViewItems] = useRecoilState(InitialMaxViewItems);
  const [maxLengthOfData, setMaxLengthOfData] = useState(0);

  const [radioDat, setRadioDat] = useState(RadioData);
  // Filter Data
  const filteredRadios = radioDat.radios
    .filter((radio) =>
      kewordSearch === "NOT_USE"
        ? radioDat
        : kewordSearch === ""
        ? radioDat
        : radio.name.toLowerCase().includes(kewordSearch.toLowerCase())
    )
    .slice(0, maxViewItems);

  useEffect(() => {
    const fetchData = async () => {
      const data: RadiosResponse = await getAllRadioData();
      setRadioDat(data);
      // setMaxViewItems(data.radios.length);
      setMaxLengthOfData(data.radios.length);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <View
      className={`flex-1`}
      style={{ backgroundColor: colorScheme === "light" ? "#f2f2f2" : "#000" }}
    >
      {/* 0:400 */}
      {width <= 400 ? (
        <FlatList
          data={filteredRadios}
          renderItem={({ item, index }: { item: Radio; index: number }) => (
            <RadioItem radio={item} index={index} />
          )}
          keyExtractor={(item: Radio) =>
            `${Math.random()}-${item.id.toString()}`
          }
        />
      ) : // 400:800
      width <= 800 ? (
        <FlatList
          data={filteredRadios}
          renderItem={({ item, index }: { item: Radio; index: number }) => (
            <RadioItem radio={item} index={index} />
          )}
          keyExtractor={(item: Radio) =>
            `${Math.random()}-${item.id.toString()}`
          }
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 20 }}
        />
      ) : (
        // 800:
        <FlatList
          data={filteredRadios}
          renderItem={({ item, index }: { item: Radio; index: number }) => (
            <RadioItem radio={item} index={index} />
          )}
          keyExtractor={(item: Radio) =>
            `${Math.random()}-${item.id.toString()}`
          }
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 20 }}
        />
      )}
      <View>
        {/* onst [maxViewItems, setMaxViewItems] = useState(width <= 400 ? 10 : 50);
  const [maxLengthOfData, setMaxLengthOfData] = useState(0); */}
        {maxLengthOfData >= (width <= 400 ? 10 : 50) ? (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? colorScheme === "dark"
                    ? "#457169"
                    : "#6caba0"
                  : colorScheme === "dark"
                  ? "#62a99d"
                  : "#7fddcd",
              },
              {
                flex: 1,
                width: "100%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              },
            ]}
            onPress={() => {
              maxViewItems >= maxLengthOfData
                ? setMaxViewItems(width <= 400 ? 10 : 50)
                : setMaxViewItems(maxViewItems + 10);
              console.log(maxViewItems);
              console.log(maxLengthOfData);
            }}
          >
            <Text
              style={{
                color: colorText,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {maxViewItems >= maxLengthOfData ? "عرض اقل" : "عرض المزيد"}
            </Text>
          </Pressable>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
