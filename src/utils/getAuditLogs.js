import axios from "axios";

export async function getAuditLogs(token, guildId) {
    try {
        let data = await axios.get(`https://discord.com/api/guilds/${guildId}/audit-logs`, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });

        return data.data;
    }
    catch (err) {
        if (err.response.status == 404) return undefined;
        else throw new Error(err);
    }
}