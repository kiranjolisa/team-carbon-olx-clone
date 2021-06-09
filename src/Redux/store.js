import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getDataReducer } from "./products/reducer";

const thunkMiddleware = (store) => (next) => (action) => {
  return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const rootReducer = combineReducers({
 products : getDataReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);