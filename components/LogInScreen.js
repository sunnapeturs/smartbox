import React, { useState} from 'react';
import firebase from '../initFirebase';

import { StyleSheet, TextInput, View, Button} from 'react-native';

const LogIn = (props) =>{
  const [email, setEmail] = useState("sunnarun@sunna.is");
  ///const [password, setPassword] = useState("");
  const [password, setPassword] = useState("Sunnasunna");

  const emailValue = (enteredText) => {
    setEmail(enteredText);
  }
  const passwordValue = (enteredText,) => {
    setPassword(enteredText);
  }
  
  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user);
      if(user){
        fetch('http://localhost:10100/users')
        .then(r=>r.json())
        .then((res)=>{
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
        <TextInput  style={styles.input}
        onChangeText={emailValue} value={email} name="email" type="email"/>

        <TextInput  style={styles.input}
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