// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnZ9hmrSZTA_rPB1higWSlD3L8I1OxWDQ",
  authDomain: "job-portal-88232.firebaseapp.com",
  projectId: "job-portal-88232",
  storageBucket: "job-portal-88232.firebasestorage.app",
  messagingSenderId: "518781758535",
  appId: "1:518781758535:web:cff7ab4e799ec392f41562",
  measurementId: "G-28FTWPJPZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// export default app;

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;