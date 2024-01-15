// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA1yUs32xwKKDkMnTV4WRdjwQM6KAqnEk",
  authDomain: "netflixclone-akt.firebaseapp.com",
  projectId: "netflixclone-akt",
  storageBucket: "netflixclone-akt.appspot.com",
  messagingSenderId: "119771661826",
  appId: "1:119771661826:web:56179c1c211a635edac91b",
  measurementId: "G-TTDXLM2ZNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);

export {firebaseAuth};