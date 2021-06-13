import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer as categoryReducer } from "./MainCategory/reducer";
import { reducer as postAdReducer } from "./PostData/reducer";
import { getDataReducer } from "./products/reducer";

const rootReducer = combineReducers({
    category : categoryReducer,
    postAd : postAdReducer,
    products : getDataReducer
})

export const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))



