import axios from "axios";
import { Member } from "../core/member.js";

export async function findMember(bot, guild, id){    
    try{
        let data = await axios.get(`https://discord.com/api/guilds/${guild.id}/members/${id}`, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        });

        return data.data;
    }
    catch(err){
        if(err.response.status == 404) return undefined;
        else throw new Error(err);
    }
    }