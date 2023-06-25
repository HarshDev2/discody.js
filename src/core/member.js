import { kickMember } from "../utils/kickMember.js";

export class Member {
    constructor(bot, guild, member){
        this.bot = bot;
        this.guild = guild;
        Object.assign(this, member);
    }
    kick(){
        kickMember(this.bot, this.guild, this.member.id);
    }
    ban(){}
}