import { Roles } from "./roles.js";
import { Members } from "./members.js";
import { leaveGuild } from "../utils/leaveGuild.js";
import { getInvite } from "../utils/getInvite.js";
import { deleteInvite } from "../utils/deleteInvite.js";
import { getAuditLogs } from "../utils/getAuditLogs.js";
import { Channels } from "./channels.js";
import { Emojis } from "./emojis.js";

export class Guild {
    constructor(bot, guild) {
        this.bot = bot;
        Object.assign(this, guild);
        this.roles = new Roles(bot, guild.roles);
        this.emojis = new Emojis(bot, guild)
        this.members = new Members(bot, guild);
        this.channels = new Channels(bot, guild);
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