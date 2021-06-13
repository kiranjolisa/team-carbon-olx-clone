import axios from "axios";

import { POST_AD_FAILURE, POST_AD_REQUEST, POST_AD_SUCCESS, UNSET_SUCCESS_STATUS } from "./actionTypes";

export const postAd = (payload) => (dispatch) => {
        console.log(payload);
        axios.post('https://json-server-olx.herokuapp.com/postAd', payload)
        .then(res => {
            dispatch(postAdSuccess())
        })
        .catch(err => {
            console.log(err)
            dispatch(postAdFailure())
        })
}
export const postAdRequest = () => ({type : POST_AD_REQUEST})
export const postAdSuccess = () => ({type : POST_AD_SUCCESS})
export const postAdFailure = () => ({type : POST_AD_FAILURE})
export const unsetSuccessStatus = () => ({type : UNSET_SUCCESS_STATUS})