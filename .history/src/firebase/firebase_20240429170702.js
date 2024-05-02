// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwmBMbqnrTp9NVKlBWzEulo0EfLQCK3XY",
  authDomain: "email-porfolio.firebaseapp.com",
  projectId: "email-porfolio",
  storageBucket: "email-porfolio.appspot.com",
  messagingSenderId: "823648722927",
  appId: "1:823648722927:web:61c87cf325c325aa2da01a",
  measurementId: "G-R9X2DF41XV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
