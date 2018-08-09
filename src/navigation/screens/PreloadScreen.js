// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

import { WelcomeScreenRoute, SomeDataRoute } from '../ducks/constants';

type PropsType = {
  navigation: {
    navigate: (routeName: string) => void
  }
};

class AuthLoadingScreen extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');
    // eslint-disable-next-line react/destructuring-assignment
    this.props.navigation.navigate(userToken ? SomeDataRoute : WelcomeScreenRoute);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
