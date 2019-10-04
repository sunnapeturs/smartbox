// App.js
import React, { useState } from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './components/HomeScreen';
//import Header from './components/Header';
import LogInScreen from './components/LogInScreen';
import RegisterDeliveryScreen from './components/RegisterDeliveryScreen';
import SendScreen from './components/SendScreen';

export default ()=> { 
  return <AppContainer />;
}

const AppNavigator = createDrawerNavigator({
  LogIn: {
    screen: LogInScreen

  },
  Home: {
    screen: HomeScreen
  },
  RegisterDelivery: {
    screen: RegisterDeliveryScreen
  },
  Send: {
    screen: SendScreen
  },
},{
    initialRouteName: "LogIn"
});

const AppContainer = createAppContainer(AppNavigator);

