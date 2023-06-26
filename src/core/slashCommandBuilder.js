import { CommandTypes } from '../core/commandType.js';

/**
 * A builder class for creating slash commands.
 */
export class SlashCommandBuilder {
  constructor() {
    this.command = {};
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
