import { Roles } from "./roles.js";
import { Members } from "./members.js";
import { leaveGuild } from "../utils/leaveGuild.js";

export class Guild {
    constructor(bot, guild) {
        this.bot = bot;
        this.roles = new Roles(bot, guild.roles);
        Object.assign(this, guild);
        this.members = new Members(bot, guild);
    }

    async leave(){
        await leaveGuild(bot, guild);
    }
}