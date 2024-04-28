import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
export default async function sendEmail(email, subjet, body) {
  const collectionRef = collection(db, "mail");
  const emailContent = {
    to: email,
    message: {
      subjet: subjet,
      text: body,
      html: "hola mundo",
    },
  };
  console.log("mensaje listo para ser enviado");
  return await addDoc(collectionRef, emailContent);
}
