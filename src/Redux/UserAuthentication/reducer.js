import { AUTH_STATE_FALSE, AUTH_STATE_TRUE, GET_USER_DATA_FAILURE, GET_USER_DATA_SUCCESS } from "./actionTypes";

const initState = {
    auth : false,
    userDisplayPic : "",
    contactNumber:"",
    firstName :"",
    lastName :""
}

export const reducer = (state = initState, { type, payload }) => {
    switch(type){
        case AUTH_STATE_TRUE:
            return {
                ...initState,
                auth : true
            }
        
        case AUTH_STATE_FALSE:
            return {
                ...initState,
                auth : false
            }
        
        case GET_USER_DATA_FAILURE:
            return {
                ...initState,
                auth : true
            }

        case GET_USER_DATA_SUCCESS:
            return{
                ...state,
                userDisplayPic : payload.profilePic,
                contactNumber: payload.phoneNumber,
                firstName: payload.firstName,
                lastName : payload.lastName
            }
        default:
            return state;
    }
}