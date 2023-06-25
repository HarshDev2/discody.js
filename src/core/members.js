import { Member } from "./member.js";
import { findMember } from "../utils/findMember.js";

export class Members {
    constructor(bot, guild){
        this.bot = bot;
        this.guild = guild;
    }
    async findById(id){
        let member = await findMember(this.bot, this.guild, id);
        return new Member(bot, guild, member);
    }
}