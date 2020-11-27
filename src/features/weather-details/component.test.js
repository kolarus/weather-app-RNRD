import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import WeatherDetails from './component';
import rootSaga from '../../core/redux/sagas';

let store = createSagaMiddleware();

beforeEach(() => {
  const sagaMiddleware = createSagaMiddleware();
  store = createStore((state) => state, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  jest.useFakeTimers();
  fetch.resetMocks();
});

jest.mock('@react-navigation/stack', () => ({
  useHeaderHeight: () => 100,
}));

jest.mock('@react-navigation/core', () => ({
  useRoute: () => ({}),
}));

const initialState = {
  weather: {
    ui: {
      isFetching: false,
    },
    weatherData: {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1606510800,
          main: {
            temp: 4.53,
            feels_like: 0.81,
            temp_min: 4.03,
            temp_max: 4.53,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1000,
            humidity: 88,
            temp_kf: 0.5,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],
          clouds: {
            all: 87,
          },
          wind: {
            speed: 3.1,
            deg: 216,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-11-27 21:00:00',
        },
        {
          dt: 1606521600,
          main: {
            temp: 3.38,
            feels_like: 0.11,
            temp_min: 2.93,
            temp_max: 3.38,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1000,
            humidity: 91,
            temp_kf: 0.45,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],
          clouds: {
            all: 95,
          },
          wind: {
            speed: 2.29,
            deg: 221,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-11-28 00:00:00',
        },
        {
          dt: 1606532400,
          main: {
            temp: 2.63,
            feels_like: -0.53,
            temp_min: 2.47,
            temp_max: 2.63,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1001,
            humidity: 87,
            temp_kf: 0.16,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04n',
            },
          ],
          clouds: {
            all: 98,
          },
          wind: {
            speed: 1.82,
            deg: 219,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2020-11-28 03:00:00',
        },
      ],
      city: {
        id: 706483,
        name: 'Kharkiv',
        coord: {
          lat: 50,
          lon: 36.25,
        },
        country: 'UA',
        population: 1430885,
        timezone: 7200,
        sunrise: 1606453605,
        sunset: 1606484343,
      },
    },
    selectedCity: 'Kharkiv',
    selectedCountry: 'ua',
    lastUpdated: '0:00',
  },
  user: {
    settings: {
      units: 'metric',
      showWeatherFor: 5,
    },
  },
};

test('WeatherDetails should match snapshot', () => {
  const {toJSON} = render(
    <Provider store={createStore((state) => state, initialState)}>
      <WeatherDetails />
    </Provider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('WeatherDetails should fetch data when refresh icon pressed', async () => {
  const {getByTestId} = render(
    <Provider store={store}>
      <WeatherDetails />
    </Provider>,
  );

  fetch.resetMocks();
  fireEvent(getByTestId('WeatherDetails.refresh'), 'press');

  await expect(fetch.mock.calls.length).toBe(1);
});
