export class Role {
    constructor(bot, role) {
        this.bot = bot;
        Object.assign(this, role);
    }
    
    delete(){}
}