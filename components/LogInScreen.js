import React, { useState} from 'react';
import firebase from '../initFirebase';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const LogIn = (props) =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValue = (enteredText) => {
    setEmail(enteredText);
  }
  const passwordValue = (enteredText,) => {
    setPassword(enteredText);
  }

  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
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
        <Text style={styles.headingTxt}>Innskráning</Text>
        <View style={styles.space64}></View>
        <Input
        label='Netfang:'
        labelStyle={{
          color: '#4E4E4E',
        }}
        placeholder=' netfang@netfang.com'
        onChangeText={emailValue}
        value={email}
        leftIconContainerStyle={{
          marginLeft: 0,
          marginRight: 8,
        }} 
        leftIcon={
          <Icon
            name='envelope'
            size={14}
            color='#4E4E4E'
            />
          }
        />
        <View style={styles.space24}></View>
        <Input
        label='Lykilorð:'
        placeholder='Þitt lykilorð'
        secureTextEntry={true}
        labelStyle={{
          color: '#4E4E4E',
        }}
        onChangeText={passwordValue}
        value={password}
        leftIconContainerStyle={{
          marginLeft: 0,
          marginRight: 8,
        }} 
        leftIcon={
          <Icon
            name='lock'
            size={16}
            color='#4E4E4E'
            />
          }
        />
        <View style={styles.space64}></View>
        <TouchableOpacity style={styles.btn} onPress={signIn}>
          <Text style={styles.btnTxt}>Skrá inn</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.img} source = {require('../assets/sign-in.png')} />  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160
  },
  img: {
    position: 'absolute',
    bottom: 0,
  },
  btn: {
    height: 48,
    borderRadius: '8',
    width: '100%',
    backgroundColor: '#0A9E9C',
    justifyContent: 'center',
    alignItems: 'center',  
  },
  btnTxt: {
    fontSize: 16,
    color: '#ffff',
    fontWeight: '600',
    letterSpacing: '2'
  },
  space24: {
    height: 24,
  },
  space40: {
    height: 40,
  },
  space64: {
    height: 64,
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#0A9E9C',
    textAlign: 'left',
    width: '100%'
  }
});
export default LogIn;