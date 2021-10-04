// import * as firebase from 'firebase'
// import "firebase/database"
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"


const firebaseConfig = {
  apiKey: "AIzaSyAkBLbRGMUhSTbssWwTM-Y553nG9VePrcY",
  authDomain: "react-interviwer.firebaseapp.com",
  projectId: "react-interviwer",
  storageBucket: "react-interviwer.appspot.com",
  messagingSenderId: "356865191406",
  appId: "1:356865191406:web:5b81cc32378ccd5059f2ff",
  measurementId: "G-EG6G4FZGJC"
};

firebase.initializeApp(firebaseConfig);

export default firebase
