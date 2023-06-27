import { Roles } from "./roles.js";
import { Members } from "./members.js";
import { leaveGuild } from "../utils/leaveGuild.js";
import { getInvite } from "../utils/getInvite.js";
import { deleteInvite } from "../utils/deleteInvite.js";
import { getAuditLogs } from "../utils/getAuditLogs.js";

export class Guild {
    constructor(bot, guild) {
        this.bot = bot;
        this.roles = new Roles(bot, guild.roles);
        Object.assign(this, guild);
        this.members = new Members(bot, guild);
    }

    async getAuditLogs(){
        return await getAuditLogs(this.bot.token, this.id)
    }

    async leave(){
        await leaveGuild(bot, guild);
    }

    async getInvite(code){
        return await getInvite(this.bot.token, code);
    }

    async deleteInvite(code){
        return await deleteInvite(this.bot.token, code);
    }
}