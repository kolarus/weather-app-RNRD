import {WEATHER_ACTIONS} from '../../action-types';
import {Weather} from '../../../../shared/api/weather/types';

export interface SetIsFetchingActionPayload {
  isFetching: boolean;
  lastUpdated?: string;
}

export interface SetIsFetchingAction {
  type: typeof WEATHER_ACTIONS.SET_IS_FETCHING;
  payload: SetIsFetchingActionPayload;
}

export interface FetchWeatherActionPayload {
  city: string;
  country: string;
  units: string;
}

export interface FetchWeatherAction {
  type: typeof WEATHER_ACTIONS.FETCH_WEATHER;
  payload: FetchWeatherActionPayload;
}

export interface SetWeatherActionPayload {
  weather: Nullable<Weather>;
}

export interface SetWeatherAction {
  type: typeof WEATHER_ACTIONS.SET_WEATHER;
  payload: SetWeatherActionPayload;
}
