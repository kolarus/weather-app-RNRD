import {WeatherByTime} from 'src/shared/api/types';

import getDayRangeInSeconds from './get-day-range-in-seconds';
import getWeatherItemsByTimeRange from './get-weather-by-time-range';

const getWeatherItemsForDay = (time: number = Date.now(), weatherItems: Array<WeatherByTime>) => {
  const timeRange = getDayRangeInSeconds(time);

  return getWeatherItemsByTimeRange(timeRange, weatherItems);
};

export default getWeatherItemsForDay;
