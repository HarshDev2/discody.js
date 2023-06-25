import { addRole } from "../utils/addRole";
export class MemberRoles {
    constructor(bot, guild, member) {
        this.bot = bot;
        this.guild = guild;
        this.member = member;
    }
    add(id){
        let role = this.guild.roles.findById(id);
        if(role){
            await addRole(bot, this.member.id, this.guild.id, role.id);
        }
    }
}