import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import InputSearchRadio from "./InputSearchRadio";

export default function HeroSectionRadio() {
  // const colorScheme = useColorScheme();

  // const colorText = colorScheme === "dark" ? "text-[#fff]" : "text-[#000]";

  const images = [
    require("./../../../assets/HeroSection/1.jpg"),
    require("./../../../assets/HeroSection/2.jpg"),
    require("./../../../assets/HeroSection/3.jpg"),
    require("./../../../assets/HeroSection/4.jpg"),
    require("./../../../assets/HeroSection/5.jpg"),
  ];

  const [randomImage, setRandomImage] = useState<any>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);
  return (
    // w-full h-full
    <View className={``}>
      {randomImage && (
        <Image
          source={randomImage}
          style={{
            width: "100%",
            height: 250,
            resizeMode: "cover",
          }}
        />
      )}
      <InputSearchRadio />
    </View>
  );
}
