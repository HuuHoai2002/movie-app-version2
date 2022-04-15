import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFjd0D1pUt4B9dbzqoYckRSfiD93k3Tkk",
  authDomain: "movie-app-6ff8b.firebaseapp.com",
  projectId: "movie-app-6ff8b",
  storageBucket: "movie-app-6ff8b.appspot.com",
  messagingSenderId: "69797564710",
  appId: "1:69797564710:web:0b8b6e2937f75c4039b1e7",
  measurementId: "G-L6MPFPYEP7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
