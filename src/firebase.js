// Import the functions you need from the SDKs you need
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCOiyQLbBFnRz56V2VJfhBuDTNCsSZast4',
  authDomain: 'netflix-281d1.firebaseapp.com',
  projectId: 'netflix-281d1',
  storageBucket: 'netflix-281d1.appspot.com',
  messagingSenderId: '318459191319',
  appId: '1:318459191319:web:33ba85a5bf5f23204e3c52',
  measurementId: 'G-GNWXMYH32Q',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
