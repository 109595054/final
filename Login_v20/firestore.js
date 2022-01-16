import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ4VxCrrETOrAJGFXlJKuGLS0fd8fq8o0",
    authDomain: "final-52d9c.firebaseapp.com",
    projectId: "final-52d9c",
    storageBucket: "final-52d9c.appspot.com",
    messagingSenderId: "140592425117",
    appId: "1:140592425117:web:617cb5e4d88f1c44040c74",
    measurementId: "G-H6D23R0KK8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const saveData = (username, email, password) =>
    addDoc(collection(db, "account"), { username, email, password });
export const searchData = (username) => (getDocs(query(collection(db, "account"), where("username", "==", username))));