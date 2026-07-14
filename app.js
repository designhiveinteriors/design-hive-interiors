import { db } from "./firebase-config.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("consultationForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "consultations"), {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        createdAt: new Date()
      });

      document.getElementById("successMessage").innerText =
        "Consultation request submitted successfully!";

      form.reset();

    } catch (error) {
      console.error(error);
      alert("Error submitting request.");
    }
  });
}