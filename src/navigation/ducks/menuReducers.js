// @flow
import * as menuActions from './menuActions';
import { WelcomeScreenRoute } from './constants';

const reducer = (state: {} = {}, action: {
  type: string,
  screenName: string,
  token: string
}) => {
  switch (action.type) {
    case menuActions.LOG_OUT_SUCCESS:
      return {
        ...state,
        routeNavTo: WelcomeScreenRoute,
      };
    case menuActions.CLEAR_NAV_TO:
      return {
        ...state,
        routeNavTo: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
