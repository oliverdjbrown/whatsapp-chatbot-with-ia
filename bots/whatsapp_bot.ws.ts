
import { Client, LocalAuth, Message } from "whatsapp-web.js";
const qrcode = require('qrcode-terminal');

const botClient = new Client({
    authStrategy: new LocalAuth()
});

botClient.on('qr', (qr: unknown) => {
    qrcode.generate(qr, {small: true});
});

botClient.on('ready', () => {
    console.log('Whatsapp Client is ready!!!');
});

botClient.on('message', async (message: Message) => {
    
    const clientMessage = message.body; 
    
    //INFO: reply if user use specific word quoting the message
    if (clientMessage.toLocaleUpperCase() === 'ENCUESTA') {
        return botClient.sendMessage(message.from, clientMessage);
    }

    //INFO: reply to an specific user numbers
    if (message.from.slice(0,-5) === '8090000000') {
        const chat = await message.getChat();
        //INFO:  simulates typing in the chat
        chat.sendStateTyping();
        setTimeout(() => {
            return botClient.sendMessage(message.from, clientMessage);
        }, 3000);
    }
});

export default botClient;