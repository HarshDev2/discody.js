import { Guilds } from "./guilds.js"
import { startBot } from "../utils/startBot.js";
/**
 * Represents a bot instance.
 */
export class Bot {
    /**
     * Creates a new Bot instance.
     * @param {string} token - The token for the bot.
     */
    constructor(token) {
        /**
         * The prefix used for bot commands.
         * @type {string}
         */
        this.prefix = "!";

        /**
         * The token for the bot.
         * @type {string}
         */
        this.token = token;

        /**
         * An array of message commands.
         * @type {Object[]}
         */
        this.message_commands = [];

        /**
         * The guilds associated with the bot.
         * @type {Guilds}
         */
        this.guilds = new Guilds(this);

        /**
         * The listeners registered for events.
         * @type {Object[]}
         */
        this.listeners = [];
    }

    /**
     * Registers a listener for an event.
     * @param {Events} event - The event to listen for.
     * @param {Function} callback - The callback function to execute when the event occurs.
     */
    on(event, callback) {
        this.listeners.push({ event, callback });
    }

    /**
     * Registers a listener for an event.
     * @param {Events} event - The event to listen for.
     * @param {Function} callback - The callback function to execute when the event occurs.
     */
    addEventListener(event, callback) {
        this.listeners.push({ event, callback });
    }


    /**
     * Runs the bot.
     * @returns {Promise<void>}
     */
    async run() {
        await startBot(this);
    }

    /**
     * Sets the prefix used for bot commands.
     * @param {string} prefix - The new prefix to set.
     */
    setPrefix(prefix) {
        this.prefix = prefix;
    }

    /**
     * Adds a message command to the bot.
     * @param {string} name - The name of the command.
     * @param {Function} command - The function to execute when the command is triggered.
     */
    addMessageCommand(name, command) {
        this.message_commands.push({
            name: name,
            execute: command
        });
    }

    /**
     * Adds a slash command to the bot.
     * @param {Object} command - The command object to add.
     */
    addSlashCommand(command) {
        this.commands.push(command);
    }
}