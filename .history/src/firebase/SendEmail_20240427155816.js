
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
export default async function sendEmail(email,subjet,body){
const collectionRef = collection(db,"email");
const emailContent = {
    to:email,
    message:{
        subjet:subjet,
        text:body,
        html:"hola mundo"
    }
}

}