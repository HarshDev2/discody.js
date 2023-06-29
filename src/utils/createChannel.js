import axios from "axios";

export async function createChannel(token, guildId, options){
    try {
        let data = await axios.post(`https://discord.com/api/v10/guilds/${guildId}/channels`, options, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });

        return data.data;
    }
    catch (err) {
        throw new Error(err);
    }
}