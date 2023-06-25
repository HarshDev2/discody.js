import { getGuild } from "../utils/getGuild.js";

export class Guilds {
    constructor(bot){
        this.bot = bot;
    }

    async get(id){
        await getGuild(bot, id);
    }
}