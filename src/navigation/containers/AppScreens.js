// @flow
import { createStackNavigator } from 'react-navigation';

import { SomeDataRoute } from '../ducks/constants';
import SomeDataScreen from '../../modules/SomeData/screens/SomeDataScreen';

const AppStack = createStackNavigator({
  [SomeDataRoute]: SomeDataScreen,
});

export default AppStack;
