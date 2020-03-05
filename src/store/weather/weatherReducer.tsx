import {WeatherActions, WeatherState, WeatherTypes} from "./weatherTypes";

const initialState: WeatherState = {
    alerts: [],
    isLoading: false,
    errors: null
}

export const weatherReducer = (state = initialState, action: WeatherActions): WeatherState => {
    switch (action.type) {
        case WeatherTypes.FETCH_WEATHER_ALERTS_START:
            return {...state, alerts: [], errors: null, isLoading: true};
        case WeatherTypes.FETCH_WEATHER_ALERTS_SUCCESS:
            return {...state, alerts: action.payload, errors: null, isLoading: false};
        case WeatherTypes.FETCH_WEATHER_ALERTS_FAILURE:
            return {...state, alerts: [], isLoading: false, errors: action.payload};
        default:
            return state;
    }
};