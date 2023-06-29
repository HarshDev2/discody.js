import { deleteEmoji } from "../utils/deleteEmoji.js";

/**
 * Represents an emoji in a Discord server (guild).
 * @class
 */
export class Emoji {
    /**
     * Create a new Emoji instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Guild} guild - The guild (server) to which the emoji belongs.
     * @param {Object} emoji - The emoji data.
     */
    constructor(bot, guild, emoji) {
        this.bot = bot;
        this.guild = guild;
        Object.assign(this, emoji);
    }
    
    /**
     * Delete the emoji from the guild.
     * @async
     */
    async delete(){
        await deleteEmoji(this.bot.token, this.guild.id, this.id);
    }
}
