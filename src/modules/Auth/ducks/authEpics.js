// @flow
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, catchError, tap, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';

import { WelcomeScreenRoute, SomeDataRoute, SignUpSuccessRoute } from '../../../navigation/ducks/constants';
import * as authActions from './authActions';
import {
  getItemStorage$,
  setItemStorage$,
} from '../../../services/utils/storage';

type AuthActionsType = {
  email: string,
  password: string
};

const signInEpic = (action$, state, { authApi }) => (
  action$.pipe(
    ofType(authActions.AUTH_SIGN_IN_USER),
    switchMap(({ email, password }: AuthActionsType) => (
      authApi.getToken({ email, password })
    )),
    tap(({ token }) => setItemStorage$('token', token)),
    mapTo(
      authActions.navToScreen({ screenName: SomeDataRoute }),
    ),
    catchError(() => of(
      authActions.navToScreen({ screenName: WelcomeScreenRoute }),
    )),
  )
);

const signUnEpic = (action$, state, { authApi }) => (
  action$.pipe(
    ofType(authActions.AUTH_SIGN_UP_USER),
    switchMap(({ email, password }: AuthActionsType) => (
      authApi.signUp({ email, password })
    )),
    tap(({ token }) => setItemStorage$('token', token)),
    mapTo(
      authActions.navToScreen({ screenName: SignUpSuccessRoute }),
    ),
    catchError(() => of(
      authActions.navToScreen({ screenName: WelcomeScreenRoute }),
    )),
  )
);

export default combineEpics(
  signInEpic,
  signUnEpic,
);
