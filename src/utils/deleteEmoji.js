import axios from "axios";

export async function deleteEmoji(token, guildId, emojiId){
    try {
        let data = await axios.delete(`https://discord.com/api/v10/guilds/${guildId}/emojis/${emojiId}`, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });
    }
    catch (err) {
        throw new Error(err);
    }
}