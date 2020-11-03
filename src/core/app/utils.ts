import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';

const getIsTabBarVisible = (navigation: {route: any}) => {
  try {
    // tricky hack to find actual route name, couldn't find better solution
    const {routes} = navigation.route.state;
    const actualCurrentRouteName = routes[routes.length - 1].name;

    return actualCurrentRouteName !== NAVIGATION_ROUTES.CITY_SELECTION;
  } catch {
    return true;
  }
};

export const getWeatherOptions = (navigation: {route: any}) => ({
  title: 'WEATHER',
  tabBarVisible: getIsTabBarVisible(navigation),
});
