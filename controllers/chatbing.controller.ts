import { BingChat, ChatMessage } from 'bing-chat';

async function chatWithBing(prompt: string): Promise<ChatMessage> {
  const api = new BingChat({
    cookie: process.env.BING_COOKIE || ''
  })

  const res = await api.sendMessage(prompt);
  return res;
}

export default chatWithBing;