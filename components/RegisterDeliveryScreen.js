import React, { useState }  from 'react'
import firebase from '../initFirebase';
import '@firebase/firestore';
import Header from './Header';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const db = firebase.firestore();

const RegisterDelivery = (props) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfPackages, setNumberOfPackages] = useState('');
  const [userid, setUserid] = useState('');

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
  .then(r=>
    r.text()
  )
  .then(bkey =>{
    console.log("þetta er key", bkey)
    props.navigation.navigate('Send',{key:bkey})
  })
}
return (
  <View style={styles.container}>
    <Header {...props}/>
    <View style={styles.boxContainer}>
      <View style={styles.contentContainer}>        
        <Text style={styles.headingTxt}>Skrá sendingu</Text>
        <Input
        label='Viðtakandi:'
        labelStyle={{
          color: '#4E4E4E',
        }}
        placeholder='Nafn viðtakanda'
        onChangeText={setName}
        value={name}
        keyboardType="default"
        leftIconContainerStyle={{
          marginLeft: 0,
          marginRight: 8,
        }} 
        leftIcon={
          <Icon
            name='user'
            size={14}
            color='#4E4E4E'
            />
          }
        />
        <View style={styles.space24}></View>
        <Input
        label='Netfang:'
        labelStyle={{
          color: '#4E4E4E',
        }}
        placeholder='Netfang viðtakanda'
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
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
        label='Sími:'
        labelStyle={{
          color: '#4E4E4E',
          }}
        placeholder='Sími viðtakanda'
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
        leftIconContainerStyle={{
          marginLeft: 0,
          marginRight: 8,
          }} 
          leftIcon={
            <Icon
              name='phone'
              size={14}
              color='#4E4E4E'
            />
          }
        />
        <View style={styles.space24}></View>
        <Input
        label='Fjöldi Pakka:'
        labelStyle={{
          color: '#4E4E4E',
        }}
        placeholder='Fjöldi pakka'
        defaultValue='1' 
        onChangeText={setNumberOfPackages}
        value={numberOfPackages}
        keyboardType="default"
        leftIconContainerStyle={{
          marginLeft: 0,
          marginRight: 8,
        }} 
        leftIcon={
          <Icon
            name='archive'
            size={14}
            color='#4E4E4E'
            />
          }
        />
        <TouchableOpacity style={styles.btn} onPress={sendDelivery}>
            <Text style={styles.btnTxt}> Skrá sendingu </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
}
const styles = StyleSheet.create({
container: {
  flex: 1,
},
boxContainer: {
  width: '100%',
  alignItems: 'center',
  flex: 1
},
contentContainer: {
  width: '90%', 
  justifyContent: 'center',
  alignItems: 'center',    
},
headingTxt: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'left',
  color: '#4E4E4E',
  textAlign: 'left',
  width: '100%',
  marginBottom: 48,
  marginTop: 60
},
inputContainer: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
btn: {
  marginTop: 64,
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
  height: 40,
}
});
export default RegisterDelivery