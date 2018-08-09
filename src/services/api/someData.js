// @flow
import { ajax } from './utils';

const authApi = {
  getSomeData: ({ limit, query }: { limit: number, query: string }) => (
    ajax({
      url: `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=rQQqpHDyg0dUAvDf8Cs4EOg7kC78HPd1&limit=${limit}`,
      method: 'GET',
    })
  ),
};

export default authApi;
