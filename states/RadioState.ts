import { Radio } from "@/Interfaces/Radio";
import { Dimensions } from "react-native";
import { atom } from "recoil";

const { width } = Dimensions.get("screen");
export const kewordSearchState = atom({
  key: "kewordSearchState",
  default: "NOT_USE",
});
export const SoundState = atom({
  key: "SoundState",
  default: null as any,
});
export const changeAudio = atom({
  key: "changeAudio",
  default: false as boolean,
});
export const currentPageState = atom({
  key: "currentPageState",
  default: width > 400 ? 30 : 10,
});
export const toggleSoundStateData = atom({
  key: "toggleSoundStateData",
  default: false as boolean,
});
export const InitialMaxViewItems = atom({
  key: "InitialMaxViewItems",
  default: 0,
});
export const MaxLengthOfDataState = atom({
  key: "MaxLengthOfDataState",
  default: 0,
});
export const IsStarted = atom({
  key: "IsStarted",
  default: false as boolean,
});
export const wishlistDataItemsState = atom({
  key: "wishlistDataItemsState",
  default: [] as Radio[],
});
export const audioURIPlayState = atom({
  key: "audioURIPlayState",
  default: {
    name: "NOT_USE", // fake Data: إذاعة إبراهيم الأخضر || NOT_USE
    url: "NOT_USE", // fake Data: https://backup.qurango.net/radio/ibrahim_alakdar || NOT_USE
  } as Radio,
});
