# Discody.js
Discody.js is an alternative to discord.js with feature like built in message based commands, and built in slash commands handler, discody.js also provide a very simple way to work with interactions than discord.js.

## Comparison
| **Features** | **Discord.js** | **Discody.js** |
|---|---| --- |
Easy to work with | ❌ | ✅
Production ready | ✅ | ❌
Built in Message Command Handler |❌ | ✅
Built in Slash Command Handler |❌ | ✅
CLI Support | ❌ | ✅ (in development)

## Installation

```bash 
npm i discody@latest
```

## Things not supported right now
| Features | Supported |
--- | --- |
Message Commands and Slash Commands |  ✅
Embeds | ✅
Guilds ( Servers ) | ✅
Invites | ✅
Audit Logs | ✅
Voice Features | ❌
Sharding | ❌
Roles Operations | ❌ ( Partial Support right now )
Channels Operations | ❌
Kick / Ban | ✅
Timeout  | ❌
Message Commands Arguments | ✅
Event Handlers | ✅
Permissions | ❌
Gateway Intents | ✅
Attachments | ❌

## Note
Discody.js is currently in development, don't use it in bots in production environment.

You can test the discody.js library and consider it for future use.

## Documentation

### Making an simple message based command.

With discody.js you can simply just write your command code, and discody.js will handle everything else.


Default Prefix is '!', so if you use it, you don't need to use bot.setPrefix("!");
```js
import { Bot } from "discody";
import { Intents } from "discody";


let bot = new Bot("Your Bot Token", [Intents.ALL]);

async function hello({ bot, interaction, args }){
    await interaction.reply(`hi, ${args[0]}, my name is ${bot.username}. \nI am a bot made by discody.js`);
}

bot.setPrefix("?");
bot.addMessageCommand("hello", hello);
bot.run();
```

## Making an Slash Command 
Making an Slash Command is a little more complicated but easier than discord.js

Unlike discord.js, you have to specify the function that will be executed when the command will be run by .setExecute() on SlashCommandBuilder.
```js
import { Bot } from "discody";
import { SlashCommandBuilder } from "discody";
import { Intents } from "discody";

let bot = new Bot("Your Bot Token", [Intents.ALL])

function hello({ interaction, bot }){
    let user = interaction.getOption("name");
    interaction.reply(`Hi, ${user}`);
}

let command = new SlashCommandBuilder()
    .setName("hello")
    .setDescription("tells hello back to you")
    .addStringOption(option => option.setName("name")
        .setDescription("your name.."))
    .setExecute(hello);

bot.addSlashCommand(command);
bot.run();
```