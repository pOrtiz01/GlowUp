// Import the functions you need from the SDKs you need
import { initializeApp,getApps} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
//import {getAuth} from "C:/Users/Pablo/GlowUp/firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPSpqR828hm3GaEsHRRlpz86938e37D-Y",
  authDomain: "glowup-6bae3.firebaseapp.com",
  projectId: "glowup-6bae3",
  storageBucket: "glowup-6bae3.appspot.com",
  messagingSenderId: "702972676039",
  appId: "1:702972676039:web:3c015211043e6e1c443be2"
};

// Initialize Firebase

let app;
if (!getApps().length){
    
    app = initializeApp(firebaseConfig);
  }
else{
    app = getApps()
}

const auth = getAuth(app)
export {auth};
