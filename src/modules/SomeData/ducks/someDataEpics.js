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
    mergeMap(({ data }) => {
      const filteredData = data.map(({ id, title, images: { fixed_height: fixedHeight } }) => ({
        height: fixedHeight.height,
        width: fixedHeight.width,
        url: fixedHeight.url,
        id,
        title,
      }));
      return of(someDataActions.getSomeDataSuccess({ data: filteredData }));
    }),
    catchError(err => of(someDataActions.getSomeDataError(err))),
  )
);

export default combineEpics(
  getSomeDataEpic,
);
