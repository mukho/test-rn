// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';

type PropsType = {};

class SomeDataScreen extends Component<PropsType> {
  static navigationOptions = {
    tabBarLabel: 'SomeDataScreen',
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
