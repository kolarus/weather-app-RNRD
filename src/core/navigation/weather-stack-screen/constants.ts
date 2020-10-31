import COLORS from 'src/shared/constants/colors';
import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import NavigateToCitySelection from './navigate-to-city-selection';
import NavigateToSettings from './navigate-to-settings';

export const HEADER_NAVIGATION_OPTIONS: StackNavigationOptions = {
  title: '',
  headerRight: NavigateToCitySelection,
  headerLeft: NavigateToSettings,
  headerTransparent: true,
};

export const CHEVRON_BACK_BUTTON_SCREEN_OPTIONS: StackNavigationOptions = {
  headerBackImage: () =>
    React.createElement(Feather, {
      name: 'chevron-left',
      size: 30,
      color: COLORS.TEXT_DEFAULT,
    }),
  headerStyle: {
    backgroundColor: COLORS.BACKGROUND_DEFAULT,
  },
  title: '',
};
