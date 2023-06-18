import { Client, LocalAuth, Message } from "whatsapp-web.js";
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr: unknown) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message: Message) => {
	console.warn(message);
    const clientMessage = message.body; 
    if (clientMessage.toLocaleUpperCase() === 'HOLA') {
        //message.reply(`I'm a WhatsApp Bot`);
        client.sendMessage(message.from, 'pong');
    }
});

client.initialize();
 