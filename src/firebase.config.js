// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEStDsGkyeXXqxvXM0KEyPLG5kIGnx01g",
  authDomain: "house-marketplace-projec-a41a7.firebaseapp.com",
  projectId: "house-marketplace-projec-a41a7",
  storageBucket: "house-marketplace-projec-a41a7.appspot.com",
  messagingSenderId: "985032065280",
  appId: "1:985032065280:web:d18af7616d89252debf3e5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore();
