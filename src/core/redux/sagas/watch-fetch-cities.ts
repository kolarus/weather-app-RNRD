import {put, takeLatest} from 'redux-saga/effects';
import {getWeather} from 'src/shared/api/weather/weather';
import {Alert} from 'react-native';

import {setCities, setCitiesFetching, setFetchedUnits} from '../actions/cities';
import {FetchCitiesAction} from '../actions/cities/types';
import {CITIES_ACTION} from '../action-types';

function* fetchCities(action: FetchCitiesAction) {
  try {
    yield put(setCitiesFetching(true));
    const cities = yield Promise.all(
      action.payload.cities.map((city) =>
        getWeather(city.name, city.country, action.payload.units),
      ),
    );
    yield put(setCities(cities));
    yield put(setFetchedUnits(action.payload.units));
    yield put(setCitiesFetching(false));
  } catch (error) {
    Alert.alert('Error while fetching weather for cities', error.message, [
      {text: 'OK', style: 'cancel'},
    ]);
  }
}

export default function* watchFetchCities() {
  yield takeLatest(CITIES_ACTION.FETCH_CITIES, fetchCities);
}
