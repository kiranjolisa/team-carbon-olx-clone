import { ADD_WISHLIST_FAILURE, ADD_WISHLIST_REQUEST, ADD_WISHLIST_SUCCESS } from "./actionType"

const inistState = {
    wishlist : []
}

export const wishListReducer = (state = inistState, {type, payload}) => {
    switch(type) {
        case ADD_WISHLIST_REQUEST: {
            return {
                ...state
            }
        }

        case ADD_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishlist: payload
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