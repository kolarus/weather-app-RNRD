import {all} from 'redux-saga/effects';

import watchAuthorizeUser from './watch-authorize-user';
import watchFetchWeather from './watch-fetch-weather';
import watchFetchCities from './watch-fetch-cities';

export default function* rootSaga() {
  yield all([watchAuthorizeUser(), watchFetchWeather(), watchFetchCities()]);
}
