import { deleteChannel } from "../utils/deleteChannel.js";
import { replyMessage } from "../utils/replyMessage.js";

export class Channel {
    constructor(bot, guild, channel){
        this.bot = bot;
        this.guild = guild;
        Object.assign(this, channel);
    }
    async send(message, options){
        await replyMessage(this.bot, {
            channel_id: this.id
        }, message, options)
    }
    async delete(){
        await deleteChannel(this.bot.token, this.id);
    }
}