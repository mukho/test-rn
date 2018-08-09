// @flow
export const AUTH_SIGN_UP_USER = 'auth/sign/up/user';
export const AUTH_SIGN_IN_USER = 'auth/sign/in/user';
export const AUTH_SUCCESS_SIGN_UP = 'auth/success/sign/up';
export const AUTH_SUCCESS_SIGN_IN = 'auth/success/sign/in';
export const AUTH_SAVE_TOKEN_TO_STORE = 'auth/save/token/to/store';
export const CLEAR_NAV_TO = 'auth/clear/nav/to';
export const ROUTE_NAV_TO = 'nav/route/to';

export const signUpUser = ({
  email, password,
}: { email: string, password: string }) => ({
  type: AUTH_SIGN_UP_USER,
  email,
  password,
});

export const signInUser = ({
  email, password,
}: { email: string, password: string }) => ({
  type: AUTH_SIGN_IN_USER,
  email,
  password,
});

export const signUpSuccess = () => ({
  type: AUTH_SUCCESS_SIGN_UP,
});

export const navToScreen = ({ screenName }: { screenName: string }) => ({
  type: ROUTE_NAV_TO,
  screenName,
});

export const clearNavTo = () => ({
  type: CLEAR_NAV_TO,
});
