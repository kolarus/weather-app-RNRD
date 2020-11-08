import {Weather} from 'src/shared/api/weather/types';
import dayjs from 'dayjs';
import {ICON_BY_WEATHER_TYPE} from 'src/shared/api/weather/constants';

import {Day} from './types';

const secondsToShortWeekday = (seconds: number): string => dayjs(seconds * 1000).format('ddd');

export const getAvailableDays = (weather: Weather): Array<Day> => {
  const daysLabelsSet = new Set(weather.list.map(({dt}) => secondsToShortWeekday(dt)));

  return [...daysLabelsSet].map((label) => {
    const availableWeatherData = weather.list.filter(({dt}) => secondsToShortWeekday(dt) === label);
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
};
