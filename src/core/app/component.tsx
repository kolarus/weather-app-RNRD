import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from 'src/features/login';
import NAVIGATION_ROUTES from 'src/shared/constants/navigation-routes';
import timeout from 'src/shared/utils/timeout';
import DaySelection from 'src/features/day-selection';

import {HEADER_NAVIGATION_HIDDEN, TAB_NAVIGATION_OPTIONS} from './constants';
import AuthContext from './auth-context';
import WeatherStackScreen from '../navigation/weather-stack-screen';
import {getWeatherOptions} from './utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const signIn = async (login: string, password: string): Promise<boolean> => {
    const isValidCredentials: boolean = login === 'admin' && password === 'admin';

    await timeout(3000);
    setIsAuthorized(isValidCredentials);

    return isValidCredentials;
  };

  const signOut = () => setIsAuthorized(false);

  return (
    <AuthContext.Provider value={{isAuthorized, signIn, signOut}}>
      <NavigationContainer>
        {isAuthorized ? (
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
