export interface RootState {
  user: {
    isAuthorized: boolean;
    ui: {
      isAuthorizationInProgress: boolean;
      hasInvalidLoginAttempt: boolean;
    };
  };
}

export interface Action {
  type: string;
  payload: any;
}
