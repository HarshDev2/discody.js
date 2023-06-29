import { deleteEmoji } from "../utils/deleteEmoji.js";

export class Emoji {
    constructor(bot, guild, emoji) {
        this.bot = bot;
        this.guild = guild;
        Object.assign(this, emoji);
    }
    async delete(){
        await deleteEmoji(this.bot.token, this.guild.id, this.id);
    }
}