import { SubCommandBuilder } from "./subCommandBuilder.js";
export class SubCommandGroupBuilder {
    constructor() {
        this.option = {}
        this.option.options = [];
        this.option.type = 2;
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

  addSubCommand(callback){
    let builder = new SubCommandBuilder();
    callback(builder);
    this.option.options.push(builder.option)
    return this;
  }

}