import COLORS from 'src/shared/constants/colors';
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
    lineHeight: 60,
  },
  style: {
    height: 60,
    borderTopWidth: 0,
    backgroundColor: COLORS.TAB_BAR_BACKGROUND,
  },
};
