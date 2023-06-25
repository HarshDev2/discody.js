import axios from "axios";

export async function kickMember(bot, guild, id){
    try {
        let data = await axios.delete(`https://discord.com/api/guilds/${guild.id}/members/${id}`, {
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