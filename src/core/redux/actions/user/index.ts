import {RequestSignInAction, RequestSignInPayload} from './types';
import {USER_ACTIONS} from '../../action-types';
import {Action} from '../../types';

export const setHasInvalidLoginAttempt = (payload: boolean): Action => ({
  type: USER_ACTIONS.SET_HAS_INVALID_LOGIN_ATTEMPT,
  payload,
});

export const setIsAuthorizationInProgress = (payload: boolean): Action => ({
  type: USER_ACTIONS.SET_IS_AUTHORIZATION_IN_PROGRESS,
  payload,
});

export const setIsUserAuthorized = (payload: boolean): Action => ({
  type: USER_ACTIONS.SET_IS_AUTHORIZED,
  payload,
});

export const requestUserSignIn = (payload: RequestSignInPayload): RequestSignInAction => ({
  type: USER_ACTIONS.REQUEST_SIGN_IN,
  payload,
});
