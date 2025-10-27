// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
