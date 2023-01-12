
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "", // Key to identify which firebase project to connect dont Worry about anything 
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const fileStorage = getStorage(app);
export const auth = getAuth();




