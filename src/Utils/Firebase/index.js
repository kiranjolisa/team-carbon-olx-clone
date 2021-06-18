import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    // apiKey: "AIzaSyDKnO_z481mckdO90POuEjfUovJ24azwYA",
    // authDomain: "olx-clone-image-store.firebaseapp.com",
    // projectId: "olx-clone-image-store",
    // storageBucket: "olx-clone-image-store.appspot.com",
    // messagingSenderId: "285774915620",
    // appId: "1:285774915620:web:d0073d534ec9af161810b1",
    // measurementId: "G-0RRHV3MLVH"

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