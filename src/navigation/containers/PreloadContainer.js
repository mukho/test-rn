// @flow
import { createSwitchNavigator } from 'react-navigation';

import {
  AuthStackName,
  AppStackName,
} from '../ducks/constants';
import AuthScreens from './AuthScreens';
import AppScreens from './AppScreens';
import PreloadScreen from '../screens/PreloadScreen';

export default createSwitchNavigator(
  {
    AuthLoading: PreloadScreen,
    [AppStackName]: AppScreens,
    [AuthStackName]: AuthScreens,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
