/**
 * Represents event types.
 * @class
 */
export class Events {
  /**
   * Emitted when the bot goes online.
   * @type {string}
   */
  static READY = 'READY';

  /**
   * Emitted when a guild is created.
   * @type {string}
   */
  static INTERACTION_CREATE = 'INTERACTION_CREATE';

  /**
   * Emitted when a guild is created.
   * @type {string}
   */
  static GUILD_CREATE = 'GUILD_CREATE';

  /**
   * Emitted when a guild is updated.
   * @type {string}
   */
  static GUILD_UPDATE = 'GUILD_UPDATE';

  /**
   * Emitted when a guild is deleted.
   * @type {string}
   */
  static GUILD_DELETE = 'GUILD_DELETE';

  /**
   * Emitted when a role is created in a guild.
   * @type {string}
   */
  static GUILD_ROLE_CREATE = 'GUILD_ROLE_CREATE';

  /**
   * Emitted when a role is updated in a guild.
   * @type {string}
   */
  static GUILD_ROLE_UPDATE = 'GUILD_ROLE_UPDATE';

  /**
   * Emitted when a role is deleted in a guild.
   * @type {string}
   */
  static GUILD_ROLE_DELETE = 'GUILD_ROLE_DELETE';

  /**
   * Emitted when a channel is created in a guild.
   * @type {string}
   */
  static CHANNEL_CREATE = 'CHANNEL_CREATE';

  /**
   * Emitted when a channel is updated in a guild.
   * @type {string}
   */
  static CHANNEL_UPDATE = 'CHANNEL_UPDATE';

  /**
   * Emitted when a channel is deleted in a guild.
   * @type {string}
   */
  static CHANNEL_DELETE = 'CHANNEL_DELETE';

  /**
   * Emitted when the pins in a channel are updated.
   * @type {string}
   */
  static CHANNEL_PINS_UPDATE = 'CHANNEL_PINS_UPDATE';

  /**
   * Emitted when a thread is created in a guild.
   * @type {string}
   */
  static THREAD_CREATE = 'THREAD_CREATE';

  /**
   * Emitted when a thread is updated in a guild.
   * @type {string}
   */
  static THREAD_UPDATE = 'THREAD_UPDATE';

  /**
   * Emitted when a thread is deleted in a guild.
   * @type {string}
   */
  static THREAD_DELETE = 'THREAD_DELETE';

  /**
   * Emitted when the thread list for a guild is synced.
   * @type {string}
   */
  static THREAD_LIST_SYNC = 'THREAD_LIST_SYNC';

  /**
   * Emitted when a thread member is updated in a guild.
   * @type {string}
   */
  static THREAD_MEMBER_UPDATE = 'THREAD_MEMBER_UPDATE';

  /**
   * Emitted when thread members are updated in a guild.
   * @type {string}
   */
  static THREAD_MEMBERS_UPDATE = 'THREAD_MEMBERS_UPDATE';

  /**
   * Emitted when a stage instance is created in a guild.
   * @type {string}
   */
  static STAGE_INSTANCE_CREATE = 'STAGE_INSTANCE_CREATE';

  /**
   * Emitted when a stage instance is updated in a guild.
   * @type {string}
   */
  static STAGE_INSTANCE_UPDATE = 'STAGE_INSTANCE_UPDATE';

  /**
   * Emitted when a stage instance is deleted in a guild.
   * @type {string}
   */
  static STAGE_INSTANCE_DELETE = 'STAGE_INSTANCE_DELETE';

  /**
   * Emitted when a member is added to a guild.
   * @type {string}
   */
  static GUILD_MEMBER_ADD = 'GUILD_MEMBER_ADD';

  /**
   * Emitted when a member is updated in a guild.
   * @type {string}
   */
  static GUILD_MEMBER_UPDATE = 'GUILD_MEMBER_UPDATE';

  /**
   * Emitted when a member is removed from a guild.
   * @type {string}
   */
  static GUILD_MEMBER_REMOVE = 'GUILD_MEMBER_REMOVE';

  /**
   * Emitted when an audit log entry is created in a guild.
   * @type {string}
   */
  static GUILD_AUDIT_LOG_ENTRY_CREATE = 'GUILD_AUDIT_LOG_ENTRY_CREATE';

  /**
   * Emitted when a ban is added to a guild.
   * @type {string}
   */
  static GUILD_BAN_ADD = 'GUILD_BAN_ADD';

  /**
   * Emitted when a ban is removed from a guild.
   * @type {string}
   */
  static GUILD_BAN_REMOVE = 'GUILD_BAN_REMOVE';

  /**
   * Emitted when emojis are updated in a guild.
   * @type {string}
   */
  static GUILD_EMOJIS_UPDATE = 'GUILD_EMOJIS_UPDATE';

  /**
   * Emitted when stickers are updated in a guild.
   * @type {string}
   */
  static GUILD_STICKERS_UPDATE = 'GUILD_STICKERS_UPDATE';

