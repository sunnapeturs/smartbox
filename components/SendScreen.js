// SendScreen.js
import React from 'react';
import { Header } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native';
import Barcode from 'react-native-barcode-builder';


const sendScreen = (props)=>  {

  const businessKey = props.navigation.state.params.key;
  console.log(businessKey)
//<barcode> value={buisnessKey}</barcode>
  return (


    <View>
      <Header
      rightComponent={{ icon: 'home', color: '#fff' }}
      leftComponent={{ icon: 'menu', color: '#fff' }} 
      />
      <View>
        <Text>Sending tókst</Text>
        <Barcode value={businessKey} text={businessKey} format="CODE128" />
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