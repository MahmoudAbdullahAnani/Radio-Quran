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
export const toggleSoundStateData = atom({
  key: "toggleSoundStateData",
  default: false as boolean,
});
export const audioURIPlayState = atom({
  key: "audioURIPlayState",
  default: {
    name: "NOT_USE", // fake Data: إذاعة إبراهيم الأخضر || NOT_USE
    url: "NOT_USE", // fake Data: https://backup.qurango.net/radio/ibrahim_alakdar || NOT_USE
  } as Radio,
});
