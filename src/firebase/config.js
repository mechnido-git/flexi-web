// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKZGGM13p1-fSQw79-WsKtU_0DMTb_eRM",
  authDomain: "flexi-8be52.firebaseapp.com",
  projectId: "flexi-8be52",
  storageBucket: "flexi-8be52.appspot.com",
  messagingSenderId: "107599377530",
  appId: "1:107599377530:web:fc72e128ee8ea4f92077c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {app, auth, db, storage };