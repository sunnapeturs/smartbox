// Homescreen.js
import React from 'react';
import Header from './Header';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = (props)=>  {
  console.log(Object.keys(props));
  console.log(props);
  return (
    <View>
      <Header {...props}/>
      <Text>Velkomin í Smartbox</Text>
        <Button
        title="Skrá sendingu"
        onPress={() => props.navigation.navigate('RegisterDelivery')}
        />
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
