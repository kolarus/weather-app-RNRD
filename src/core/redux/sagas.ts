import {Alert} from 'react-native';
import {put, takeLatest, all} from 'redux-saga/effects';
import signIn from 'src/shared/api/user/sign-in';
import {getWeather} from 'src/shared/api/weather/weather';
import dayjs from 'dayjs';

import {
  setIsUserAuthorized,
  setIsAuthorizationInProgress,
  setHasInvalidLoginAttempt,
} from './actions/user';
import {setIsWeatherFetching, setWeather} from './actions/weather';
import {RequestSignInAction} from './actions/user/types';
import {FetchWeatherAction} from './actions/weather/types';
import {USER_ACTIONS, WEATHER_ACTIONS} from './action-types';

export function* authorizeUser(action: RequestSignInAction) {
  try {
    yield put(setIsAuthorizationInProgress(true));
    yield signIn(action.payload.login, action.payload.password);
    yield put(setIsAuthorizationInProgress(false));
    yield put(setIsUserAuthorized(true));
  } catch (error) {
    yield put(setIsAuthorizationInProgress(false));
    yield put(setHasInvalidLoginAttempt(true));
    Alert.alert('Login Error', 'Wrong credentials', [{text: 'OK', style: 'cancel'}]);
  }
}

export function* watchAuthorizeUser() {
  yield takeLatest(USER_ACTIONS.REQUEST_SIGN_IN, authorizeUser);
}

export function* fetchWeather(action: FetchWeatherAction) {
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
    Alert.alert('Error while fetching weather', error.message, [{text: 'OK', style: 'cancel'}]);
  }
}

export function* watchFetchWeather() {
  yield takeLatest(WEATHER_ACTIONS.FETCH_WEATHER, fetchWeather);
}

export default function* rootSaga() {
  yield all([watchAuthorizeUser(), watchFetchWeather()]);
}
