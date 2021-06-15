import { SWITCH_TO_ENGLISH, SWITCH_TO_HINDI } from "./actionTypes";

export const switchToHindi = () => ({ type: SWITCH_TO_HINDI, payload: "hi" });
export const switchToEnglish = () => ({ type: SWITCH_TO_ENGLISH,payload: "en" });