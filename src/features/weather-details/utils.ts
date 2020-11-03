import dayjs from 'dayjs';
import {Weather} from 'src/shared/api/types';

import {ICON_BY_WEATHER_TYPE} from './constants';

const secondsToHmm = (seconds: number): string => dayjs(seconds * 1000).format('H:mm');

export const getFormattedSunsetTime = (weather: Weather) => secondsToHmm(weather.city.sunset);

export const getFormattedSunriseTime = (weather: Weather) => secondsToHmm(weather.city.sunrise);

export const getIconByWeather = (weather: {main: string}) =>
  ICON_BY_WEATHER_TYPE[weather.main] || 'wind';
