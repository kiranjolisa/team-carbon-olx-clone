import {
    ADD_WISHLIST_FAILURE,
    ADD_WISHLIST_REQUEST,
    ADD_WISHLIST_SUCCESS
} from "./actionTypes"

const inistState = {
    wishlist: []
}

export const reducer = (state = inistState, { type, payload }) => {
    switch (type) {
        case ADD_WISHLIST_REQUEST: {
            return {
                ...state
            }
        }
        case ADD_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishlist: [...state.wishlist, payload]
            }
        }
        case ADD_WISHLIST_FAILURE: {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}