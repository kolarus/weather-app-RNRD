import {useState, useEffect} from 'react';
import dayjs from 'dayjs';

import {WeatherData, Weather} from './types';
import {getWeather} from './weather';

const useWeather = (
  initialCity: string,
  initialCountry: string,
  initialMetric: string = 'metric',
): WeatherData => {
  const [refreshParams, setRefreshParams] = useState<Array<string>>([
    initialCity,
    initialCountry,
    initialMetric,
  ]);
  const [city, country, metric] = refreshParams;
  const [weather, setWeather] = useState<Weather | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [shouldRefresh, setShouldRefresh] = useState(true);
  const refreshWeather = (newRefreshParams?: Array<string>) => {
    setShouldRefresh(true);
    if (newRefreshParams) {
      setRefreshParams(newRefreshParams);
    }
  };

  useEffect(() => {
    if (shouldRefresh) {
      (async () => {
        const fetchedWeather = await getWeather(city, country, metric);
        const updatedAt = dayjs().format('HH:mm');

        setLastUpdated(updatedAt);
        setWeather(fetchedWeather);
        setShouldRefresh(false);
      })();
    }
  }, [shouldRefresh, city, country, metric]);

  return {
    weather,
    lastUpdated,
    refreshWeather,
    isFetching: shouldRefresh,
  };
};

export default useWeather;
