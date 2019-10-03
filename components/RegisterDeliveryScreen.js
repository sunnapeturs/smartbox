import React, { useState }  from 'react'
import { Header } from 'react-native-elements'
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';

const RegisterDelivery = (props) =>{

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderNr, setOrderNr] = useState('');

  const nameHandler = (enteredName) => {
    setFullname(enteredName);
  }
  const emailHandler = (enteredEmail) => {
    setEmail(enteredEmail);
  }
  const phoneHandler = (enteredPhone) => {
    setPhone(enteredPhone);
  }
  const orderNrHandler = (enteredOrderNr) => {
    setOrderNr(enteredOrderNr);
  }
  const goBack = () => {
    props.navigation.navigate('Home')
  }
  

  return (
    <View>
      <Header
      rightComponent={{ icon: 'home', color: '#fff' }}
      leftComponent={{ icon: 'menu', color: '#fff' }} 
      />
      <View>
        <Text>Skrá sendingu</Text>

        <Text>Viðtakandi:</Text>
        <TextInput placeholder="Viðtakandi" style={styles.input}
        name="name" type="text" keyboardType="default" onChangeText={nameHandler} value={fullname}/>

        <Text>Email:</Text>
        <TextInput placeholder="email" style={styles.input}
        name="email" type="email" keyboardType="email-address" onChangeText={emailHandler} value={email}/>
        
        <Text>Sími:</Text>
        <TextInput placeholder="Sími" style={styles.input}
        name="phone" type="text" keyboardType="phone-pad" onChangeText={phoneHandler} value={phone}/>

        <Text>Sendingar númer:</Text>
        <TextInput placeholder="Sendingarnúmer" style={styles.input}
        name="orderNr" type="text" keyboardType="number-pad" onChangeText={orderNrHandler} value={orderNr}/>

        <Button title="Hætta við" onPress={goBack}/>
        <Button title="senda upplýsingar" />
      </View>
    </View>
  )
}

// {
//   "senderOrderID": "77777777",
//   "description": "hhhhh",
//   "senderId": 9,
//   "numberOfPackages": 1,
//   "pickupAtDeliveryBranch": true,
//   "box": false,
//   "location": "hilla",
//   "recipient": { "email": "eee@eee.is",
//                   "phone": "7777777",
//                   "name": "Testari"
//                 }
// }

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
    marginBottom: 16,

  }
});

export default RegisterDelivery