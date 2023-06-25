import { replyMessage } from "../utils/replyMessage.js";

export class Message {
    constructor(bot, message1) {
        this.bot = bot;
        Object.assign(this, message1.d);
    }
    
    /**
     * Replies to an message
     * @param {String} message
     * @param {Object} options
     */
    async reply(message, options) {
        await replyMessage(this.bot, this, message, options);
    }
}
