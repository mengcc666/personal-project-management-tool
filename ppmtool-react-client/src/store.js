import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

let store;

let composedEnhancersForDevTools = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let composedEnhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (window.navigator.userAgent.includes("Chrome")) {
  store = configureStore({
    reducer: rootReducer,
    initialState,
    composedEnhancersForDevTools,
  });
} else {
  store = configureStore({
    reducer: rootReducer,
    initialState,
    composedEnhancers,
  });
}
export default store;
