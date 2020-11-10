import {USER_ACTIONS} from '../action-types';
import {Action} from '../types';

const initialState = {
  ui: {
    isAuthorizationInProgress: false,
    hasInvalidLoginAttempt: false,
  },
  settings: {
    units: 'metric',
    showWeatherFor: 5,
  },
  isAuthorized: false,
};

const user = (state = initialState, action: Action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_IS_AUTHORIZED: {
      return {
        ...state,
        isAuthorized: action.payload,
      };
    }

    case USER_ACTIONS.SET_IS_FETCHING: {
      return {
        ...state,
        ui: {
          ...state.ui,
          isAuthorizationInProgress: action.payload,
        },
      };
    }

    case USER_ACTIONS.SET_HAS_INVALID_LOGIN_ATTEMPT: {
      return {
        ...state,
        ui: {
          ...state.ui,
          hasInvalidLoginAttempt: action.payload,
        },
      };
    }

    case USER_ACTIONS.SET_SHOW_WEATHER_FOR: {
      return {
        ...state,
        settings: {
          ...state.settings,
          showWeatherFor: action.payload,
        },
      };
    }

    case USER_ACTIONS.SET_UNITS: {
      return {
        ...state,
        settings: {
          ...state.settings,
          units: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default user;
