import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// GoWash Firebase Configuration (gowash-5e31a)
const firebaseConfig = {
  apiKey: "AIzaSyB_zPM9QPJg_D_YkXk5loC4VIOSsnQAj3E",
  authDomain: "gowash-5e31a.firebaseapp.com",
  projectId: "gowash-5e31a",
  storageBucket: "gowash-5e31a.firebasestorage.app",
  messagingSenderId: "754339978933",
  appId: "1:754339978933:web:a6c8a95da231b4a7b628fc",
  measurementId: "G-6HB72VLXXM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
