import {put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import signIn from 'src/shared/api/user/sign-in';

import {RequestSignInAction} from '../actions/user/types';
import {
  setHasInvalidLoginAttempt,
  setIsAuthorizationInProgress,
  setIsUserAuthorized,
} from '../actions/user';
import {USER_ACTIONS} from '../action-types';

function* authorizeUser(action: RequestSignInAction) {
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

export default function* watchAuthorizeUser() {
  yield takeLatest(USER_ACTIONS.REQUEST_SIGN_IN, authorizeUser);
}
