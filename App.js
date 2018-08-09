// @flow
import React from 'react';
import { Provider } from 'react-redux';

import PreloadContainer from './src/navigation/containers/PreloadContainer';
import store from './src/redux/createStore';

const App = () => (
  <Provider store={store}>
    {/* $FlowFixMe */}
    <PreloadContainer />
  </Provider>
);

export default App;
