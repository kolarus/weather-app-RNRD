import React from 'react';
import WeatherDataContext from 'src/shared/api/weather-data-context';

import useWeather from './use-weather';
import {WeatherData} from './types';

const WeatherDataContextProvider: React.FC = (props) => {
  const {weather, lastUpdated, isFetching, refreshWeather}: WeatherData = useWeather(
    'Kharkiv',
    'ua',
  );

  return (
    <WeatherDataContext.Provider value={{weather, lastUpdated, isFetching, refreshWeather}}>
      {props.children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
