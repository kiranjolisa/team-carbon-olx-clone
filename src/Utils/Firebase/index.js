import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAA92-c4ODT5Fy26f4wu9EzWg0rWV_ifqw",
  authDomain: "olx-auth-46af4.firebaseapp.com",
  projectId: "olx-auth-46af4",
  storageBucket: "olx-auth-46af4.appspot.com",
  messagingSenderId: "649857775061",
  appId: "1:649857775061:web:70d858200dd9ad3dee795c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();
export {
  auth, storage, firebase as default
}