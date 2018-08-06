// @flow
import { createStackNavigator } from 'react-navigation';

import {
  LogInRoute,
  SignUpRoute,
  SignUpSuccessRoute,
  WelcomeScreenRoute,
} from '../ducks/constants';
import LogInScreen from '../../modules/Auth/screens/LogInScreen';
import SignUpScreen from '../../modules/Auth/screens/SignUpScreen';
import SignUpSuccessScreen from '../../modules/Auth/screens/SignUpSuccessScreen';
import WelcomeScreen from '../../modules/Auth/screens/WelcomeScreen';

const AuthStack = createStackNavigator({
  [LogInRoute]: LogInScreen,
  [SignUpRoute]: SignUpScreen,
  [SignUpSuccessRoute]: SignUpSuccessScreen,
  [WelcomeScreenRoute]: WelcomeScreen,
});

export default AuthStack;
