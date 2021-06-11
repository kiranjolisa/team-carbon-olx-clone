import { SET_MAIN_CATEGORY } from "./actionTypes"

const initState = {
    mainCategory :""
}
export const reducer = (state = initState, { type, payload }) => {
    switch(type){
        case SET_MAIN_CATEGORY:
            return{
                ...state,
                mainCategory : payload
            }

        default:
            return state;
    }
}