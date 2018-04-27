import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import countries from "./countries";
import regions from "./regions"
import grapes from "./grapes"

const reducer = combineReducers({ countries, regions, grapes });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;

export * from './countries';
export * from './regions';
export * from './grapes'
