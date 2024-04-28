import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
export default async function sendEmail(email, subject, body) {
  const collectionRef = collection(db, "email");
  const emailContent = {
    to: email,
    message: {
      subject: subject,
      text: body,
      html: "hola mundo",
    },
  };
  console.log("mensaje listo para ser enviado", emailContent);
  return await addDoc(collectionRef, emailContent);
}
