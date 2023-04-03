import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMxGdZ3Xp4-ZOVDa-AIhN9XKiQQfhFnTQ",
  authDomain: "elis-ian-salon.firebaseapp.com",
  projectId: "elis-ian-salon",
  storageBucket: "elis-ian-salon.appspot.com",
  messagingSenderId: "339128211026",
  appId: "1:339128211026:web:e1954129069ec97710718b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();