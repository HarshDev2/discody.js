import { Guilds } from "./guilds.js"
import { startBot } from "../utils/startBot.js";
import { getBot } from "../utils/getBot.js";

/**
 * Represents a bot instance.
 */
export class Bot {
    /**
     * Creates a new Bot instance.
     * @param {string} token - The token for the bot.
     */
    constructor(token, intents) {
        this.intents = 0;

        for(let i = 0; i < intents.length; i++){
            this.intents += intents[i]
        }
        
        /**
         * The prefix used for bot commands.
         * @type {string}
         */
        this.prefix = "!";

        getBot(token).then((data) => {
            Object.assign(this, data);
        })

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
         * An array of slash commands.
         * @type {Object[]}
         */
        this.slash_commands = [];

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

    async getBot(token) {
        return await getBot(token)
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
     * @param {SlashCommandBuilder} command - The command object to add.
     */
    addSlashCommand(command) {
        this.slash_commands.push({
            command: command.command,
            execute: command.execute
        });
    }
}