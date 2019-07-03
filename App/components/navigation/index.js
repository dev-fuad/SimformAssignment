import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { Screens } from '../../constants';
import LoginScreen from '../screens/login';

const AppNavigation = createSwitchNavigator({
  [Screens.login]: LoginScreen,
});

export default createAppContainer(AppNavigation);
