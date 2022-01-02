import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAxCfiCSg8Ld_T1Z8CxrR1jf4lEPHxj2hQ",
  authDomain: "journal-app-8ea40.firebaseapp.com",
  projectId: "journal-app-8ea40",
  storageBucket: "journal-app-8ea40.appspot.com",
  messagingSenderId: "470371265956",
  appId: "1:470371265956:web:76a5758fb11be597076531"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
	db,
	googleAuthProvider,
	firebase
}