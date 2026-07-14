// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxZoHijE5CvmScaFpFyZJerYHcnFKB9hU",
  authDomain: "design-hive-interiors-b13c0.firebaseapp.com",
  projectId: "design-hive-interiors-b13c0",
  storageBucket: "design-hive-interiors-b13c0.firebasestorage.app",
  messagingSenderId: "680250444780",
  appId: "1:680250444780:web:df7125691349276a8d8ec9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };