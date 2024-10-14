import { width } from "@/components/Radio/Radios";
import { Radio } from "@/Interfaces/Radio";
import { atom } from "recoil";

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
export const toggleSoundStateData = atom({
  key: "toggleSoundStateData",
  default: false as boolean,
});
export const InitialMaxViewItems = atom({
  key: "InitialMaxViewItems",
  default: width <= 400 ? 10 : 50,
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
