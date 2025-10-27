// lib/firebaseClient.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

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

// ✅ Prevent Firebase from re-initializing (important in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Initialize Analytics only if supported (browser only)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
