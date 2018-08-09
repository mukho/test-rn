// @flow
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { SomeDataRoute } from '../ducks/constants';
import SomeDataScreen from '../../modules/SomeData/screens/SomeDataScreen';
import { Menu } from '../components/Menu';
import styles from '../navigation.styles';

const AppStack = createStackNavigator({
  // $FlowFixMe
  [SomeDataRoute]: SomeDataScreen,
}, {
  navigationOptions: {
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: [styles.headerStyle, styles.headerStyleNoBorder],
    headerRight: <Menu />,
    headerLeft: <View />,
  },
});

export default AppStack;
