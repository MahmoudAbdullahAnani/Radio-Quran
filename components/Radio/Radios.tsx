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
import { kewordSearchState } from "@/states/RadioState";
import { useRecoilState } from "recoil";

const RadioData: RadiosResponse = RadioFakeData;

// Device
const windowWidth = Dimensions.get("window");

export default function Radios() {
  const colorScheme = useColorScheme();
  const colorText = colorScheme === "dark" ? "#fff" : "#000";
  // State Management
  const [kewordSearch, setKewordSearch] = useRecoilState(kewordSearchState);

  // Data
  const [maxViewItems, setMaxViewItems] = useState(10);
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
      setMaxLengthOfData(data.radios.length);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <View className={`flex-1`} style={{}}>
      {/* 0:400 */}
      {windowWidth.width <= 400 ? (
        <FlatList
          data={filteredRadios}
          renderItem={({ item }: { item: Radio }) => <RadioItem {...item} />}
          keyExtractor={(item: Radio) =>
            `${Math.random()}-${item.id.toString()}`
          }
        />
      ) : // 400:800
      windowWidth.width <= 800 ? (
        <FlatList
          data={filteredRadios}
          renderItem={({ item }: { item: Radio }) => <RadioItem {...item} />}
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
          renderItem={({ item }: { item: Radio }) => <RadioItem {...item} />}
          keyExtractor={(item: Radio) =>
            `${Math.random()}-${item.id.toString()}`
          }
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 20 }}
        />
      )}
      <View>
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
          onPress={() =>
            maxViewItems >= maxLengthOfData
              ? setMaxViewItems(20)
              : setMaxViewItems(maxViewItems + 20)
          }
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
      </View>
    </View>
  );
}
