// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVGusVBkxxeNDVZpHSH4x_RtP6-HndgU",
  authDomain: "cafe-cook-code.firebaseapp.com",
  projectId: "cafe-cook-code",
  storageBucket: "cafe-cook-code.appspot.com",
  messagingSenderId: "534388611148",
  appId: "1:534388611148:web:454751462f79c419f87ce9",
  measurementId: "G-JPL62J5D4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
