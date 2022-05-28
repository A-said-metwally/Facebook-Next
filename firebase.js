import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjlisWWNchXHzFrPmBFy48lZO_0sNfxKc",
  authDomain: "facbook-492a0.firebaseapp.com",
  projectId: "facbook-492a0",
  storageBucket: "facbook-492a0.appspot.com",
  messagingSenderId: "310744845415",
  appId: "1:310744845415:web:f1a06565565120a1d1d8c2",
  measurementId: "G-VZJ8E5G69F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export const db = getFirestore(app);
