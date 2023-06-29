import { Roles } from "./roles.js";
import { Members } from "./members.js";
import { leaveGuild } from "../utils/leaveGuild.js";
import { getInvite } from "../utils/getInvite.js";
import { deleteInvite } from "../utils/deleteInvite.js";
import { getAuditLogs } from "../utils/getAuditLogs.js";
import { Channels } from "./channels.js";
import { Emojis } from "./emojis.js";

/**
 * Represents a Discord guild (server).
 * @class
 */
export class Guild {
    /**
     * Create a new Guild instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Object} guild - The guild data.
     */
    constructor(bot, guild) {
        this.bot = bot;
        Object.assign(this, guild);
        this.roles = new Roles(bot, guild.roles);
        this.emojis = new Emojis(bot, guild);
        this.members = new Members(bot, guild);
        this.channels = new Channels(bot, guild);
    }

    /**
     * Get the audit logs for the guild.
     * @async
     * @returns {Object} - The audit logs data.
     */
    async getAuditLogs(){
        return await getAuditLogs(this.bot.token, this.id);
    }

    /**
     * Leave the guild.
     * @async
     */
    async leave(){
        await leaveGuild(bot, guild);
    }

    /**
     * Get an invite by its code.
     * @async
     * @param {string} code - The invite code.
     * @returns {Object} - The invite data.
     */
    async getInvite(code){
        return await getInvite(this.bot.token, code);
    }

    /**
     * Delete an invite by its code.
     * @async
     * @param {string} code - The invite code.
     * @returns {Object} - The deleted invite data.
     */
    async deleteInvite(code){
        return await deleteInvite(this.bot.token, code);
    }
}
