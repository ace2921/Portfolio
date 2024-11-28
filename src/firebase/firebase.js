// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCw7ZhQ9I9Z4Y_FOu8POTlTpdbm3YikEOQ",
  authDomain: "numetro-portfolio.firebaseapp.com",
  projectId: "numetro-portfolio",
  storageBucket: "numetro-portfolio.firebasestorage.app",
  messagingSenderId: "230008739741",
  appId: "1:230008739741:web:3a22ffe5975fd26e1f8174",
  measurementId: "G-EKK2VVHMPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};