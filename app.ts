import dotenv from 'dotenv';
import Server from './models/server.model';
import botClient from './models/whatsapp.bot.model';
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
 