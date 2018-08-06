// @flow
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import {
  LogInRoute,
  SignUpRoute,
  SomeDataRoute,
  WelcomeScreenRoute,
} from '../ducks/constants';
import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';
import AuthLoadingScreen from '../AppScreens';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    [SomeDataRoute]: AppScreens,
    [WelcomeScreenRoute]: AuthScreens,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
