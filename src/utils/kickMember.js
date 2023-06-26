import axios from "axios";

export async function kickMember(bot, guildId, memberId){

    if(!memberId) throw new Error("Member doesn't exist.");

    try {
        let data = await axios.delete(`https://discord.com/api/guilds/${guildId}/members/${memberId}`, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        });
        if(data.status == 204) return undefined;
    }
    catch (err) {
        if(err.response.status == 204) return undefined;
        else throw new Error(err);
    }
}