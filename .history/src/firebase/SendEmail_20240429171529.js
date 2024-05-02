import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
export default async function sendEmail(email, subject, body) {
  const collectionRef = collection(db, "mail");
  const emailContent = {
    to: "bermudezdamian7@gmail.com",
    message: {
      subject: subject,
      text: body,
      html: "hola mundo",
    },
  };
  console.log("mensaje listo para ser enviado", emailContent);
  return await addDoc(collectionRef, emailContent);
}
