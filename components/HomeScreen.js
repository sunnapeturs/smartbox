// Homescreen.js
import React from 'react';
import Header from './Header';
import { TouchableOpacity , View, StyleSheet, Text, Image } from 'react-native';
import { Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

const HomeScreen = (props)=>  {
  return (  
    <View style={styles.headerContainer}>
      <Header {...props}/>
      <View style={styles.container}>
        <View style={styles.homeContent}>
          <View style={styles.textBox}>
            <View style={styles.boxHeader}>
              <Text style={styles.headingTxt}>Hæ Sunna!</Text>
              <Avatar
              rounded
              source={{
              uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              />
            </View>
            <Text style={styles.text}>Velkomin á Snajallboxið Lorem Ipsum is simply dummy text of the printing and typesetting </Text>
            </View>
            <View style={styles.space40}></View>
            <Input
            label='Finna sendingu:'
            labelStyle={{
              color: '#4E4E4E',
            }}
            placeholder='Sendingarnúmer'      
            />     
          <View style={styles.space40}></View>
          <TouchableOpacity style={styles.btn}  onPress={() => props.navigation.navigate('RegisterDelivery')}>
            <Text style={styles.btnTxt}> Skrá nýja sendingu </Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.img} source = {require('../assets/home.png')} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeContent:{
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox:{
    width: '100%',
    justifyContent: 'flex-start',
  },
  btn: {
    marginTop: 40,
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
  text: {
    lineHeight: 24,
    color: '#4E4E4E',
  },
  Img: {
   position: "absolute",
   bottom: 0,
  },
  space24: {
    height: 24,
  },
  space40: {
    height: 40,
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#0A9E9C',
    textAlign: 'left',
    marginBottom: 16,
    paddingRight: 16
  },
  boxHeader:{
    flexDirection: 'row',
    width: '80%',
    justifyContent:'flex-start',
  }
});

export default HomeScreen
