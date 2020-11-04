import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';

export type RoutesParamList = {
  [NAVIGATION_ROUTES.WEATHER_DETAILS]: {
    showForTime: number;
  };
};
