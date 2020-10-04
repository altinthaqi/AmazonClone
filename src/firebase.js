import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA4PPMyHB18fXIk571RzwVJZIPjHX_RPIM",
    authDomain: "clone-882dc.firebaseapp.com",
    databaseURL: "https://clone-882dc.firebaseio.com",
    projectId: "clone-882dc",
    storageBucket: "clone-882dc.appspot.com",
    messagingSenderId: "242900698629",
    appId: "1:242900698629:web:5063f4cb7ccc924e20be6c",
    measurementId: "G-B46BS8FC14"
});

const auth = firebase.auth();

export {auth};