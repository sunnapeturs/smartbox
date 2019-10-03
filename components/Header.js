import React from 'react';
import { Header } from 'react-native-elements'
import { Button, View, StyleSheet } from 'react-native';

const HeaderNav = (props)=>  {
  console.log("now in header");
  console.log(Object.keys(props));
  console.log(props);
  //console.log(props);
  //console.log(navigation);
  return (
    <View>
      <Header
      rightComponent={{ icon: 'home', color: '#fff' }}
      leftComponent={{ icon: 'menu', color: '#fff' }} 
      />
        <Button 
        title="menu"
        onPress={() => props.navigation.toggleDrawer()}
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

export default HeaderNav;
