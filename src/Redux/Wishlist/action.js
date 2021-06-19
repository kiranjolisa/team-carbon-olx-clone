import axios from "axios"

import { ADD_WISHLIST_FAILURE, ADD_WISHLIST_REQUEST, ADD_WISHLIST_SUCCESS } from "./actionTypes"

export const addWishlistRequest = () => {
    return {
        type: ADD_WISHLIST_REQUEST
    }
}
export const addWishlistSuccess = (payload) => {
    return {
        type: ADD_WISHLIST_SUCCESS,
        payload
    }
}
export const addWishlistFailure = () => {
    return {
        type: ADD_WISHLIST_FAILURE
    }
}
export const addWhishlist = (payload) => (dispatch) => {
    dispatch(addWishlistRequest())
    axios.get(`https://json-server-olx.herokuapp.com/${payload.category}?id=${payload.id}`)
        .then(res => {
            dispatch(addWishlistSuccess(res.data[0]))
        })
        .catch(err => {
            dispatch(addWishlistFailure())
        })
}