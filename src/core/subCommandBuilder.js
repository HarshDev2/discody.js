import { StringOptionBuilder } from '../core/stringOptionBuilder.js'
import { IntegerOptionBuilder } from '../core/integerOptionBuilder.js'
import { BooleanOptionBuilder } from '../core/booleanOptionBuilder.js'
import { UserOptionBuilder } from '../core/userOptionBuiler.js'
import { FloatOptionBuilder } from '../core/floatOptionBuilder.js'
import { ChannelOptionBuilder } from '../core/channelOptionBuilder.js'
import { RoleOptionBuilder } from '../core/roleOptionBuilder.js'

export class SubCommandBuilder {
    constructor() {
        this.option = {}
        this.option.options = [];
        this.option.type = 1;
    }

    /**
   * Sets the name of the slash command.
   * @param {string} name - The name of the command.
   */
  setName(name) {
    this.option.name = name;
    return this;
  }

  /**
   * Adds a localized name for the slash command.
   * @param {string} localization - The language localization code.
   * @param {string} name - The localized name of the command.
   */
  addNameLocalization(localization, name) {
    if (!this.option.name_localizations) this.option.name_localizations = {};
    this.option.name_localizations[localization] = name;
    return this;
  }

  /**
   * Sets the description of the slash command.
   * @param {string} description - The description of the command.
   */
  setDescription(description) {
    this.option.description = description;
    return this;
  }

  /**
   * Adds a localized description for the slash command.
   * @param {string} localization - The language localization code.
   */
  addDescriptionLocalization(localization, description) {
    if (!this.option.description_localizations) this.option.description_localizations = {};
    this.option.description_localizations[localization] = description;
    return this;
  }

  addStringOption(callback){
    let builder = new StringOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addIntegerOption(callback){
    let builder = new IntegerOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addFloatOption(callback){
    let builder = new FloatOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addBooleanOption(callback){
    let builder = new BooleanOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addUserOption(callback){
    let builder = new UserOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addChannelOption(callback){
    let builder = new ChannelOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addRoleOption(callback){
    let builder = new RoleOptionBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }
  addMentionableOption(callback){}
  addAttachmentOption(callback){}
}