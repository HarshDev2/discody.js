import axios from "axios";

export async function deleteChannel(token, channelId){
    try {
        let data = await axios.delete(`https://discord.com/api/v10/channels/${channelId}`, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });
    }
    catch (err) {
        throw new Error(err);
    }
}