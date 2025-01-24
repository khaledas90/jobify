import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyBelZTJlK3TdE11QUSj-byrVwPEBUdvu3o",
  authDomain: "skillhive-a0543.firebaseapp.com",
  projectId: "skillhive-a0543",
  storageBucket: "skillhive-a0543.firebasestorage.app",
  messagingSenderId: "148931814211",
  appId: "1:148931814211:web:d0a68d237cdb638578c5f6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
