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

class SomeDataScreen extends Component<PropsType> {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'SomeDataScreen',
    };
  };

  render() {
    return (
      <View>
        <Text>
          SomeDataScreen
        </Text>
      </View>
    );
  }
}

export default SomeDataScreen;
