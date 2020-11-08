import {WEATHER_ACTIONS} from '../../action-types';
import {
  SetIsFetchingAction,
  SetIsFetchingActionPayload,
  FetchWeatherActionPayload,
  FetchWeatherAction,
  SetWeatherAction,
  SetWeatherActionPayload,
} from './types';

export const setIsWeatherFetching = (payload: SetIsFetchingActionPayload): SetIsFetchingAction => ({
  type: WEATHER_ACTIONS.SET_IS_FETCHING,
  payload,
});

export const fetchWeather = (payload: FetchWeatherActionPayload): FetchWeatherAction => ({
  type: WEATHER_ACTIONS.FETCH_WEATHER,
  payload,
});

export const setWeather = (payload: SetWeatherActionPayload): SetWeatherAction => ({
  type: WEATHER_ACTIONS.SET_WEATHER,
  payload,
});
