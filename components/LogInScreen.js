import React, { useState} from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native';

import firebase from '../initFirebase';

const LogIn = (props) =>{
  console.log(props)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValue = (enteredText) => {
    setEmail(enteredText);
  }
  const passwordValue = (enteredText,) => {
    setPassword(enteredText);
  }

  const signIn =  () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
      if(user){
        fetch('http://localhost:10100/users')
        .then(r=>r.json())
        .then((res)=>{
            console.log(res);
            console.log("singed in")
            props.navigation.navigate('Home')
        })
        .catch(err=>console.log(err));
      }
    })
    .catch(function(error) {
      console.log(error)
    });
  }
  return ( 
    <View style={styles.container}>     
      <View style={styles.inputContainer}>
        <TextInput placeholder="Netfang" style={styles.input}
        onChangeText={emailValue} value={email} name="email" type="email"/>

        <TextInput placeholder="Password" style={styles.input}
        onChangeText={passwordValue} value={password} name="password" type="text"/>

        <Button onPress={signIn} title="skrá inn"/>
      </View>
    </View>
  );
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
export default LogIn;