import {combineReducers} from "redux";
import {weatherReducer as weather} from "./weather/weatherReducer";

export const rootReducer = combineReducers({weather});

export type AppState = ReturnType<typeof rootReducer>