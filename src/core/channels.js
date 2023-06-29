import { getChannels } from "../utils/getChannels.js";
import { createChannel } from "../utils/createChannel.js";
import { Channel } from "./channel.js";
export class Channels {
    constructor(bot, guild){
        this.bot = bot;
        this.guild = guild;
    }
    async get(){
        let channels = await getChannels(this.bot.token, this.guild.id);
        this.channels = channels;
        return channels;
    }
    async create(options){
        await createChannel(this.bot.token, this.guild.id, options)
    }
    async findById(id){
        if(this.channels){
            for(let i = 0; i < this.channels.length; i++){
                if(this.channels[i].id == id){
                    return new Channel(this.bot, this.guild, this.channels[i]);
                }
            }
            return undefined;
        }
        else {
            await this.get();
            for(let i = 0; i < this.channels.length; i++){
                if(this.channels[i].id == id){
                    return new Channel(this.bot, this.guild, this.channels[i]);
                }
            }
            return undefined;
        }
    }
}