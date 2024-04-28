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
// Obtener una referencia a la base de datos
const database = firebase.database();
// Escribir datos en la base de datos
database.ref("message").set("Hello, Firebase!", (error) => {
  if (error) {
    console.error("Error al escribir en la base de datos:", error);
  } else {
    console.log("Mensaje escrito correctamente en la base de datos.");
  }
});

// Leer datos de la base de datos
database.ref("message").once(
  "value",
  (snapshot) => {
    const message = snapshot.val();
    console.log("Mensaje leído de la base de datos:", message);
  },
  (error) => {
    console.error("Error al leer de la base de datos:", error);
  }
);
export const db = getFirestore(app);
export default app;
