import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDd-Ze33rgo-_u7l8IJdw1aOCfituTmeRo",
    authDomain: "linkedin-ac575.firebaseapp.com",
    projectId: "linkedin-ac575",
    storageBucket: "linkedin-ac575.appspot.com",
    messagingSenderId: "176905951288",
    appId: "1:176905951288:web:4aafbf550e445e474deecd",
    measurementId: "G-K3JSRBHMLK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth()

  export {db,auth} ;
