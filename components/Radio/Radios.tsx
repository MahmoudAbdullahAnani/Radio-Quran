import { Dimensions, FlatList, useColorScheme, View } from "react-native";
// Fake Data
import RadioFakeData from "../../lip/FakeData.json";
import { Radio, RadiosResponse } from "@/Interfaces/Radio";
import { useEffect, useState } from "react";
import { getAllRadioData } from "@/lip/FetchData";
import RadioItem from "@/components/Radio/Items/RadioItem";
import {
  currentPageState,
  InitialMaxViewItems,
  kewordSearchState,
  MaxLengthOfDataState,
} from "@/states/RadioState";
import { useRecoilState } from "recoil";
import HeroSectionRadio from "./HeroSection-Radio/HeroSectionRadio";
import FooterListRadio from "./FooterListRadio";

const RadioData: RadiosResponse = RadioFakeData;

// Device
export const { width, height } = Dimensions.get("window");
export default function Radios() {
  const colorScheme = useColorScheme();
  // State Management
  const [kewordSearch] = useRecoilState(kewordSearchState);

  // Data
  const [, setMaxPageView] = useRecoilState(InitialMaxViewItems);
  const [currentPage] = useRecoilState(currentPageState);

  const [, setMaxLengthOfData] = useRecoilState(MaxLengthOfDataState);

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
    .slice(0, width > 400 ? currentPage + 1 : currentPage);

  useEffect(() => {
    const fetchData = async () => {
      const data: RadiosResponse = await getAllRadioData();
      setRadioDat(data);
      setMaxPageView(Math.ceil(data.radios.length / (width > 400 ? 10 : 20)));
      setMaxLengthOfData(data.radios.length);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorScheme === "light" ? "#f2f2f2" : "#000",
      }}
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
          ListHeaderComponent={<HeroSectionRadio />}
          ListFooterComponent={<FooterListRadio />}
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
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 20,
          }}
          ListHeaderComponent={<HeroSectionRadio />}
          ListFooterComponent={<FooterListRadio />}
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
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: 20,
          }}
          ListHeaderComponent={<HeroSectionRadio />}
          ListFooterComponent={<FooterListRadio />}
        />
      )}
    </View>
  );
}
