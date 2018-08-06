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

class WelcomeScreen extends Component<PropsType> {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Welcome',
    };
  };

  render() {
    return (
      <View>
        <Text>
          Welcome
        </Text>
      </View>
    );
  }
}

export default WelcomeScreen;
