import React  from 'react'
import { Header } from 'react-native-elements'
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';

const RegisterDelivery =(props) =>{
    return (
      <View>
      <Header
      rightComponent={{ icon: 'home', color: '#fff' }}
      leftComponent={{ icon: 'menu', color: '#fff' }} 
      />
      <View>
      <Text>Skrá sendingu</Text>

      <TextInput placeholder="Viðtakandi" style={styles.input}
       name="name" type="text"/>

      <TextInput placeholder="email" style={styles.input}
       name="email" type="email"/>

      <TextInput placeholder="Sími" style={styles.input}
       name="phone" type="text"/>

      <Button title="senda upplýsingar"/>
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

export default RegisterDelivery