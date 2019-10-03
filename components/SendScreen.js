// SendScreen.js
import React from 'react';
import { Header } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native';


const sendScreen = (props)=>  {
  return (
    <View>
      <Header
      rightComponent={{ icon: 'home', color: '#fff' }}
      leftComponent={{ icon: 'menu', color: '#fff' }} 
      />
      <View>
        <Text>Sending tókst</Text>
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

export default sendScreen