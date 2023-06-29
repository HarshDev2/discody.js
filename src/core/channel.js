import { deleteChannel } from "../utils/deleteChannel.js";
import { replyMessage } from "../utils/replyMessage.js";

/**
 * Represents a channel in a Discord server (guild).
 * @class
 */
export class Channel {
    /**
     * Create a new Channel instance.
     * @constructor
     * @param {Bot} bot - The Discord bot instance.
     * @param {Guild} guild - The guild (server) to which the channel belongs.
     * @param {Object} channel - The channel object representing the Discord channel.
     */
    constructor(bot, guild, channel){
        this.bot = bot;
        this.guild = guild;
        Object.assign(this, channel);
    }
    
    /**
     * Send a message to the channel.
     * @async
     * @param {string} message - The message content to be sent.
     * @param {Object} options - Additional options for sending the message.
     */
    async send(message, options){
        await replyMessage(this.bot, {
            channel_id: this.id
        }, message, options)
    }
    
    /**
     * Delete the channel.
     * @async
     */
    async delete(){
        await deleteChannel(this.bot.token, this.id);
    }
}