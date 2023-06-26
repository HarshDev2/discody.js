import { sendInteractionDeferReply } from '../utils/sendInteractionDeferReply.js'
import { sendInteractionEditReply } from '../utils/sendInteractionEditReply.js'

/**
 * Represents an interaction.
 */
export default class Interaction {
    constructor(bot, interaction) {
        this.bot = bot;
        Object.assign(this, interaction);
    }
    /**
     * Defers replying to the interaction.
     * @param {InteractionDeferOptions} options - Options for deferring the reply.
     */
    async deferReply(options) {
        await sendInteractionDeferReply(this.bot, this);
        this.deferred = true;
    }

    /**
     * Replies to the interaction.
     * @param {string} message - The message to reply with.
     * @param {InteractionReplyOptions} options - Options for replying to the interaction.
     * @throws {Error} If the interaction is deferred.
     */
    async reply(message, options) {
        if(this.deferred){
            await sendInteractionEditReply(this.bot, this, message, options);
        }
    }

    /**
     * Edits the previously sent reply.
     * @param {string} message - The updated message to edit with.
     */
    async editReply(message) {
        await sendInteractionEditReply(this.bot, this, message, options);
    }

    getOption(name) {
        if(!this.data.options) return undefined;
        for(let i = 0; i < this.data.options.length; i++) {
            if(this.data.options[i].name == name) return this.data.options[i].value;
        }
    }
}

/**
 * Options for deferring an interaction reply.
 * @typedef {Object} InteractionDeferOptions
 * @property {boolean} ephemeral - Whether the reply should be ephemeral (only visible to the user).
 */

/**
 * Options for replying to an interaction.
 * @typedef {Object} InteractionReplyOptions
 * @property {boolean} ephemeral - Whether the reply should be ephemeral (only visible to the user).
 */
