import axios from "axios";

import { POST_AD_FAILURE, POST_AD_REQUEST, POST_AD_SUCCESS, UNSET_SUCCESS_STATUS } from "./actionTypes";

export const postAd = (payload) => (dispatch) => {
    console.log(payload);
    axios.post('https://json-mock-server.vercel.app/postDataToCart', payload)
        .then(res => {
            dispatch(postAdSuccess(payload))
        })
        .catch(err => {
            console.log(err)
            dispatch(postAdFailure())
        })
}
export const postAdRequest = () => ({ type: POST_AD_REQUEST })
export const postAdSuccess = (payload) => ({ type: POST_AD_SUCCESS, payload })
export const postAdFailure = () => ({ type: POST_AD_FAILURE })
export const unsetSuccessStatus = () => ({ type: UNSET_SUCCESS_STATUS })