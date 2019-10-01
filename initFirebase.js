import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhLFBWPvzvD7yrUx48vG_70rcbJSMfpQE",
    authDomain: "smartbox-origo.firebaseapp.com",
    databaseURL: "https://smartbox-origo.firebaseio.com",
    projectId: "smartbox-origo",
    storageBucket: "",
    messagingSenderId: "287397575482",
    appId: "1:287397575482:web:5cdf3893a4a95b3c96ae03",
    measurementId: "G-RWGP8RYET0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;
