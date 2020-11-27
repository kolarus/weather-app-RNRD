/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

require('jest-fetch-mock').enableMocks();

jest.mock('react-native-keychain', () => {});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('@react-navigation/stack', () => ({
  useHeaderHeight: () => 100,
}));

jest.mock('@react-navigation/core', () => ({
  useRoute: () => ({}),
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
