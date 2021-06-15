import axios from "axios"
import { GET_CARS_FAILURE, 
        GET_CARS_REQUEST, 
        GET_CARS_SUCCESS, 
        GET_COMMERICAL_FAILURE, 
        GET_COMMERICAL_REQUEST, 
        GET_COMMERICAL_SUCCESS, 
        GET_FRESH_RECOMMENDATION_FAILURE, 
        GET_FRESH_RECOMMENDATION_REQUEST, 
        GET_FRESH_RECOMMENDATION_SUCCESS, 
        GET_MOBILE_FAILURE, 
        GET_MOBILE_REQUEST, 
        GET_MOBILE_SUCCESS, 
        GET_MOTORCYCLES_FAILURE, 
        GET_MOTORCYCLES_REQUEST, 
        GET_MOTORCYCLES_SUCCESS, 
        GET_RENT_HOUSE_FAILURE, 
        GET_RENT_HOUSE_REQUEST, 
        GET_RENT_HOUSE_SUCCESS, 
        GET_SALES_HOUSE_FAILURE, 
        GET_SALES_HOUSE_REQUEST, 
        GET_SALES_HOUSE_SUCCESS, 
        GET_SCOOTERS_FAILURE, 
        GET_SCOOTERS_REQUEST, 
        GET_SCOOTERS_SUCCESS, 
        TOGGLE_AUTH} 
from "./actionType"


//  Cars actions 

export const getCarsRequest = () => {
    return {
        type : GET_CARS_REQUEST
    }
}

export const getCarsSuccess = (payload) => {
    return {
        type : GET_CARS_SUCCESS,
        payload
    }
}

export const getCarsFailure = () => {
    return {
        type : GET_CARS_FAILURE
    }
}

export const getCarsData = payload => dispatch => {
    dispatch(getCarsRequest())
    axios.get("https://json-server-olx.herokuapp.com/cars")
    .then(res => {
        dispatch(getCarsSuccess(res.data))
    })
    .catch(err => {
        dispatch(getCarsFailure())
    })
}

// Motorcycles actions

export const getMotorcyclesRequest = () => {
    return {
        type : GET_MOTORCYCLES_REQUEST
    }
}

export const getMotorcyclesSuccess = (payload) => {
    return {
        type : GET_MOTORCYCLES_SUCCESS,
        payload
    }
}

export const getMotorcyclesFailure = () => {
    return {
        type : GET_MOTORCYCLES_FAILURE
    }
}

export const getMotorcyclesData = payload => dispatch => {
    dispatch(getMotorcyclesRequest())
    axios.get("https://json-server-olx.herokuapp.com/motorcycles")
    .then(res => {
        dispatch(getMotorcyclesSuccess(res.data))
    })
    .catch(err => {
        dispatch(getMotorcyclesFailure())
    })
}


// Mobiles actions

export const getMobilesRequest = () => {
    return {
        type : GET_MOBILE_REQUEST
    }
}

export const getMobilesSuccess = (payload) => {
    return {
        type : GET_MOBILE_SUCCESS,
        payload
    }
}

export const getMobilesFailure = () => {
    return {
        type : GET_MOBILE_FAILURE
    }
}

export const getMobilesData = payload => dispatch => {
    dispatch(getMobilesRequest())
    axios.get("https://json-server-olx.herokuapp.com/mobiles")
    .then(res => {
        dispatch(getMobilesSuccess(res.data))
    })
    .catch(err => {
        dispatch(getMobilesFailure())
    })
}


// Sales house action

export const getSalesHouseRequest = () => {
    return {
        type : GET_SALES_HOUSE_REQUEST
    }
}

export const getSalesHouseSuccess = (payload) => {
    return {
        type : GET_SALES_HOUSE_SUCCESS,
        payload
    }
}

export const getSalesHouseFailure = () => {
    return {
        type : GET_SALES_HOUSE_FAILURE
    }
}

export const getSalesHouseData = payload => dispatch => {
    dispatch(getSalesHouseRequest())
    axios.get("https://json-server-olx.herokuapp.com/salesHouse")
    .then(res => {
        dispatch(getSalesHouseSuccess(res.data))
    })
    .catch(err => {
        dispatch(getSalesHouseFailure())
    })
}


// Scooters action

export const getScootersRequest = () => {
    return {
        type : GET_SCOOTERS_REQUEST
    }
}

export const getScootersSuccess = (payload) => {
    return {
        type : GET_SCOOTERS_SUCCESS,
        payload
    }
}

export const getScootersFailure = () => {
    return {
        type : GET_SCOOTERS_FAILURE
    }
}

export const getScootersData = payload => dispatch => {
    dispatch(getScootersRequest())
    axios.get("https://json-server-olx.herokuapp.com/scooters")
    .then(res => {
        dispatch(getScootersSuccess(res.data))
    })
    .catch(err => {
        dispatch(getScootersFailure())
    })
}

// Commerical action

export const getCommericalRequest = () => {
    return {
        type : GET_COMMERICAL_REQUEST
    }
}

export const getCommericalSuccess = (payload) => {
    return {
        type : GET_COMMERICAL_SUCCESS,
        payload
    }
}

export const getCommericalFailure = () => {
    return {
        type : GET_COMMERICAL_FAILURE
    }
}

export const getCommericalData = payload => dispatch => {
    dispatch(getCommericalRequest())
    axios.get("https://json-server-olx.herokuapp.com/commerical")
    .then(res => {
        dispatch(getCommericalSuccess(res.data))
    })
    .catch(err => {
        dispatch(getCommericalFailure())
    })
}


// Rent house action

export const getRentHouseRequest = () => {
    return {
        type : GET_RENT_HOUSE_REQUEST
    }
}

export const getRentHouseSuccess = (payload) => {
    return {
        type : GET_RENT_HOUSE_SUCCESS,
        payload
    }
}

export const getRentHouseFailure = () => {
    return {
        type : GET_RENT_HOUSE_FAILURE
    }
}

export const getRentHouseData = payload => dispatch => {
    dispatch(getRentHouseRequest())
    axios.get("https://json-server-olx.herokuapp.com/rentHouse")
    .then(res => {
        dispatch(getRentHouseSuccess(res.data))
    })
    .catch(err => {
        dispatch(getRentHouseFailure())
    })
}

// Fresh Recommedation action

export const getFreshRecommendationRequest = () => {
    return {
        type : GET_FRESH_RECOMMENDATION_REQUEST
    }
}

export const getFreshRecommendationSuccess = (payload) => {
    return {
        type : GET_FRESH_RECOMMENDATION_SUCCESS,
        payload
    }
}

export const getFreshRecommendationFailure = () => {
    return {
        type : GET_FRESH_RECOMMENDATION_FAILURE
    }
}

export const getFreshRecommendationData = payload => dispatch => {
    dispatch(getFreshRecommendationRequest())
    axios.get("https://json-server-olx.herokuapp.com/freshRecommendation")
    .then(res => {
        dispatch(getFreshRecommendationSuccess(res.data))
    })
    .catch(err => {
        dispatch(getFreshRecommendationFailure())
    })
}

export const toggleAuth = () => {
    return {
        type: TOGGLE_AUTH
    }
}