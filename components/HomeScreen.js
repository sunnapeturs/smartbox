// Homescreen.js
import React from 'react';
import Header from './Header';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = (props)=>  {
  return (
    <View>
      <Header/>
      <View>
        <Button 
        title="menu"
        onPress={() => props.navigation.toggleDrawer()}
        />

        <Text>Velkomin í Smartbox</Text>
          <Button
          title="Skrá sendingu"
          onPress={() => props.navigation.navigate('RegisterDelivery')}
          />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 382,
    height: 48,
    backgroundColor: '#FBFBFB',
  }
});

export default HomeScreen
