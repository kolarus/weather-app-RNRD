import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from 'src/shared/constants/colors';
import {StackNavigationOptions} from '@react-navigation/stack';

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

export const NO_HEADER_SCREEN_OPTIONS: StackNavigationOptions = {
  title: '',
  headerTransparent: true,
};
