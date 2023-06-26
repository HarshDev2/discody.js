import axios from 'axios';

export async function sendInteractionDeferReply(bot, interaction) {
      const response = await axios.post(`https://discord.com/api/v10/interactions/${interaction.id}/${interaction.token}/callback`, {
        type: 5
},
        {
        headers: {
          Authorization: `Bot ${bot.token}`,
          'Content-Type': 'application/json'
        }
      });
}