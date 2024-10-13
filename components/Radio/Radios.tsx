import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeroSectionRadio from "@/components/Radio/HeroSection-Radio/HeroSectionRadio";
import { Dimensions, FlatList, View } from "react-native";

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
  // State Management
  const [kewordSearch, setKewordSearch] = useRecoilState(kewordSearchState);

  // Data
  const [radioDat, setRadioDat] = useState(RadioData);
  // Filter Data
  const filteredRadios = radioDat.radios.filter((radio) =>
    kewordSearch === "NOT_USE"
      ? radioDat
      : kewordSearch === ""
      ? radioDat
      : radio.name.toLowerCase().includes(kewordSearch.toLowerCase())
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRadioData();
      setRadioDat(data as RadiosResponse);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <View className={`flex-1`}>
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
    </View>
  );
}
