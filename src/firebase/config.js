import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzmrSUFyapdflFmEt1z1d_YXeFzwnyHYw",
  authDomain: "proyecto-final-vignolles.firebaseapp.com",
  projectId: "proyecto-final-vignolles",
  storageBucket: "proyecto-final-vignolles.firebasestorage.app",
  messagingSenderId: "839984523309",
  appId: "1:839984523309:web:e671a536fc6f7d227470a4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);