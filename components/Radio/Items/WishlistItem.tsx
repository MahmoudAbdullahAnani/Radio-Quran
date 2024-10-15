import { Radio } from "@/Interfaces/Radio";
import { wishlistDataItemsState } from "@/states/RadioState";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import { Ionicons } from "@expo/vector-icons";

export default function WishlistItem({ radio }: { radio: Radio }) {
  const [wishlistDataItems, setWishlistDataItems] = useRecoilState(
    wishlistDataItemsState
  );

  const isInWishlist = useCallback(() => {
    return wishlistDataItems.some((item) => item.url === radio.url);
  }, [wishlistDataItems, radio.url]);

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const storedWishlist = await AsyncStorage.getItem("wishlist");
        if (storedWishlist) {
          const wishlistArray = storedWishlist.split("+");
          setWishlistDataItems((prevItems: any) => {
            const newItems = wishlistArray.map((url) => {
              const existingItem = prevItems.find(
                (item: Radio) => item.url === url
              );
              return existingItem || { url, name: "", id: "", recent_date: "" };
            });
            return [...new Set([...prevItems, ...newItems])];
          });
        }
      } catch (e) {
        console.error("Error reading wishlist from AsyncStorage:", e);
      }
    };

    loadWishlist();
  }, [setWishlistDataItems]);

  const toggleWishlist = useCallback(async () => {
    console.log("press..");
    
    try {
      const newWishlistItems = isInWishlist()
        ? wishlistDataItems.filter((item) => item.url !== radio.url)
        : [...wishlistDataItems, radio];

      setWishlistDataItems(newWishlistItems);

      const wishlistUrls = newWishlistItems.map((item) => item.url).join("+");
      await AsyncStorage.setItem("wishlist", wishlistUrls);
    } catch (e) {
      console.error("Error updating wishlist:", e);
    }
  }, [wishlistDataItems, radio, setWishlistDataItems, isInWishlist]);

  return (
    <View>
      <TouchableOpacity onPress={toggleWishlist}>
        <Ionicons
          name={isInWishlist() ? "heart" : "heart-outline"}
          size={30}
          color="#07f9c0"
        />
      </TouchableOpacity>
    </View>
  );
}
