import {put, takeLatest} from 'redux-saga/effects';
import {getWeather} from 'src/shared/api/weather/weather';
import dayjs from 'dayjs';
import {Alert} from 'react-native';

import {setIsWeatherFetching, setWeather} from '../actions/weather';
import {FetchWeatherAction} from '../actions/weather/types';
import {WEATHER_ACTIONS} from '../action-types';

function* fetchWeather(action: FetchWeatherAction) {
  try {
    yield put(setIsWeatherFetching({isFetching: true}));
    const weather = yield getWeather(
      action.payload.city,
      action.payload.country,
      action.payload.units,
    );
    yield put(setWeather(weather));
    yield put(setIsWeatherFetching({isFetching: false, lastUpdated: dayjs().format('HH:mm')}));
  } catch (error) {
    yield put(setIsWeatherFetching({isFetching: false, lastUpdated: dayjs().format('HH:mm')}));
    Alert.alert('Error while fetching weather', error.message, [{text: 'OK', style: 'cancel'}]);
  }
}

export default function* watchFetchWeather() {
  yield takeLatest(WEATHER_ACTIONS.FETCH_WEATHER, fetchWeather);
}
