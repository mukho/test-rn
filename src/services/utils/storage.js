// @flow
import { from, Observable } from 'rxjs';
import { AsyncStorage } from 'react-native';

export const getItemStorage$: (i: string) => Observable<string> = item => (
  from(AsyncStorage.getItem(item))
);

export const setItemStorage$: (key: string, value: string) => Observable<string> = (key, value) => (
  from(AsyncStorage.setItem(key, value))
);
