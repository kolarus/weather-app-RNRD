import COLORS from 'src/shared/constants/colors';
import {DefaultTheme} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {BottomTabBarOptions} from '@react-navigation/bottom-tabs';

export const HEADER_NAVIGATION_HIDDEN: StackNavigationOptions = {
  title: '',
  headerTransparent: true,
};

export const TAB_NAVIGATION_OPTIONS: BottomTabBarOptions = {
  activeTintColor: COLORS.TAB_ACTIVE_TINT_COLOR,
  inactiveTintColor: COLORS.TAB_INACTIVE_TINT_COLOR,
  labelStyle: {
    fontSize: 15,
    lineHeight: 80,
  },
  safeAreaInsets: {
    bottom: 0,
    top: 0,
  },
  style: {
    height: 80,
    borderTopWidth: 0,
    backgroundColor: COLORS.TAB_BAR_BACKGROUND,
  },
};

export const NAVIGATION_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.BACKGROUND_DEFAULT,
    background: COLORS.BACKGROUND_DEFAULT,
  },
};
