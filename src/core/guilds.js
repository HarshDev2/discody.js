import { getGuild } from "../utils/getGuild.js";
import { Guild } from "./guild.js"

export class Guilds {
    constructor(bot) {
        this.bot = bot;
    }

    /**
    * Retrieves the guild by its ID.
    * @param {string} id - The ID of the guild.
    * @returns {Promise<Guild>} A Promise that resolves to the Guild object.
    */

    async findById(id) {
        return await getGuild(this.bot, id);
    }
}