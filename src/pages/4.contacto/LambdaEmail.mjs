import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: 'us-east-1' });

const SENDER = 'dirfid@gmail.com';
//const RECEIVER = 'dirfid@gmail.com'
const RECEIVER = 'rojasforeric@gmail.com';

export async function handler(event) {
    console.log('Received event:', event);
    //const contactEmail = event.email;
    const params = {
        Destination: { ToAddresses: [RECEIVER] },   //RECEIVER
        Message: {
            Body: {
              Text: {
                Charset: 'UTF-8',
                Data: `Datos de Contacto\n\nEmpresa: ${event.empresa}\nNombre: ${event.nombre} ${event.apellido}\nEmail: ${event.email}\nTeléfono: ${event.telefono}\nDirección: ${event.direccion}\nCiudad: ${event.ciudad}, ${event.departamento}, ${event.pais}\nMensaje: ${event.mensaje}\n
                        \nFavor responder este mensaje para darle seguimiento al contacto pronto.`,
              }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Nuevo Formulario de Contacto, enviado por: ${event.nombre} ${event.apellido}`,
            }
        },
        Source: SENDER,      //dirfid@gmail.com
        //ReplyToAddresses: [SENDER], //Send a copy 
    };
    try {
        const data = await ses.send(new SendEmailCommand(params));
        console.log(`Email sent! ${data.MessageId}`);
        return {
            statusCode: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                //Only authorized domains can send requests to your backend
                //'Access-Control-Allow-Origin': 'https://fisgon.net' || 'https://fisgon.co',
            },
            //isBase64Encoded: false,
            body: JSON.stringify({
                message: 'Email enviado correctamente',
                messageId: data.MessageId,
                date: Date.now()
            })
        };
    } catch (err) {
        console.error(`Error enviando email: ${err.message}`);
        return { statusCode: 500, 
            body: JSON.stringify({ 
                message: 'Error enviando email',
                error: err.message 
            }) 
        };
    }
}

/*
// Test event data
const testEvent =
{
    "empresa": "Ericel",
    "nombre": "Eric",
    "apellido": "Rojas",
    "email": "dirfid@gmail.com",
    "telefono": "1234567890",
    "direccion": "CL 23h 96f 69",
    "ciudad": "Bogota",
    "departamento": "DC",
    "pais": "Colombia",
    "mensaje": "Mensaje inicial abc"
}
*/