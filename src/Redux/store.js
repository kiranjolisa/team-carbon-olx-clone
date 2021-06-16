import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer as categoryReducer } from "./MainCategory/reducer";
import { reducer as postAdReducer } from "./PostData/reducer";
import { reducer as dynamicDataReducer } from './GetDynamicData/reducer'
import { reducer as languageReducer } from "./LanguageTranslator/reducer";
import { reducer as wishlistReducer } from "./Wishlist/reducer";
import { getDataReducer } from "./products/reducer";

const rootReducer = combineReducers({
    category : categoryReducer,
    postAd : postAdReducer,
    products : getDataReducer,
    dynamicContent : dynamicDataReducer,
    language: languageReducer,
    wishlist  : wishlistReducer
})

export const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
