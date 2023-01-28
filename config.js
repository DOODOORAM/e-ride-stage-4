import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYYsKGG_A1wgxp6ILVxHZD3jp-hwjQbWY",
    authDomain: "e-ride-stage-4-3a1f5.firebaseapp.com",
    projectId: "e-ride-stage-4-3a1f5",
    storageBucket: "e-ride-stage-4-3a1f5.appspot.com",
    messagingSenderId: "1077433208645",
    appId: "1:1077433208645:web:b506ec934ec7943d08f82c",
    measurementId: "G-P31F3CMJFV"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
