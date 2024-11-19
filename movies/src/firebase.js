// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD-wlX0eppKNHuOY5M5HLUczeO4ejVuzA",
  authDomain: "webappasgn1-firebase.firebaseapp.com",
  projectId: "webappasgn1-firebase",
  storageBucket: "webappasgn1-firebase.firebasestorage.app",
  messagingSenderId: "692993198858",
  appId: "1:692993198858:web:484321a5156ab5ff7f08f3",
  measurementId: "G-YXN0J1SFYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Export the `auth` object so it can be used in other parts of the app
export { auth };
