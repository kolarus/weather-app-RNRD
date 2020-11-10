const USER_ACTIONS_PREFIX = 'USER';

export const USER_ACTIONS = {
  SET_HAS_INVALID_LOGIN_ATTEMPT: `${USER_ACTIONS_PREFIX}/SET_HAS_INVALID_LOGIN_ATTEMPT`,
  SET_IS_FETCHING: `${USER_ACTIONS_PREFIX}/SET_IS_FETCHING`,
  SET_IS_AUTHORIZED: `${USER_ACTIONS_PREFIX}/SET_IS_AUTHORIZED`,
  REQUEST_SIGN_IN: `${USER_ACTIONS_PREFIX}/REQUEST_SIGN_IN`,
  SET_SHOW_WEATHER_FOR: `${USER_ACTIONS_PREFIX}/SET_SHOW_WEATHER_FOR`,
  SET_UNITS: `${USER_ACTIONS_PREFIX}/SET_UNITS`,
};

const WEATHER_ACTIONS_PREFIX = 'WEATHER';

export const WEATHER_ACTIONS = {
  SET_IS_FETCHING: `${WEATHER_ACTIONS_PREFIX}/SET_IS_FETCHING`,
  SET_WEATHER: `${WEATHER_ACTIONS_PREFIX}/SET_WEATHER`,
  FETCH_WEATHER: `${WEATHER_ACTIONS_PREFIX}/FETCH_WEATHER`,
  SET_CITY: `${WEATHER_ACTIONS_PREFIX}/SET_CITY`,
};

const CITIES_ACTIONS_PREFIX = 'CITIES';

export const CITIES_ACTION = {
  SET_IS_FETCHING: `${CITIES_ACTIONS_PREFIX}/SET_IS_FETCHING`,
  SET_CITIES: `${CITIES_ACTIONS_PREFIX}/SET_CITIES`,
  FETCH_CITIES: `${CITIES_ACTIONS_PREFIX}/FETCH_CITIES`,
};
