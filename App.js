// App.js
import React, {useState} from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './components/HomeScreen';
import LogInScreen from './components/LogInScreen';
import RegisterDeliveryScreen from './components/RegisterDeliveryScreen';


export default ()=> { 
  const [user, setUser] = useState("");
  const test = "testing"
  return <AppContainer test = {test} />;
}

const AppNavigator = createDrawerNavigator({
  LogIn: {
    screen: (props)=> <LogInScreen hi="hello"></LogInScreen>
  },
  Home: {
    screen: HomeScreen
  },
  RegisterDelivery: {
    screen: RegisterDeliveryScreen
  },
},{
    initialRouteName: "LogIn"
});

const AppContainer = createAppContainer(AppNavigator);

