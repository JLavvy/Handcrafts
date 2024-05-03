// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCU7KEbko0vImZp9yWHqq6RO6PZ84oxBSc",
  authDomain: "craftyartisanmarket.firebaseapp.com",
  projectId: "craftyartisanmarket",
  storageBucket: "craftyartisanmarket.appspot.com",
  messagingSenderId: "1034699994605",
  appId: "1:1034699994605:web:d7435102896a111dbae3e4",
  measurementId: "G-W3LB5B2ZJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);