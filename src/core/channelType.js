/**
 * Represents the different types of channels.
 * @class
 */
export class ChannelType {
    /**
     * A text channel within a server.
     * @type {number}
     * @static
     * @readonly
     */
    static GUILD_TEXT = 0;
  
  
    /**
     * A voice channel within a server.
     * @type {number}
     * @static
     * @readonly
     */
    static GUILD_VOICE = 2;
  
    /**
     * An organizational category that contains up to 50 channels.
     * @type {number}
     * @static
     * @readonly
     */
    static GUILD_CATEGORY = 4;
  
    /**
     * A channel that users can follow and crosspost into their own server (formerly news channels).
     * @type {number}
     * @static
     * @readonly
     */
    static GUILD_ANNOUNCEMENT = 5;
  
    /**
     * A voice channel for hosting events with an audience.
     * @type {number}
     * @static
     * @readonly
     */
    static GUILD_STAGE_VOICE = 13;
  
    /**
     * Channel that can only contain threads.
     * @type {number}
     * @static
     * @readonly
     */
    static GUILD_FORUM = 15;
  }
  