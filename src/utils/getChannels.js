import axios from "axios";

export async function getChannels(token, guildId){
    try {
        let data = await axios.get(`https://discord.com/api/v10/guilds/${guildId}/channels`, {
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