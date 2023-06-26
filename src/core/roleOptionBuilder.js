export class RoleOptionBuilder {
    constructor() {
        this.option = {}
        this.option.type = 8;
    }

    setRequired(required) {
        this.option.required = required;
        return this;
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
}