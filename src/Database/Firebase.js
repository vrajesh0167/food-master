// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlqGvQ54BF9EN0Y1B9bieRDq6zpxSB5PM",
    authDomain: "food-master-708f9.firebaseapp.com",
    databaseURL: "https://food-master-708f9-default-rtdb.firebaseio.com",
    projectId: "food-master-708f9",
    storageBucket: "food-master-708f9.appspot.com",
    messagingSenderId: "714755180601",
    appId: "1:714755180601:web:0ce52d940f6decc328e5e8",
    // measurementId: "G-NJBLG3NLPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

