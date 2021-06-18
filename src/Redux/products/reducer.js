import { GET_CARS_FAILURE, GET_CARS_REQUEST, GET_CARS_SUCCESS, GET_COMMERICAL_FAILURE, GET_COMMERICAL_REQUEST, GET_COMMERICAL_SUCCESS, GET_FRESH_RECOMMENDATION_FAILURE, GET_FRESH_RECOMMENDATION_REQUEST, GET_FRESH_RECOMMENDATION_SUCCESS, GET_MOBILE_FAILURE, GET_MOBILE_REQUEST, GET_MOBILE_SUCCESS, GET_MOTORCYCLES_FAILURE, GET_MOTORCYCLES_REQUEST, GET_MOTORCYCLES_SUCCESS, GET_RENT_HOUSE_FAILURE, GET_RENT_HOUSE_REQUEST, GET_RENT_HOUSE_SUCCESS, GET_SALES_HOUSE_FAILURE, GET_SALES_HOUSE_REQUEST, GET_SALES_HOUSE_SUCCESS, GET_SCOOTERS_FAILURE, GET_SCOOTERS_REQUEST, GET_SCOOTERS_SUCCESS, TOGGLE_AUTH } from "./actionType"

const initState = {
    products: [],
    isLoading: false,
    isError: false,
    isAuth: false
}

export const getDataReducer = (state = initState, {type, payload}  ) => {
    switch(type) {

        //  CARS 

        case GET_CARS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case  GET_CARS_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_CARS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // MOTORCYCLES
        case GET_MOTORCYCLES_REQUEST : {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_MOTORCYCLES_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_MOTORCYCLES_FAILURE : {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // MOBILES

        case GET_MOBILE_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case  GET_MOBILE_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_MOBILE_FAILURE : {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // SALES HOUSE
        
        case GET_SALES_HOUSE_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_SALES_HOUSE_SUCCESS  : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_SALES_HOUSE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // SCOOTERS

        case GET_SCOOTERS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case  GET_SCOOTERS_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_SCOOTERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // COMMERICAL

        case GET_COMMERICAL_REQUEST : {
            return {
                ...state,
                isLoading: true
            }
        }
        case  GET_COMMERICAL_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_COMMERICAL_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // RENT HOUSE
        case GET_RENT_HOUSE_REQUEST : {
            return {
                ...state,
                isLoading: true
            }
        }
        case  GET_RENT_HOUSE_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_RENT_HOUSE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        // FRESH RECOMMEDATION

        case GET_FRESH_RECOMMENDATION_REQUEST : {
            return {
                ...state,
                isLoading: true
            }
        }
        case  GET_FRESH_RECOMMENDATION_SUCCESS : {
            return {
                ...state,
                isLoading: false,
                products: payload
            }
        }
        case GET_FRESH_RECOMMENDATION_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case TOGGLE_AUTH: {
            return {
                ...state,
                isAuth: true
            }
        }

        default : {
            return state
        }
    }
    
}