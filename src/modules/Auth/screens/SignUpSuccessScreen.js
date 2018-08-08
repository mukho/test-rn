// @flow
import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { InfoComponent } from '../components/InfoComponent';

type PropsType = {
  navigation: {
    state: {
      routeName: string
    },
    navigate: (args: { routeName: string, params?: {} }) => void
  }
};

class SignUpSuccessScreen extends Component<PropsType> {
  static navigationOptions = {
    header: null,
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
      <InfoComponent
        routeName={navigation.state.routeName}
        navTo={this.navTo}
      />
    );
  }
}

export default withNavigation(SignUpSuccessScreen);
