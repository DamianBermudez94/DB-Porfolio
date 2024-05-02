import { sendEmail } from 'firebase-functions';
import * as admin from 'firebase-admin';

// Inicializa Firebase Admin SDK
admin.initializeApp();
// Define la función para enviar correos electrónicos
export const enviarCorreo = sendEmail.onCall(async (data, context) => {
  const { to, subject, text } = data; // Los datos incluyen el destinatario, el asunto y el texto del correo electrónico
  
  // Configura el correo electrónico
  const mailOptions = {
    to: to,
    message: {
      subject: subject,
      text: text,
      html: '<p>Este es el contenido HTML del correo electrónico.</p>'
    }
  };

  // Envía el correo electrónico
  try {
    await admin.firestore().collection('mail').add(mailOptions); // Almacena los datos del correo electrónico en Firestore
    return { success: true };
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    return { error: error };
  }
});
