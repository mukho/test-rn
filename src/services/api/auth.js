// @flow
import { ajax } from './utils';

const authApi = {
  getToken: (email: string, password: string) => (
    ajax({
      url: `https://jsonblob.com/api/jsonBlob/6bfa4f0d-9b2d-11e8-b03b-37b30a3fd403?email=${email}&password=${password}`,
      method: 'GET',
    }, {}, true)
  ),
  signUp: (email: string, password: string) => (
    ajax({
      url: 'https://jsonblob.com/api/jsonBlob',
      method: 'POST',
    }, {
      email,
      password,
      token: 'token', // mock for jsonBlob
    }, true)
  ),
};

export default authApi;
