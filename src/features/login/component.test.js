import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Login from './component';

beforeEach(() => {
  jest.useFakeTimers();
});

const initialState = {
  user: {
    ui: {},
  },
};

test('Login should match snapshot', () => {
  const {toJSON} = render(
    <Provider store={createStore((state) => state, initialState)}>
      <Login />
    </Provider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
