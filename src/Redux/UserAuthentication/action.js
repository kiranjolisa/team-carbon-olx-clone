import axios from "axios";
import { 
    AUTH_STATE_FALSE, 
    AUTH_STATE_TRUE, 
    GET_USER_DATA_FAILURE, 
    GET_USER_DATA_SUCCESS } from "./actionTypes";

export const userLoggedIn = () => ({type : AUTH_STATE_TRUE })
export const userLoggedOut = () => ({type : AUTH_STATE_FALSE})

export const getUserData = ( payload ) => ( dispatch ) => {
    console.log(payload)
    axios.get('https://powerful-hollows-50640.herokuapp.com/olxUsers?username='+payload)
    .then(res => {
        console.log(res.data);
        if(res.data.length !== 0){
            dispatch(getUserDataSuccess(res.data[0]))
        }
        else{
            dispatch(getUserDataFailure())
        }
        console.log(res);
    })

    .catch(res => {
        dispatch(getUserDataFailure())
    })
}

export const getUserDataSuccess = (payload) => ({type : GET_USER_DATA_SUCCESS, payload})
export const getUserDataFailure = () => ({type : GET_USER_DATA_FAILURE})