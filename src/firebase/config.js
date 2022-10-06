import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBaZFa_kEzhR31jdFv_Em8v0PslYWgOZCE",
    authDomain: "fir-5a5d1.firebaseapp.com",
    projectId: "fir-5a5d1",
    storageBucket: "fir-5a5d1.appspot.com",
    messagingSenderId: "250216229950",
    appId: "1:250216229950:web:e0a388014cf25e809df56f",
    measurementId: "G-7PCXZ4LDL3"
})

const db =firebaseApp.firestore()
const auth = firebase.auth();
const storage=firebase.storage()

export {db,auth,storage}    