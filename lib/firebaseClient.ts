// lib/firebaseClient.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPRS8B6v_AV5pD6TXrEDZ1nuQwHq9FQhg",
  authDomain: "wodiwaitlist.firebaseapp.com",
  databaseURL: "https://wodiwaitlist-default-rtdb.firebaseio.com",
  projectId: "wodiwaitlist",
  storageBucket: "wodiwaitlist.firebasestorage.app",
  messagingSenderId: "915599206666",
  appId: "1:915599206666:web:d27642ae6916e2bd9232f3",
  measurementId: "G-0CT684PH7E"
};

// ✅ Prevent re-initializing Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Analytics only in browser
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export { app, db, analytics };
