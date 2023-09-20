// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsYx0bzqHZLJNJv6H9id9z9O4_RCfOv6Q",
  authDomain: "realtor-react-project-c1d8d.firebaseapp.com",
  projectId: "realtor-react-project-c1d8d",
  storageBucket: "realtor-react-project-c1d8d.appspot.com",
  messagingSenderId: "313671490056",
  appId: "1:313671490056:web:cf7db057f3e443aefe4fbd"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()