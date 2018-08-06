// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

type PropsType = {
  navigation: {
    setParams: ({ numberNotViewedJobs: number }) => void,
    state: {
      params: {
        numberNotViewedJobs: number
      }
    }
  },
  numberNotViewedJobs: number
};

class SignUpScreen extends Component<PropsType> {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Login',
    };
  };

  render() {
    return (
      <View>
        <Text>
          SignUp
        </Text>
      </View>
    );
  }
}

export default SignUpScreen;
