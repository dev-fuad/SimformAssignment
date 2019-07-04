import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { Screens } from '../../constants';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';

const AppNavigation = createSwitchNavigator({
  [Screens.login]: LoginScreen,
  [Screens.register]: RegisterScreen,
});

export default createAppContainer(AppNavigation);
