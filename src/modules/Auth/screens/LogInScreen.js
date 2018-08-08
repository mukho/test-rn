// @flow
import React, { Component } from 'react';

import AuthContainer from '../containers/AuthContainer';

type PropsType = {
  navigation: {
    state: {
      routeName: string
    }
  }
};
class LoginScreen extends Component<PropsType> {
  static navigationOptions = {
    title: 'Log In',
  };

  render() {
    const { navigation } = this.props;

    return (
      <AuthContainer
        routeName={navigation.state.routeName}
      />
    );
  }
}

export default LoginScreen;
