import {Alert} from 'react-native';
import {put, takeLatest, all} from 'redux-saga/effects';
import signIn from 'src/shared/api/user/sign-in';

import {
  setIsUserAuthorized,
  setIsAuthorizationInProgress,
  setHasInvalidLoginAttempt,
} from './actions/user';
import {USER_ACTIONS} from './action-types';
import {RequestSignInAction} from './actions/user/types';

export function* authorizeUser(action: RequestSignInAction) {
  try {
    yield put(setIsAuthorizationInProgress(true));
    yield signIn(action.payload.login, action.payload.password);
    yield put(setIsAuthorizationInProgress(false));
    yield put(setIsUserAuthorized(true));
  } catch (error) {
    yield put(setIsAuthorizationInProgress(false));
    yield put(setHasInvalidLoginAttempt(true));
    Alert.alert('Login Error', 'Wrong credentials', [{text: 'OK', style: 'cancel'}]);
  }
}

export function* watchAuthorizeUser() {
  yield takeLatest(USER_ACTIONS.REQUEST_SIGN_IN, authorizeUser);
}

export default function* rootSaga() {
  yield all([watchAuthorizeUser()]);
}
