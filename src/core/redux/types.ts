import {Weather} from 'src/shared/api/weather/types';

export interface RootState {
  user: {
    isAuthorized: boolean;
    ui: {
      isAuthorizationInProgress: boolean;
      hasInvalidLoginAttempt: boolean;
    };
    settings: {
      units: string;
      showWeatherFor: number;
    };
  };
  weather: {
    ui: {
      isFetching: boolean;
    };
    weatherData: Nullable<Weather>;
    selectedCity: string;
    selectedCountry: string;
    lastUpdated: string;
  };
  cities: {
    ui: {
      isFetching: boolean;
    };
    cities: Array<Weather>;
  };
}

export interface Action {
  type: string;
  payload: any;
}
