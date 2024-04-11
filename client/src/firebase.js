// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-estate-bf728.firebaseapp.com",
  projectId: "real-estate-bf728",
  storageBucket: "real-estate-bf728.appspot.com",
  messagingSenderId: "1060270183995",
  appId: "1:1060270183995:web:4117eb1ab7d7ff1f172e1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);