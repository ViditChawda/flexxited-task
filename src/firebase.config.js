import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2csMwILkOUdpo0wsytMC-PfQTTm0cJdM",
    authDomain: "movies-eb4be.firebaseapp.com",
    projectId: "movies-eb4be",
    storageBucket: "movies-eb4be.appspot.com",
    messagingSenderId: "1014036669442",
    appId: "1:1014036669442:web:4fdd65fa07d8446e52f31b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);