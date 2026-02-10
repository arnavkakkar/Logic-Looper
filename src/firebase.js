// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7SqHIReBIZZMhNIG320jRZLhytpyvOr8",
  authDomain: "logic-looper-f0df6.firebaseapp.com",
  projectId: "logic-looper-f0df6",
  storageBucket: "logic-looper-f0df6.firebasestorage.app",
  messagingSenderId: "558465601854",
  appId: "1:558465601854:web:2a17657d202d66104cdc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);