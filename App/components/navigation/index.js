import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import { Screens } from '../../constants';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import HomeScreen from '../screens/home';

const AppNavigation = createSwitchNavigator({
  [Screens.login]: LoginScreen,
  [Screens.register]: RegisterScreen,
  [Screens.home]: HomeScreen,
});

export default createAppContainer(AppNavigation);
