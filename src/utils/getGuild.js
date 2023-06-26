import axios from "axios";
import { Guild } from "../core/guild.js";

export async function getGuild(bot, id) {
    try {
        let data = await axios.get(`https://discord.com/api/guilds/${id}`, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        });

        let guild = new Guild(bot, data.data);
        return guild;
    }
    catch (err) {
        if (err.response.status == 404) return undefined;
        else throw new Error(err);
    }
}