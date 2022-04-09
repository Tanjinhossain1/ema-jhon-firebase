// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb-iLtW97t417lan4YKX-DjKS37s9Qibk",
  authDomain: "ema-jhon-firebase-a1111.firebaseapp.com",
  projectId: "ema-jhon-firebase-a1111",
  storageBucket: "ema-jhon-firebase-a1111.appspot.com",
  messagingSenderId: "652854719233",
  appId: "1:652854719233:web:bd9ab1e371835b90b52100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;