// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDil5Zsuglb8eEtt3f3aegMSjaLikbOvTk",
  authDomain: "imigrantes-9d6df.firebaseapp.com",
  databaseURL: "https://imigrantes-9d6df-default-rtdb.firebaseio.com",
  projectId: "imigrantes-9d6df",
  storageBucket: "imigrantes-9d6df.appspot.com",
  messagingSenderId: "404625465831",
  appId: "1:404625465831:web:2cd00404a5193b99d01d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

