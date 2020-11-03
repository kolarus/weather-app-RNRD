import {useState, useEffect} from 'react';
import dayjs from 'dayjs';

import {WeatherData, Weather} from './types';
import {getWeather} from './weather';

const useWeather = (city: string, country: string, metric: string = 'metric'): WeatherData => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [shouldRefresh, setShouldRefresh] = useState(true);
  const refreshWeather = () => setShouldRefresh(true);

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
