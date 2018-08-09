// @flow
export const LOG_OUT = 'log/out';
export const LOG_OUT_ERROR = 'log/out/error';
export const LOG_OUT_SUCCESS = 'log/out/success';
export const CLEAR_NAV_TO = 'log/out/clear/nav/to';

export const logOut = () => ({
  type: LOG_OUT,
});

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS,
});

export const logOutError = (err: {}) => ({
  type: LOG_OUT_ERROR,
  err,
});

export const clearNavTo = () => ({
  type: CLEAR_NAV_TO,
});
