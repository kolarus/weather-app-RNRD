import {USER_ACTIONS} from '../action-types';
import {Action} from '../types';

const initialState = {
  ui: {
    isAuthorizationInProgress: false,
    hasInvalidLoginAttempt: false,
  },
  settings: {
    units: 'metric',
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

    case USER_ACTIONS.SET_IS_AUTHORIZATION_IN_PROGRESS: {
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

    default:
      return state;
  }
};

export default user;
