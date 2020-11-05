import {createContext} from 'react';

import {WeatherData} from './types';

const WeatherDataContext = createContext<WeatherData>({
  weather: null,
  lastUpdated: '00:00',
  isFetching: false,
  refreshWeather: () => null,
});

export default WeatherDataContext;
