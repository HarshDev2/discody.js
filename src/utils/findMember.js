import axios from "axios";
import { Member } from "../core/member.js";

export async function findMember(bot, guild, id){    
        let data = await axios.get(`https://discord.com/api/guilds/${guild.id}/members/${id}`, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        });

        return data.data;
    }