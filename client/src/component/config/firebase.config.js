// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGHdkSsKM9YvXnYROrWitKNdG4TMj_W_c",
  authDomain: "music-6f675.firebaseapp.com",
  projectId: "music-6f675",
  storageBucket: "music-6f675.appspot.com",
  messagingSenderId: "434335305668",
  appId: "1:434335305668:web:3cf025d5647b4939741e91",
  measurementId: "G-D2Z7TZ5RGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {
  storage
}