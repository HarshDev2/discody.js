import axios from "axios";

export async function leaveGuild(bot, guild){
    try {
        let data = await axios.delete(`https://discord.com/api/users/@me/guilds/${guild.id}`, {
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