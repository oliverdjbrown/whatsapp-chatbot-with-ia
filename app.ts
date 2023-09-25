import dotenv from 'dotenv';
import Server from './classes/server.class';
import botClient from './bots/whatsapp_bot.ws';
dotenv.config();

const server = new Server();
server.listen();
botClient.initialize();

//TODO: add methods to validate if user or group exist in db
//TODO: configure chatgpt api
//TODO: create apis to communicate with chatgpt service
//TODO: configure weather provider
//TODO: create apis to communicate with weather service
//TODO: write documentation
 