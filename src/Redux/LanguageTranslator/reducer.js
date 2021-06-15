import { SWITCH_TO_ENGLISH, SWITCH_TO_HINDI } from "./actionTypes";

const initValue = {
  lang: "en"
};
export const reducer = (state = initValue, { type, payload }) => {
  switch (type) {
    case SWITCH_TO_ENGLISH:
      return {
        ...state,
        lang: payload
      };

    case SWITCH_TO_HINDI:
      return {
        ...state,
        lang: payload
      };
    default:
      return state;
  }
};
