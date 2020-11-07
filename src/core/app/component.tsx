import React, {useState, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from 'src/features/login';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import timeout from 'src/shared/utils/timeout';
import DaySelection from 'src/features/day-selection';
import AuthContext from 'src/core/auth/auth-context';
import WeatherDataContextProvider from 'src/shared/api/weather-data-context-provider';

import {HEADER_NAVIGATION_HIDDEN, TAB_NAVIGATION_OPTIONS, NAVIGATION_THEME} from './constants';
import WeatherStackScreen from '../navigation/weather-stack-screen';
import {getWeatherOptions} from './utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const signIn = useCallback(async (login: string, password: string): Promise<boolean> => {
    const isValidCredentials: boolean = login === 'admin' && password === 'admin';

    await timeout(3000);
    setIsAuthorized(isValidCredentials);

    return isValidCredentials;
  }, []);

  const signOut = useCallback(() => setIsAuthorized(false), []);

  return (
    <AuthContext.Provider value={{isAuthorized, signIn, signOut}}>
      <NavigationContainer theme={NAVIGATION_THEME}>
        {isAuthorized ? (
          <WeatherDataContextProvider>
            <Tab.Navigator tabBarOptions={TAB_NAVIGATION_OPTIONS}>
              <Tab.Screen
                options={getWeatherOptions}
                name={NAVIGATION_ROUTES.WEATHER_STACK}
                component={WeatherStackScreen}
              />
              <Tab.Screen
                options={{title: 'FORECAST'}}
                name={NAVIGATION_ROUTES.DAY_SELECTION}
                component={DaySelection}
              />
            </Tab.Navigator>
          </WeatherDataContextProvider>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={HEADER_NAVIGATION_HIDDEN}
              name={NAVIGATION_ROUTES.LOGIN}
              component={Login}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
