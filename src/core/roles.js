import { Role } from './role.js';
export class Roles {
    constructor(bot, roles){
        this.bot = bot;
        this.roles = roles;
    }
    /**
     * Retrieves the role by its ID.
     * @param {string} id
     * @returns {Role | undefined} role
     */
    findById(id){
        for(let i = 0; i < this.roles.length; i++){
            if(id == this.roles[i].id){
                return new Role(bot, this.roles[i]);
            }
        }
        return undefined;
    };

    create(){}
}