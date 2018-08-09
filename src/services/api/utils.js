// @flow
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import R from 'ramda';

import { getItemStorage$ } from '../utils/storage';

let tempStorage = {};

const ACCESS_TOKEN_ASYNC_STORAGE = 'token';

const writeToTempStorage = (token: string) => {
  tempStorage = {
    accessToken: token,
  };
};

const settingXHRrequest = (req, {
  method, url,
}, accessToken) => {
  req.responseType = 'json';
  req.open(
    method,
    url,
    true,
  );
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader('Location', 'https://jsonblob.com/api/jsonBlob/6bfa4f0d-9b2d-11e8-b03b-37b30a3fd403');
  if (typeof accessToken !== 'undefined') {
    req.setRequestHeader('Authorization', `Bearer ${accessToken}`);
  }
};

export const sendReq = ({ req, body }: {
  // $FlowFixMe
  req: any,
  body?: {
    attachment?: {} | string
  }
}) => R.ifElse(
  () => R.isNil(body),
  () => req.send(),
  () => {
    const bodyReq = JSON.stringify(body);
    req.send(bodyReq);
  },
)();

export const request = (
  config: {
    url: string,
    method: string
  } = {
    url: '',
    method: 'POST',
  },
  body?: {},
  accessToken?: string,
): Observable<{}> => (
  Observable.create((observer) => {
    const req = new XMLHttpRequest();
    settingXHRrequest(req, config, accessToken);

    req.onload = () => {
      if (req.status === 200 || req.status === 201 || req.status === 204) {
        const data = req.response;
        observer.next(data);
        observer.complete();
      }

      observer.error(req.response);
      observer.complete();
    };

    req.onerror = (err) => {
      console.log({ err }); // eslint-disable-line no-console
    };
    // $FlowFixMe
    sendReq({ req, body });
  })
);

export const ajax = (
  config: {
    url: string,
    method: string
  },
  body?: {},
  isWithoutToken?: boolean = false,
) => (
  Observable.create((observer) => {
    if (Object.prototype.hasOwnProperty.call(tempStorage, 'accessToken')) {
      return request(config, body, tempStorage.accessToken)
        .subscribe((token) => {
          observer.next(token);
          observer.complete();
        }, (err) => {
          observer.error(err);
          observer.complete();
        });
    }

    const requestWithoutToken = () => (
      request(config, body)
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        }, (err) => {
          observer.error(err);
          observer.complete();
        })
    );

    const requestWithToken = () => (
      getItemStorage$(ACCESS_TOKEN_ASYNC_STORAGE)
        .pipe(
          tap(writeToTempStorage),
          mergeMap(token => (
            request(config, body, token)
          )),
        )
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        }, (err) => {
          observer.error(err);
          observer.complete();
        })
    );

    return R.ifElse(
      () => isWithoutToken,
      requestWithoutToken,
      requestWithToken,
    )();
  })
);
