import { Emoji } from "./emoji.js";

/**
 * Represents a collection of emojis in a Discord server (guild).
 * @class
 */
export class Emojis {
    /**
     * Create a new Emojis instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Guild} guild - The guild (server) to which the emojis belong.
     */
    constructor(bot, guild) {
        this.bot = bot;
        this.guild = guild;
        this.emojis = guild.emojis;
    }
    
    /**
     * Find an emoji by its ID.
     * @param {string} id - The ID of the emoji to find.
     * @returns {Emoji|undefined} - The Emoji object if found, or undefined if not found.
     */
    findById(id){
        if(this.emojis){
            for(let i = 0; i < this.emojis.length; i++){
                if(this.emojis[i].id == id){
                    return new Emoji(this.bot, this.guild, this.emojis[i]);
                }
            }
            return undefined;
        }
    } 
}
