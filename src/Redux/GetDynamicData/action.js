import axios from "axios"

import { GET_DYNAMIC_DATA_FAILURE, GET_DYNAMIC_DATA_REQUEST, GET_DYNAMIC_DATA_SUCCESS } from "./actionTypes"

export const getDynamicData = (payload) => (dispatch) => {
    dispatch(getDynamicDataRequest())
    axios.get(`https://json-mock-server.vercel.app/${payload.category}?id=${payload.id}`)
        .then(res => {
            dispatch(getDynamicDataSuccess(res.data));
        })
        .catch(err => {
            console.log(err)
            dispatch(getDynamicDataFailure());
        })
}

export const getDynamicDataRequest = () => ({ type: GET_DYNAMIC_DATA_REQUEST })
export const getDynamicDataSuccess = (payload) => ({ type: GET_DYNAMIC_DATA_SUCCESS, payload })
export const getDynamicDataFailure = () => ({ type: GET_DYNAMIC_DATA_FAILURE })