// import firebase from 'firebase';
// import 'firebase/firestore'
const firebase = require('firebase/app');
require('firebase/firestore');
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()