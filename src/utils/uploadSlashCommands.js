import axios from "axios";
import { Member } from "../core/member.js";

export async function uploadSlashCommands(bot){
    console.log("Info: Uploading the slash commands.");
    let botId;
    try {
        let data = await axios.get(`https://discord.com/api/v10/users/@me`, {
            headers: {
                Authorization: `Bot ${bot.token}`
            }
        });

        botId = data.data.id;
    }
    catch (err) {
        throw new Error(err);
    }

    for(let i = 0; i < bot.slash_commands.length; i++){
        let data = await axios.post(`https://discord.com/api/v10/applications/${botId}/commands`, bot.slash_commands[i].command, {
                headers: {
                    Authorization: `Bot ${bot.token}`
                }
            });
    }
    console.log("Info: ✅ Sucessfully Uploaded the Slash Commands.")

}