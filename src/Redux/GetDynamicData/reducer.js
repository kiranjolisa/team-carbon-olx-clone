import { GET_DYNAMIC_DATA_FAILURE, GET_DYNAMIC_DATA_REQUEST, GET_DYNAMIC_DATA_SUCCESS } from "./actionTypes"

const initState = {
    dynamicData : []
}

export const reducer = ( state = initState, { type, payload }) => {
    switch(type){
        case GET_DYNAMIC_DATA_REQUEST:
            return {
                ...state
            }

        case GET_DYNAMIC_DATA_SUCCESS:
            return {
                ...state,
                dynamicData : [ ...payload ]
            }

        case GET_DYNAMIC_DATA_FAILURE:
            return {
                ...state
            }

        default:
            return state;

    }
}