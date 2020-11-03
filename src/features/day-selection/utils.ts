import {Weather} from 'src/shared/api/types';
import dayjs from 'dayjs';
import {ICON_BY_WEATHER_TYPE} from 'src/shared/api/constants';

import {Day} from './types';

export const getAvailableDays = (weather: Weather): Array<Day> => {
  const days = weather.list.map((weatherItem) => dayjs(weatherItem.dt * 1000).format('ddd'));
  const daysSet = new Set(days);
  const daysLabels = [...daysSet];

  return daysLabels.map((label) => {
    const availableWeatherData = weather.list.filter((weatherItem) => {
      return dayjs(weatherItem.dt * 1000).format('ddd') === label;
    });
    const temperatures = availableWeatherData.map((weatherItem) =>
      Math.round(weatherItem.main.temp),
    );

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
