import { POST_AD_FAILURE, POST_AD_REQUEST, POST_AD_SUCCESS, UNSET_SUCCESS_STATUS } from "./actionTypes"

const initState = {
    postingAd : false,
    postingAdSuccess : false,
    postedAds : []
}
export const reducer = ( state = initState, { type, payload }) => {
    switch(type){
        case POST_AD_REQUEST:
            return{
                ...state,
                postingAd : true,
                postingAdSuccess : false
            }
        
        case POST_AD_SUCCESS:
            return {
                ...state,
                postingAdSuccess : true,
                postingAd : false,
                postedAds : [...state.postedAds, payload]
            }
        
        case POST_AD_FAILURE:
            return{
                ...state,
                postingAd : false,
                postingAdSuccess : false
            }

        case UNSET_SUCCESS_STATUS:
            return{
                ...state,
                postingAdSuccess : false
            }
        default :
        return state;
    }
}