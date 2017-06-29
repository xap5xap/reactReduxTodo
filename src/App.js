/* @flow */

import React from 'react';

import {
  Platform,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

const AppRoutes = {
  Home: {
    name: 'Home',
    description: 'Home screen',
    screen: HomeScreen,
  },
};


const AppNavigator = StackNavigator(
  {
    ...AppRoutes,
  },
  {
    initialRouteName: 'Home',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  },
);

export default () => <AppNavigator />;

