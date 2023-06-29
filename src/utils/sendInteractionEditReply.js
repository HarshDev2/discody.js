import axios from 'axios';

export async function sendInteractionEditReply(bot, interaction, replyMessage, options) {
  if(!options) options = {};
  console.log({
    content: replyMessage,
    embeds: options.embeds ?
    options.embeds
    : []
  })
      const response = await axios.post(`https://discord.com/api/v10/webhooks/${bot.id}/${interaction.token}`, {
        content: replyMessage,
        embeds: options.embeds ? 
          options.embeds
        : []
      }, {
        headers: {
          Authorization: `Bot ${bot.token}`,
          'Content-Type': 'application/json'
        }
      });
}