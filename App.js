import * as React from 'react';

import LogIn from './screens/LogIn';
import SecondScreen from './screens/secondScreen';
import ThirdScreen from './screens/thirdScreen';
import Settings from './screens/settingsScreen';
import FifthScreen from './screens/fifthScreen';
import SignUp from './screens/SignUp';

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

const Appstack = createStackNavigator({
  OurSettings: Settings,
  Fifth: FifthScreen,
});
const AppTab = createBottomTabNavigator({
  Profile: ThirdScreen,
  Home: SecondScreen, 
  Settings: Appstack,
});

const AppSwitch = createSwitchNavigator({
  LogIn: LogIn,
  SignUp: SignUp,
  Pro: AppTab,
});

const App = createAppContainer(AppSwitch);
export default App;
