// @flow
import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import AuthContainer from '../containers/AuthContainer';

type PropsType = {
  navigation: {
    state: {
      routeName: string
    },
    navigate: (args: { routeName: string, params: {} }) => void
  }
};

class SignUpScreen extends Component<PropsType> {
  static navigationOptions = {
    title: 'Sign Up',
  };

  navTo = ({ routeName, params }) => {
    this.props.navigation.navigate({ // eslint-disable-line react/destructuring-assignment
      routeName,
      params,
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <AuthContainer
        routeName={navigation.state.routeName}
        navTo={this.navTo}
      />
    );
  }
}

export default withNavigation(SignUpScreen);
