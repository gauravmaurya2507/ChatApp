// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUWvz5wdPCo78A69j4fblUuZinEC1bGxM",
  authDomain: "chatapp-e3311.firebaseapp.com",
  projectId: "chatapp-e3311",
  storageBucket: "chatapp-e3311.appspot.com",
  messagingSenderId: "1000778021965",
  appId: "1:1000778021965:web:b0c7297f51409182a57004",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
