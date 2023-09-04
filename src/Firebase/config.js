import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5JpekwKtHaq1_UCDs3rlI-Fo_SH1B3aY",
  authDomain: "blog-c22e4.firebaseapp.com",
  projectId: "blog-c22e4",
  storageBucket: "blog-c22e4.appspot.com",
  messagingSenderId: "850956201976",
  appId: "1:850956201976:web:5e61fb939b9f742bfe300d",
  measurementId: "G-0GB7GRQ493"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};