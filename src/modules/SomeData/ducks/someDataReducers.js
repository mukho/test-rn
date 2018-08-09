// @flow
import * as someDataActions from './someDataActions';

const reducer = (state: {
  data: Array<{}>
} = {
  data: [],
}, action: {
  type: string,
  data: Array<{
    id: string,
    title: string,
    images: {
      fixed_height: {
        width: string,
        url: string,
        height: string
      }
    }
  }>
}) => {
  switch (action.type) {
    case someDataActions.SOME_DATA_GET_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case someDataActions.SOME_DATA_CLEAR_DATA:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
