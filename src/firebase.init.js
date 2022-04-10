// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADTDTIrckcUueuFqk9ll056FrCyJ_QEyY",
    authDomain: "genius-car-services-cea1f.firebaseapp.com",
    projectId: "genius-car-services-cea1f",
    storageBucket: "genius-car-services-cea1f.appspot.com",
    messagingSenderId: "915613135129",
    appId: "1:915613135129:web:e987e41b7cc6b9d4225588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;