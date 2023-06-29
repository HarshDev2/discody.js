import { getChannels } from "../utils/getChannels.js";
import { createChannel } from "../utils/createChannel.js";
import { Channel } from "./channel.js";

/**
 * Represents a collection of channels in a Discord server (guild).
 * @class
 */
export class Channels {
    /**
     * Create a new Channels instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Guild} guild - The guild (server) to which the channels belong.
     */
    constructor(bot, guild){
        this.bot = bot;
        this.guild = guild;
    }
    
    /**
     * Retrieve the channels for the guild.
     * @async
     * @returns {Promise<Array>} - A promise that resolves to an array of channel objects.
     */
    async get(){
        let channels = await getChannels(this.bot.token, this.guild.id);
        this.channels = channels;
        return channels;
    }
    
    /**
     * Create a new channel in the guild.
     * @async
     * @param {Object} options - Options for creating the channel.
     */
    async create(options){
        await createChannel(this.bot.token, this.guild.id, options);
    }
    
    /**
     * Find a channel by its ID.
     * @async
     * @param {string} id - The ID of the channel to find.
     * @returns {Promise<Channel|undefined>} - A promise that resolves to a Channel object if found, or undefined if not found.
     */
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
