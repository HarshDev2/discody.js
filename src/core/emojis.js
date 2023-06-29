import { Emoji } from "./emoji.js";

export class Emojis {
    constructor(bot, guild) {
        this.bot = bot;
        this.guild = guild;
        this.emojis = guild.emojis;
    }
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