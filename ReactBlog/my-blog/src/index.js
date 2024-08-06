import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDb7dlQXlrsvOFRqpp5BWjr8yS4QDXhI88",
  authDomain: "my-react-blog-22344.firebaseapp.com",
  projectId: "my-react-blog-22344",
  storageBucket: "my-react-blog-22344.appspot.com",
  messagingSenderId: "283971863825",
  appId: "1:283971863825:web:799b7f0fffd632a87038b0",
  measurementId: "G-H4RH0HJVDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


