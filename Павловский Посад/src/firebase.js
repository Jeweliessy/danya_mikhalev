// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh_wWDZbdClfW06N0bzV64_vYTyK3bHKQ",
  authDomain: "project-91c74.firebaseapp.com",
  databaseURL: "https://project-91c74-default-rtdb.firebaseio.com",
  projectId: "project-91c74",
  storageBucket: "project-91c74.appspot.com",
  messagingSenderId: "406797511573",
  appId: "1:406797511573:web:c8081b12080216a7efe49c",
  measurementId: "G-54VZ9327FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const bookingRef = ref(db, 'bookings');

export { auth };
export { bookingRef };
