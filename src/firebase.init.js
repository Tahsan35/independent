// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDApFzRjasAyrzFShxBQ2WHpjrROokVhcM",
  authDomain: "wedding-king-dom.firebaseapp.com",
  projectId: "wedding-king-dom",
  storageBucket: "wedding-king-dom.appspot.com",
  messagingSenderId: "244692378478",
  appId: "1:244692378478:web:d1061b0bc20f52b031977f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;