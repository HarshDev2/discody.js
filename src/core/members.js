import { Member } from "./member.js";
import { findMember } from "../utils/findMember.js";

/**
 * Represents a collection of members in a Discord server (guild).
 * @class
 */
export class Members {
    /**
     * Create a new Members instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Guild} guild - The guild (server) to which the members belong.
     */
    constructor(bot, guild){
        this.bot = bot;
        this.guild = guild;
    }
    
    /**
     * Find a member by their ID.
     * @param {string} id - The ID of the member to find.
     * @returns {Member} - The Member object if found.
     */
    async findById(id){
        let member = await findMember(this.bot, this.guild, id);
        return new Member(this.bot, this.guild, member);
    }
}