  /**
   * Emitted when integrations are updated in a guild.
   * @type {string}
   */
  static GUILD_INTEGRATIONS_UPDATE = 'GUILD_INTEGRATIONS_UPDATE';

  /**
   * Emitted when an integration is created.
   * @type {string}
   */
  static INTEGRATION_CREATE = 'INTEGRATION_CREATE';

  /**
   * Emitted when an integration is updated.
   * @type {string}
   */
  static INTEGRATION_UPDATE = 'INTEGRATION_UPDATE';

  /**
   * Emitted when an integration is deleted.
   * @type {string}
   */
  static INTEGRATION_DELETE = 'INTEGRATION_DELETE';

  /**
   * Emitted when webhooks are updated in a guild.
   * @type {string}
   */
  static WEBHOOKS_UPDATE = 'WEBHOOKS_UPDATE';

  /**
   * Emitted when an invite is created.
   * @type {string}
   */
  static INVITE_CREATE = 'INVITE_CREATE';

  /**
   * Emitted when an invite is deleted.
   * @type {string}
   */
  static INVITE_DELETE = 'INVITE_DELETE';

  /**
   * Emitted when a voice state is updated.
   * @type {string}
   */
  static VOICE_STATE_UPDATE = 'VOICE_STATE_UPDATE';

  /**
   * Emitted when a user's presence is updated.
   * @type {string}
   */
  static PRESENCE_UPDATE = 'PRESENCE_UPDATE';

  /**
   * Emitted when a message is created.
   * @type {string}
   */
  static MESSAGE_CREATE = 'MESSAGE_CREATE';

  /**
   * Emitted when a message is updated.
   * @type {string}
   */
  static MESSAGE_UPDATE = 'MESSAGE_UPDATE';

  /**
   * Emitted when a message is deleted.
   * @type {string}
   */
  static MESSAGE_DELETE = 'MESSAGE_DELETE';

  /**
   * Emitted when multiple messages are deleted at once.
   * @type {string}
   */
  static MESSAGE_DELETE_BULK = 'MESSAGE_DELETE_BULK';

  /**
   * Emitted when a reaction is added to a message.
   * @type {string}
   */
  static MESSAGE_REACTION_ADD = 'MESSAGE_REACTION_ADD';

  /**
   * Emitted when a reaction is removed from a message.
   * @type {string}
   */
  static MESSAGE_REACTION_REMOVE = 'MESSAGE_REACTION_REMOVE';

  /**
   * Emitted when all reactions are removed from a message.
   * @type {string}
   */
  static MESSAGE_REACTION_REMOVE_ALL = 'MESSAGE_REACTION_REMOVE_ALL';

  /**
   * Emitted when a specific reaction is removed from a message.
   * @type {string}
   */
  static MESSAGE_REACTION_REMOVE_EMOJI = 'MESSAGE_REACTION_REMOVE_EMOJI';

  /**
   * Emitted when typing starts in a channel.
   * @type {string}
   */
  static TYPING_START = 'TYPING_START';

  /**
   * Emitted when a scheduled event is created in a guild.
   * @type {string}
   */
  static GUILD_SCHEDULED_EVENT_CREATE = 'GUILD_SCHEDULED_EVENT_CREATE';

  /**
   * Emitted when a scheduled event is updated in a guild.
   * @type {string}
   */
  static GUILD_SCHEDULED_EVENT_UPDATE = 'GUILD_SCHEDULED_EVENT_UPDATE';

  /**
   * Emitted when a scheduled event is deleted in a guild.
   * @type {string}
   */
  static GUILD_SCHEDULED_EVENT_DELETE = 'GUILD_SCHEDULED_EVENT_DELETE';

  /**
   * Emitted when a user is added to a scheduled event in a guild.
   * @type {string}
   */
  static GUILD_SCHEDULED_EVENT_USER_ADD = 'GUILD_SCHEDULED_EVENT_USER_ADD';

  /**
   * Emitted when a user is removed from a scheduled event in a guild.
   * @type {string}
   */
  static GUILD_SCHEDULED_EVENT_USER_REMOVE = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';

  /**
   * Emitted when an auto-moderation rule is created in a guild.
   * @type {string}
   */
  static AUTO_MODERATION_RULE_CREATE = 'AUTO_MODERATION_RULE_CREATE';

  /**
   * Emitted when an auto-moderation rule is updated in a guild.
   * @type {string}
   */
  static AUTO_MODERATION_RULE_UPDATE = 'AUTO_MODERATION_RULE_UPDATE';

  /**
   * Emitted when an auto-moderation rule is deleted in a guild.
   * @type {string}
   */
  static AUTO_MODERATION_RULE_DELETE = 'AUTO_MODERATION_RULE_DELETE';

  /**
   * Emitted when an auto-moderation action is executed.
   * @type {string}
   */
  static AUTO_MODERATION_ACTION_EXECUTION = 'AUTO_MODERATION_ACTION_EXECUTION';
}