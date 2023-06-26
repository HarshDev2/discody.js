import { describe, it, expect } from 'vitest';
import { SlashCommandBuilder } from '../src/core/slashCommandBuilder';
import { Localizations } from '../src/core/localizations'

describe('Testing the SlashCommandBuilder class.', () => {
  it.concurrent('Creates a SlashCommand Object', async () => {
    let command = new SlashCommandBuilder();
    command.setName("test").setDescription("testing the command").addNameLocalization(Localizations.Hindi, "namaste")
    expect(command.command).toEqual({
      type: 1,
      name: "test",
      description: "testing the command",
      name_localizations: {
        hi: "namaste"
      }
    })
  });
  it.concurrent('Creates a SlashCommand Object', async () => {
    let command = new SlashCommandBuilder();
    command.setName("test").setDescription("command").addNameLocalization(Localizations.Hindi, "namaste").setNSFW(false).setDmPermissions(true)
    expect(command.command).toEqual({
      type: 1,
      name: "test",
      nsfw: false,
      dm_permission: true,
      description: "command",
      name_localizations: {
        hi: "namaste"
      }
    })
  });
  it.concurrent('Creates a SlashCommand Object', async () => {
    let command = new SlashCommandBuilder();
    command.setName("test").setDescription("testing the command").addNameLocalization(Localizations.Hindi, "namaste")
    expect(command.command).toEqual({
      type: 1,
      name: "test",
      description: "testing the command",
      name_localizations: {
        hi: "namaste"
      }
    })
  });
});
