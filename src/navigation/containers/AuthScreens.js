import React from 'react';
import { createStackNavigator } from 'react-navigation';

import {
  LogInRoute,
  SignUpRoute,
  SignUpSuccessRoute,
  WelcomeScreenRoute,
} from '../ducks/constants';
import HeaderBackIcon from '../components/HeaderBackIcon';
import styles from '../navigation.styles';

import LogInScreen from '../../modules/Auth/screens/LogInScreen';
import SignUpScreen from '../../modules/Auth/screens/SignUpScreen';
import SignUpSuccessScreen from '../../modules/Auth/screens/SignUpSuccessScreen';
import WelcomeScreen from '../../modules/Auth/screens/WelcomeScreen';

export const AuthStack = createStackNavigator({
  [WelcomeScreenRoute]: WelcomeScreen,
  [LogInRoute]: LogInScreen,
  [SignUpRoute]: SignUpScreen,
  [SignUpSuccessRoute]: SignUpSuccessScreen,
}, {
  navigationOptions: ({ navigation }) => ({
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: [styles.headerStyle, styles.headerStyleNoBorder],
    headerLeft: <HeaderBackIcon clickAction={() => navigation.goBack()} />,
  }),
});

export default AuthStack;
