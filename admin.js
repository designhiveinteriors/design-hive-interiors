import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxZoHijE5CvmScaFpFyZJerYHcnFKB9hU",
  authDomain: "design-hive-interiors-b13c0.firebaseapp.com",
  projectId: "design-hive-interiors-b13c0",
  storageBucket: "design-hive-interiors-b13c0.firebasestorage.app",
  messagingSenderId: "680250444780",
  appId: "1:680250444780:web:df7125691349276a8d8ec9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", async () => {

  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    document.getElementById("loginMessage").innerText =
      "Login successful!";

    window.location.href = "dashboard.html";

  } catch (error) {
    document.getElementById("loginMessage").innerText =
      error.message;
  }
});