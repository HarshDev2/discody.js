import axios from "axios";
import { Member } from "../core/member.js";

export async function deleteInvite(token, code){
    try {
        let data = await axios.delete(`https://discord.com/api/v10/invites/${code}`, {
            headers: {
                Authorization: `Bot ${token}`
            }
        });
    }
    catch (err) {
        throw new Error(err);
    }
}