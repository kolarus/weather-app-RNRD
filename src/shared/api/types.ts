export interface WeatherByTime {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}

export interface Weather {
  city: {
    name: string;
    sunset: number;
    sunrise: number;
  };
  list: Array<WeatherByTime>;
}

export interface WeatherData {
  weather: Nullable<Weather>;
  lastUpdated: string | null;
  isFetching: boolean;
  refreshWeather(refreshParams: Array<string> | null): void;
}
