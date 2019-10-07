import React from 'react';
import { Header } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native';

const HeaderNav = (props)=>  {

  return (
    <View>
      <Header
      rightComponent={{ icon: 'menu',size: 40, onPress:() => props.navigation.toggleDrawer(), color: '#0A9E9C' }}
      leftComponent={<Text style={styles.bold} >BOX</Text>}
      containerStyle={{
        backgroundColor: '#fff',
      }} 
      />
    </View>
  )
}
const styles = StyleSheet.create({
  bold: {
    fontSize: 24,
    color: '#0A9E9C',
    fontWeight: 'bold',
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

export default HeaderNav;
