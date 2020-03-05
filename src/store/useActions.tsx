import {useWeatherActions} from "./weather/useWeatherActions";

export const useActions = () => {
    const weather = useWeatherActions();

    return {weather}
};