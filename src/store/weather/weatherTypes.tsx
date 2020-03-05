import {AxiosError} from "axios";

export enum WeatherTypes  {
    FETCH_WEATHER_ALERTS_START = 'FETCH_WEATHER_ALERTS_START',
    FETCH_WEATHER_ALERTS_SUCCESS = 'FETCH_WEATHER_ALERTS_SUCCESS',
    FETCH_WEATHER_ALERTS_FAILURE = 'FETCH_WEATHER_ALERTS_FAILURE',
}

interface WeatherAlert {
    id: String
    areaDesc: String
    expires: Date
    severity: String
    event: String
    senderName: String
    headline: String
    description: String
    instruction: String
}

export interface WeatherState {
    alerts: WeatherAlert[]
    isLoading: Boolean
    errors: AxiosError | null
}

interface WeatherStartAction {
    type: typeof WeatherTypes.FETCH_WEATHER_ALERTS_START
}

interface WeatherSuccessAction {
    type: typeof WeatherTypes.FETCH_WEATHER_ALERTS_SUCCESS
    payload: WeatherAlert[]
}

interface WeatherFailureAction {
    type: typeof WeatherTypes.FETCH_WEATHER_ALERTS_FAILURE
    payload: AxiosError
}

export type WeatherActions = WeatherStartAction | WeatherSuccessAction | WeatherFailureAction