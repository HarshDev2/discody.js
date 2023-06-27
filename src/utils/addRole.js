import axios from "axios";

export async function addRole(bot, memberId, guildId, roleId){
    try {
        let data = await axios.put(`https://discord.com/api/guilds/${guildId}/members/${memberId}/roles/${roleId}`, {}, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        })
    }
    catch (err) {
        if(err.response.status == 404) return undefined;
        else throw new Error(err);
    }
}