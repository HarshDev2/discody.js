import { CommandTypes } from '../core/commandType.js';
import { StringOptionBuilder } from '../core/stringOptionBuilder.js'
import { IntegerOptionBuilder } from '../core/integerOptionBuilder.js'
import { BooleanOptionBuilder } from '../core/booleanOptionBuilder.js'
import { UserOptionBuilder } from '../core/userOptionBuiler.js'
import { FloatOptionBuilder } from '../core/floatOptionBuilder.js'
import { ChannelOptionBuilder } from '../core/channelOptionBuilder.js'
import { RoleOptionBuilder } from '../core/roleOptionBuilder.js'
import { SubCommandBuilder } from './subCommandBuilder.js';
import { SubCommandGroupBuilder } from './subCommandGroupBuilder.js';


/**
 * A builder class for creating slash commands.
 */
export class SlashCommandBuilder {
  constructor() {
    this.command = {};
    this.command.options = [];
    this.command.type = CommandTypes.SLASH_COMMAND;
  }

  /**
   * Sets the name of the slash command.
   * @param {string} name - The name of the command.
   */
  setName(name) {
    this.command.name = name;
    return this;
  }

  /**
   * Adds a localized name for the slash command.
   * @param {string} localization - The language localization code.
   * @param {string} name - The localized name of the command.
   */
  addNameLocalization(localization, name) {
    if (!this.command.name_localizations) this.command.name_localizations = {};
    this.command.name_localizations[localization] = name;
    return this;
  }

  addSubCommand(callback){
    let builder = new SubCommandBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addSubCommandGroup(callback){
    let builder = new SubCommandGroupBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addStringOption(callback){
    let builder = new StringOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addIntegerOption(callback){
    let builder = new IntegerOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addFloatOption(callback){
    let builder = new FloatOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addBooleanOption(callback){
    let builder = new BooleanOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addUserOption(callback){
    let builder = new UserOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addChannelOption(callback){
    let builder = new ChannelOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addRoleOption(callback){
    let builder = new RoleOptionBuilder();
    callback(builder);
    this.command.options.push(builder.option)
    return this;
  }
  addMentionableOption(callback){}
  addAttachmentOption(callback){}

  /**
   * Sets the description of the slash command.
   * @param {string} description - The description of the command.
   */
  setDescription(description) {
    this.command.description = description;
    return this;
  }

  /**
   * Adds a localized description for the slash command.
   * @param {string} localization - The language localization code.
   */
  addDescriptionLocalization(localization, description) {
    if (!this.command.description_localizations) this.command.description_localizations = {};
    this.command.description_localizations[localization] = description;
    return this;
  }

  /**
   * Sets the DM (Direct Message) permissions for the slash command.
   * @param {boolean} permission - The DM permission value.
   */
  setDmPermissions(permission) {
    this.command.dm_permission = permission;
    return this;
  }

  /**
   * Sets whether the slash command is NSFW (Not Safe For Work).
   * @param {boolean} nsfw - The NSFW value.
   */
  setNSFW(nsfw) {
    this.command.nsfw = nsfw;
    return this;
  }

  /**
   * Sets the execution function for the slash command.
   * @param {function} execute - The function to be executed when the command is triggered.
   */
  setExecute(execute) {
    this.execute = execute;
  }
}
