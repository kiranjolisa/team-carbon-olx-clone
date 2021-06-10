import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer as categoryReducer } from "./MainCategory/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    category : categoryReducer
})

export const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))