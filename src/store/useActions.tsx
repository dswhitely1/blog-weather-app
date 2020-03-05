import {useWeatherActions, UseWeatherActions} from "./weather/useWeatherActions";

export const useActions = () => {
    const weather = useWeatherActions();

    return {weather}
};

export interface UseActions {
    weather: UseWeatherActions
}