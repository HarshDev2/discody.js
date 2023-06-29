import { addRole } from "../utils/addRole";

/**
 * Represents the roles of a member in a Discord server (guild).
 * @class
 */
export class MemberRoles {
    /**
     * Create a new MemberRoles instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Guild} guild - The guild (server) to which the member belongs.
     * @param {Member} member - The member whose roles are being managed.
     */
    constructor(bot, guild, member) {
        this.bot = bot;
        this.guild = guild;
        this.member = member;
    }
    
    /**
     * Add a role to the member.
     * @param {string} id - The ID of the role to add.
     * @async
     */
    async add(id){
        let role = this.guild.roles.findById(id);
        if(role){
            await addRole(bot, this.member.id, this.guild.id, role.id);
        }
    }
}
