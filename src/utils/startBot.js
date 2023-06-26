import axios from 'axios';
import WebSocket from 'ws';
import { Message } from '../core/message.js';
import { Events } from "../core/events.js"
import { uploadSlashCommands } from './uploadSlashCommands.js';
import Interaction from '../core/interaction.js';

export async function startBot(bot) {
  await uploadSlashCommands(bot);

  const ws = new WebSocket('wss://gateway.discord.gg/?v=10&encoding=json');

  let d;
  let interval;

  ws.on('open', async () => {
    console.log('Info: ✅ Sucessfully Connected to the Discord Bot!');
    
    sendIdentifyPayload();

    setTimeout(() => {
      ws.ping('Ping');
    }, 5000);
  });

  ws.on('message', async (data) => {
    const message = await JSON.parse(data);
    if(message.t === null) {
      if(message.d && message.d.heartbeat_interval) {
        d = message.d;
        interval = message.d.heartbeat_interval;
        setTimeout(() => {
          ws.send(JSON.stringify({
            t: null,
            s: null,
            op: 1,
            d: d
          }))
        }, interval - 5000);
      }
      else if(message.op == 11){
        setTimeout(() => {
          ws.send(JSON.stringify({
            t: null,
            s: null,
            op: 1,
            d: d
          }));
        }, interval - 5000);
    }
  }
    if(message.t == Events.INTERACTION_CREATE){
      for(let i = 0; i < bot.slash_commands.length; i++) {
        if(bot.slash_commands[i].command.name == message.d.data.name){
          await bot.slash_commands[i].execute({ bot: bot, interaction: new Interaction(bot, message.d)})
        }
      }
    }
    if (message.t == Events.MESSAGE_CREATE) {
      const params = message.d.content.split(' ');
      const desiredParams = params.slice(1);

      for(let i = 0; i < bot.message_commands.length; i++) {
        if(params[0] == bot.prefix + bot.message_commands[i].name){
          await bot.message_commands[0].execute({ bot: bot, interaction: new Message(bot, message), params: desiredParams});
        }
      }
    }
    
    for(let i = 0; i < bot.listeners.length; i++) {
      if(bot.listeners[i].event == message.t){
        await bot.listeners[i].callback({ bot: bot, interaction: new Message(bot, message)});
      }
    }

  });

  ws.on('pong', async (data) => {
    setTimeout(() => {
      ws.ping();
    }, 5000);
  })

  ws.on('close', (code, reasons) => {
    console.log(`websocket closed ${code}, ${reasons}`);
  })

  ws.on('error', (err) => {
    console.log(err);
  });

  function sendIdentifyPayload() {
    const payload = {
      op: 2,
      d: {
        token: `${bot.token}`,
        intents: 513, // Replace with the appropriate intents value for your bot
        properties: {
          $os: 'linux',
          $browser: 'discody.js',
          $device: 'discody.js'
        }
      }
    };

    ws.send(JSON.stringify(payload));
  }
}