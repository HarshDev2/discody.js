import axios from "axios";

export async function banMember(bot, guildId, memberId){
    try {
        let data = await axios.put(`https://discord.com/api/guilds/${guildId}/bans/${memberId}`, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        });
    }
    catch (err) {
        if(err.response.status == 404) return undefined;
        else throw new Error(err);
    }
}