import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDKnO_z481mckdO90POuEjfUovJ24azwYA",
    authDomain: "olx-clone-image-store.firebaseapp.com",
    projectId: "olx-clone-image-store",
    storageBucket: "olx-clone-image-store.appspot.com",
    messagingSenderId: "285774915620",
    appId: "1:285774915620:web:d0073d534ec9af161810b1",
    measurementId: "G-0RRHV3MLVH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}