import {ICON_BY_WEATHER_TYPE} from 'src/shared/api/weather/constants';
import {RootState} from 'src/core/redux/types';

import {Day} from './types';
import {secondsToShortWeekday} from './utils';

export const getAvailableDays = (state: RootState): Array<Day> => {
  if (state.weather.weatherData) {
    const weather = state.weather.weatherData;
    const daysLabelsSet = new Set(weather.list.map(({dt}) => secondsToShortWeekday(dt)));

    return [...daysLabelsSet].map((label) => {
      const availableWeatherData = weather.list.filter(
        ({dt}) => secondsToShortWeekday(dt) === label,
      );
      const temperatures = availableWeatherData.map(({main}) => Math.round(main.temp));

      return {
        label,
        icon: ICON_BY_WEATHER_TYPE[availableWeatherData[0].weather[0].main],
        dt: availableWeatherData[0].dt,
        temperatureRange: {
          from: Math.min(...temperatures),
          to: Math.max(...temperatures),
        },
      };
    });
  } else {
    return [];
  }
};
