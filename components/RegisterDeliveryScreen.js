import React, { useState }  from 'react'
import firebase from '../initFirebase';
import '@firebase/firestore';
import Header from './Header';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';

const db = firebase.firestore();


const RegisterDelivery = (props) =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfPackages, setNumberOfPackages] = useState('');
  const [userid, setUserid] = useState('');

  console.log("Notandi ",firebase.auth().currentUser.uid)

  db.collection("smartbox").doc(firebase.auth().currentUser.uid).get().then(doc => {
    const getID = doc.data().userid;
    setUserid(getID);
    console.log("firebase id ",getID)
  })  

  const sendDelivery = ()=> {
    fetch('http://localhost:3001/post-order', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          phone,
          numberOfPackages,
          userid
        })
    })
    // console.log('gögn send á server')
    // props.navigation.navigate('Send');

  
  .then(r=>
    r.text()
  )
  .then(bkey =>{
    console.log("þetta er key", bkey)
    props.navigation.navigate('Send',{key:bkey})
    // props.setBusinessKey(bkey,{})
  })
  
  }

  return (
    <View>
      <Header {...props}/>
      <View>
        <Text>Skrá sendingu</Text>

        <Text>Viðtakandi:</Text>
        <TextInput placeholder="Viðtakandi" style={styles.input} keyboardType="default" onChangeText={setName} value={name}/>

        <Text>Email:</Text>
        <TextInput placeholder="email" style={styles.input} keyboardType="email-address" onChangeText={setEmail} value={email}/>
        
        <Text>Sími:</Text>
        <TextInput placeholder="Sími" style={styles.input} keyboardType="phone-pad" onChangeText={setPhone} value={phone}/>

        <Text>Sendingar númer:</Text>
        <TextInput placeholder="Sendingarnúmer" style={styles.input} keyboardType="default" onChangeText={setNumberOfPackages} value={numberOfPackages}/>

        <Button title="senda upplýsingar" onPress={sendDelivery}/>
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
    marginBottom: 16,

  }
});

export default RegisterDelivery