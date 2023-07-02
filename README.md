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

## Docs
Documentation is available at [Discody Guide](https://discody-guide.vercel.app/).

## Things not supported right now
| Features | Supported |
--- | --- |
Message Commands and Slash Commands |  ✅
Embeds | ✅
Guilds ( Servers ) | ✅
Emojis | ✅
Invites | ✅
Audit Logs | ✅
Voice Features | ❌
Sharding | ❌
Roles Operations | ❌ ( Partial Support right now )
Channels Operations | ✅ ( Some Function not available right now  )
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

## ChangeLog v0.3.0
* Added Emojis Support
* Added Channels Support
* Updated Reply Function in Both Slash Commands and Message Commands

Instead of sending a single embed, multiple embeds are now supported, if you are sending a single embed, embed have to be wrapped in an array.

and parameter name is also updated from embed to embeds.

```js
// Old Way -

let embed = new EmbedBuilder().setTitle("hello from embed also");
interaction.reply("hello", { embed: embed });

// New Way -

let embed = new EmbedBuilder().setTitle("hello from embed also");
interaction.reply("hello", { embeds: [embed] });
```

