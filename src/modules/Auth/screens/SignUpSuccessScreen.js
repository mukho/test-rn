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

class SignUpSuccessScreen extends Component<PropsType> {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'SignUpSuccess',
    };
  };

  render() {
    return (
      <View>
        <Text>
          SignUpSuccess
        </Text>
      </View>
    );
  }
}

export default SignUpSuccessScreen;
