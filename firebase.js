// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa4fgN-nwDdCSDFOSsHIovkdmEh5chqmM",
  authDomain: "portfolios-2023.firebaseapp.com",
  projectId: "portfolios-2023",
  storageBucket: "portfolios-2023.appspot.com",
  messagingSenderId: "147355214904",
  appId: "1:147355214904:web:2deb5d68e0db55e2e1b2cd",
  measurementId: "G-6Z19JSXVN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);