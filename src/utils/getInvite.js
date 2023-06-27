import axios from "axios";
import { Member } from "../core/member.js";

export async function getInvite(token, code){
    try {
        let data = await axios.get(`https://discord.com/api/v10/invites/${code}`, {
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