// @flow
import * as authActions from './authActions';

const reducer = (state: {} = {}, action: {
  type: string,
  screenName: string,
  token: string
}) => {
  switch (action.type) {
    case authActions.AUTH_SUCCESS_SIGN_IN:
      return {
        ...state,
        token: action.token,
      };
    case authActions.AUTH_SAVE_TOKEN_TO_STORE:
      return {
        ...state,
        token: action.token,
      };
    case authActions.ROUTE_NAV_TO: {
      return {
        ...state,
        routeNavTo: action.screenName,
      };
    }
    case authActions.CLEAR_NAV_TO:
      return {
        ...state,
        routeNavTo: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
