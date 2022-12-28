import firebase from "firebase";
import React from "react";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwk_cCBi3a0ydh0CC-dUo8IpEsAuuhBxI",
    authDomain: "clone-359ed.firebaseapp.com",
    projectId: "clone-359ed",
    storageBucket: "clone-359ed.appspot.com",
    messagingSenderId: "1023367568502",
    appId: "1:1023367568502:web:253679460de715864a9357",
    measurementId: "G-HS68CGRB5D"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export default {db,auth};