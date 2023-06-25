/**
 * Represents an interaction.
 */
export default class Interaction {
    /**
     * Defers replying to the interaction.
     * @param {InteractionDeferOptions} options - Options for deferring the reply.
     */
    deferReply(options) {
        this.deferred = true;
    }

    /**
     * Replies to the interaction.
     * @param {string} message - The message to reply with.
     * @param {InteractionReplyOptions} options - Options for replying to the interaction.
     * @throws {Error} If the interaction is deferred.
     */
    reply(message, options) {
        if (this.deferred) {
            throw new Error("A deferred interaction cannot be replied. Use editReply instead.");
        }
    }

    /**
     * Edits the previously sent reply.
     * @param {string} message - The updated message to edit with.
     */
    editReply(message) {
        console.log(message);
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
