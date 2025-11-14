// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE7oy3Z_eEvLR4FMO3UzfPeXqRNXByZ_I",
  authDomain: "real-estate-listing-port-25d15.firebaseapp.com",
  projectId: "real-estate-listing-port-25d15",
  storageBucket: "real-estate-listing-port-25d15.firebasestorage.app",
  messagingSenderId: "309753064720",
  appId: "1:309753064720:web:7a91352f392c61e7430995",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
