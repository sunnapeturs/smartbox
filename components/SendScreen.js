// SendScreen.js
import React from 'react';
import Header from './Header';
import { View, Text, StyleSheet } from 'react-native';
import Barcode from 'react-native-barcode-builder';

  const sendScreen = (props) =>  {
    const businessKey = props.navigation.state.params.key;
    return (
      <View style={styles.container}> 
        <Header {...props}/>
        <View style={styles.contentContainer}>
          <Text style={styles.headingTxt}>Skráning tókst!</Text>

          <View style={styles.ticket}>
            <Text style={styles.ticketText}>
              Skráning:   í box
            </Text>
            <Text style={styles.ticketText}>
              Staða:    Óafhent
            </Text>
            <Text style={styles.ticketText}>
              Viðtakandi:     Sunna Pétursdóttir
            </Text>
            <Text style={styles.ticketText}>
              Netfang:     sunnarun@sunna.is
            </Text>
            <Text style={styles.ticketText}>
              Fjöldi pakka:     1
            </Text>
            <Text style={styles.ticketText}>
              Pöntunarnr.:     3463
            </Text>
            <View style={styles.space40}></View>
            <Barcode value={businessKey} text={businessKey} format="CODE128" />
          </View>      
        </View>
      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer:{
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    margin:16
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#0A9E9C',
    textAlign: 'left',
    width: '100%',
    marginBottom: 48,
    marginTop: 48
  },
  ticket: {
    width:'90%',
    margin: 24,
    backgroundColor:'F6F6F6',
    textAlign: 'left',  
  },
  ticketText:{
    fontSize: 16,
    fontWeight:'600',
    lineHeight: 40,
    alignItems:'center',
    color: '#4E4E4E',
    letterSpacing: 1
  },
  space40:{
    height: 40,
  }
});

export default sendScreen