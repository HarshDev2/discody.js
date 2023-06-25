import { getGuild } from "../utils/getGuild.js";
import { startBot } from "../utils/startBot.js";
import { Guilds } from "./guilds.js";
import Interaction from "./interaction.js";
import { Message } from "./message.js";

export class Bot {
    constructor(token) {
        this.prefix = "!";
        this.token = token;
        this.message_commands = [];
        this.guilds = new Guilds(this);
    }

    async run() {
        await startBot(this);
    }

    setPrefix(prefix){
        this.prefix = prefix;
    }

    addMessageCommand(name, command) {
        this.message_commands.push(
            {
                name: name,
                execute: command
            });
    }

    addSlashCommand(command) {
        this.commands.push(command);
    }

}