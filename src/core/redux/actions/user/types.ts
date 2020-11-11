import {USER_ACTIONS} from '../../action-types';

export interface RequestSignInPayload {
  login: string;
  password: string;
}

export interface RequestSignInAction {
  type: typeof USER_ACTIONS.REQUEST_SIGN_IN;
  payload: RequestSignInPayload;
}
