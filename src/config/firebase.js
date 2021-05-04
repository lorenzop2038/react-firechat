import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAyqBM3_dlRBmhfHVzlT0Ge-ntEWlvKWSY",
    authDomain: "firechat-test-d8a2d.firebaseapp.com",
    projectId: "firechat-test-d8a2d",
    storageBucket: "firechat-test-d8a2d.appspot.com",
    messagingSenderId: "357937782271",
    appId: "1:357937782271:web:076d7669e39effb6b6dbca",
    measurementId: "G-X4WMD8ZG6J"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}