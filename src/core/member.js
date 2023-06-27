import { addRole } from "../utils/addRole.js";
import { banMember } from "../utils/banMember.js";
import { kickMember } from "../utils/kickMember.js";
import { Bot } from "./bot.js";
import { Guild } from "./guild.js"

/**
 * Represents a guild member.
 */
export class Member {
  /**
   * Creates a new Member instance.
   * @param {Bot} bot - The bot instance.
   * @param {Guild} guild - The guild the member belongs to.
   * @param {Object} member - The member data.
   */
  constructor(bot, guild, member) {
    this.bot = bot;
    this.guild = guild;
    Object.assign(this, member);
    this.roles.add = async (id) => {
      await addRole(this.bot, member.user.id, guild.id, id);
    }
  }

  /**
   * Kicks the current member from the guild.
   */
  async kick() {
    /**
     * Kicks a member from the guild.
     * @param {string} memberId - The ID of the member to kick.
     * @throws {Error} If an error occurs during the kicking process.
     */
    await kickMember(this.bot, this.guild.id, this.user.id);
  }

  /**
   * Bans the current member from the guild.
   */
  async ban() {
    await banMember(this.bot, this.guild.id, this.member.id);
  }
}