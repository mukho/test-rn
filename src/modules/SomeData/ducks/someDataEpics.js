// @flow
import { combineEpics, ofType } from 'redux-observable';
import {
  switchMap, catchError, mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as someDataActions from './someDataActions';

const getSomeDataEpic = (action$, state, { someDataApi }) => (
  action$.pipe(
    ofType(someDataActions.SOME_DATA_GET),
    switchMap(({ limit, query }: {
      limit: number, query: string
    }) => (
      someDataApi.getSomeData({ limit, query })
    )),
    mergeMap(({ data }) => (
      of(someDataActions.getSomeDataSuccess({ data }))
    )),
    catchError(err => of(someDataActions.getSomeDataError(err))),
  )
);

export default combineEpics(
  getSomeDataEpic,
);
