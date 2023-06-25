import axios from 'axios';

export async function replyMessage(bot, message, replyMessage, options) {
  if(!options) options = {};
    const guildId = message.guild_id;
    const channelId = message.channel_id;
      const response = await axios.post(`https://discord.com/api/v10/channels/${channelId}/messages`, {
        content: replyMessage,
        embeds: options.embed ? [
          options.embed
        ]
        : []
      }, {
        headers: {
          Authorization: `Bot ${bot.token}`,
          'Content-Type': 'application/json'
        }
      });
}