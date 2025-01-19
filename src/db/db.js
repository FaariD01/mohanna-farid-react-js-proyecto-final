// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGb251hJXm6JL3j3lWLjxDn5OQ2iWacLY",
  authDomain: "my-new-proyect-b7f8b.firebaseapp.com",
  projectId: "my-new-proyect-b7f8b",
  storageBucket: "my-new-proyect-b7f8b.firebasestorage.app",
  messagingSenderId: "648108928926",
  appId: "1:648108928926:web:e087bbf9e2a49fb466308f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;