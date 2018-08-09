// @flow
export const SOME_DATA_GET = 'some/data/get';
export const SOME_DATA_GET_SUCCESS = 'some/data/get/success';
export const SOME_DATA_GET_ERROR = 'some/data/get/error';
export const SOME_DATA_CLEAR_DATA = 'some/data/clear/data';

export const getSomeData = ({ limit, query }: {
  limit: number, query: string
}) => ({
  type: SOME_DATA_GET,
  limit,
  query,
});

export const getSomeDataSuccess = ({ data }: { data: Array<{
  id: string,
  title: string,
  images: {
    fixed_height: {
      width: string,
      url: string,
      height: string
    }
  }
}>}) => ({
  type: SOME_DATA_GET_SUCCESS,
  data,
});

export const getSomeDataError = (error: {}) => ({
  type: SOME_DATA_GET_ERROR,
  error,
});

export const clearData = () => ({
  type: SOME_DATA_CLEAR_DATA,
});
