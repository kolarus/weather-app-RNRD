import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from 'src/shared/constants/colors';

import NavigateToCitySelection from './navigate-to-city-selection';
import NavigateToSettings from './navigate-to-settings';

export const HEADER_NAVIGATION_OPTIONS: StackNavigationOptions = {
  title: '',
  headerRight: NavigateToCitySelection,
  headerLeft: NavigateToSettings,
  headerTransparent: true,
  headerStyle: {
    backgroundColor: COLORS.BACKGROUND_DEFAULT,
  },
};

export const CHEVRON_BACK_BUTTON_SCREEN_OPTIONS: StackNavigationOptions = {
  headerBackImage: () =>
    React.createElement(Feather, {
      name: 'chevron-left',
      size: 30,
      color: COLORS.TEXT_DEFAULT,
    }),
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: COLORS.BACKGROUND_DEFAULT,
  },
  title: '',
};
