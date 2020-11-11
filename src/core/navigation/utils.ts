import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const getIsTabBarVisible = (navigation: {route: any}) => {
  const actualCurrentRouteName = getFocusedRouteNameFromRoute(navigation.route);

  return actualCurrentRouteName !== NAVIGATION_ROUTES.CITY_SELECTION;
};

export const getWeatherOptions = (navigation: {route: any}) => ({
  title: 'WEATHER',
  tabBarVisible: getIsTabBarVisible(navigation),
});
