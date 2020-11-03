import {WeatherByTime} from 'src/shared/api/types';

// remove redundunt fields
export const DEFAULT_WEATHER: WeatherByTime = {
  dt: 1604437200,
  main: {
    temp: 8.56,
    feels_like: 6.61,
    temp_min: 8.16,
    temp_max: 8.56,
    pressure: 1025,
    sea_level: 1025,
    grnd_level: 1007,
    humidity: 90,
    temp_kf: 0.4,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03n',
    },
  ],
  clouds: {
    all: 46,
  },
  wind: {
    speed: 1.79,
    deg: 117,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: 'n',
  },
  dt_txt: '2020-11-03 21:00:00',
};
