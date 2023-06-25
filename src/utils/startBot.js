import axios from 'axios';
import WebSocket from 'ws';
import { Message } from '../core/message.js';
import { Events } from "../core/events.js"

export async function startBot(bot) {
  // Connect to Discord's WebSocket API
  const ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');

  ws.on('open', () => {
    console.log('Connected to Discord WebSocket');
    // Send the identify payload to authenticate with the token
    sendIdentifyPayload();
  });

  ws.on('message', async (data) => {
    const message = await JSON.parse(data);
    if (message.t == Events.MESSAGE_CREATE) {
      for(let i = 0; i < bot.message_commands.length; i++) {
        if(message.d.content == bot.prefix + bot.message_commands[i].name){
          await bot.message_commands[0].execute({ interaction: new Message(bot, message)});
        }
      }
    }
    
    for(let i = 0; i < bot.listeners.length; i++) {
      if(bot.listeners[i].event == message.t){
        await bot.listeners[i].callback({ interaction: new Message(bot, message)});
      }
    }

  });

  function sendIdentifyPayload() {
    const payload = {
      op: 2,
      d: {
        token: `${bot.token}`,
        intents: 513, // Replace with the appropriate intents value for your bot
        properties: {
          $os: 'linux',
          $browser: 'my_library',
          $device: 'my_library'
        }
      }
    };

    ws.send(JSON.stringify(payload));
  }
}