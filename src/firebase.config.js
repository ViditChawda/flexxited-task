// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2csMwILkOUdpo0wsytMC-PfQTTm0cJdM",
    authDomain: "movies-eb4be.firebaseapp.com",
    projectId: "movies-eb4be",
    storageBucket: "movies-eb4be.appspot.com",
    messagingSenderId: "1014036669442",
    appId: "1:1014036669442:web:4fdd65fa07d8446e52f31b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
