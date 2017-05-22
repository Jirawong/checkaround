/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import Login from './src/scenes/Login';
import List from './src/scenes/List';
import Message from './src/scenes/Message';
import Checkin from './src/scenes/Checkin';
import Notify from './src/scenes/Notify';
import { TabNavigator } from 'react-navigation';

const checkaround = TabNavigator({
  List: { screen: List },
  Message: { screen: Message },
  Checkin: { screen: Checkin },
  Notify: { screen: Notify },
  Home: { screen: Login }
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false
  }
});


AppRegistry.registerComponent('checkaround', () => checkaround);
