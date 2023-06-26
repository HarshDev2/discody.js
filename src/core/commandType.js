/**
 * Represents the types of application commands.
 * @class
 */
export class CommandTypes {
    /**
     * Slash commands; a text-based command that shows up when a user types /
     * @type {number}
     * @readonly
     * @static
     */
    static SLASH_COMMAND = 1;

    /**
     * A UI-based command that shows up when you right click or tap on a user
     * @type {number}
     * @readonly
     * @static
     */
    static USER_POPUP = 2;

    /**
     * A UI-based command that shows up when you right click or tap on a message
     * @type {number}
     * @readonly
     * @static
     */
    static MESSAGE_POPUP = 3;
}