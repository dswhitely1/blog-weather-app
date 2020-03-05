import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {WeatherTypes} from "./weatherTypes";

export const useWeatherActions = () => {
    const dispatch = useDispatch();

    const fetchAlerts = useCallback(()=> {
        dispatch({type: WeatherTypes.FETCH_WEATHER_ALERTS_START});
        axios.get(`https://api.weather.gov/alerts`).then(response => {
            dispatch({type: WeatherTypes.FETCH_WEATHER_ALERTS_SUCCESS, payload: response.data})
        }).catch(error => {
            dispatch({type: WeatherTypes, payload: error.response.data || error.response || error})
        });
    }, [dispatch]);

    return {fetchAlerts}
};