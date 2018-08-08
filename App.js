// @flow
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import PreloadContainer from './src/navigation/containers/PreloadContainer';
import store from './src/redux/createStore';

type PropsType = {
  dispatch: (arg: () => void) => void,
  navigation: {
    routes: Array<{
      index: string
    }>
  }
};

class App extends Component<PropsType> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, navigation: nav } = this.props;

    if (nav && Array.isArray(nav.routes)
    && nav.routes.every(route => route.index === 0 || !route.index)) {
      return false;
    }
    // $FlowFixMe
    dispatch(NavigationActions.back());

    return true;
  };

  render() {
    return (
      <Provider store={store}>
        {/* $FlowFixMe */}
        <PreloadContainer />
      </Provider>
    );
  }
}

export default App;
