import { POST_AD_FAILURE, POST_AD_REQUEST, POST_AD_SUCCESS, UNSET_SUCCESS_STATUS } from "./actionTypes"

const initState = {
    postingAd : false,
    postingAdSuccess : false
}
export const reducer = ( state = initState, { type }) => {
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
                postingAd : false
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