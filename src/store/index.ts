import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import {rootReducer} from "./rootReducer";

const middleware = [logger];
const enhancer = applyMiddleware(...middleware);

const store = process.env.NODE_ENV === 'development' ? createStore(rootReducer, composeWithDevTools(enhancer)) : createStore(rootReducer);

export default store;