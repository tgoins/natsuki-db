import { Entity, PrimaryColumn, Column, OneToMany, OneToOne, ManyToMany } from 'typeorm'
import { GuildVoiceChannelSettings, GuildBlacklistedUser, GuildTextChannelSettings } from './'
import { User, GuildUser, UserWarning, UserKick, UserBan } from '../../'

/**
 * Guild settings.
 * @export
 * @class Guild
 */
@Entity()

export class Guild {
  /**
   * The Discord ID of the Guild.
   * @type {string}
   * @memberof Guild
   */
  @PrimaryColumn()
  id: string

  /**
   * The command prefix the bot will listen to in the Guild.
   * @type {string}
   * @memberof Guild
   */
  @Column()
  prefix: string

  /**
   * Enable NSFW content in the Guild.
   * @type {boolean}
   * @memberof Guild
   */
  @Column()
  nsfwEnabled: boolean

  /**
   * The channel IDs where NSFW content is allowed.
   * @type {string[]}
   * @memberof Guild
   */
  @Column()
  nsfwChannels: string[]

  /**
   * Text channel settings for the Guild.
   * @type {GuildTextChannelSettings}
   * @memberof Guild
   */
  @OneToOne(type => GuildTextChannelSettings, guildTextChannelSettings => guildTextChannelSettings.guild, {
    cascadeAll: true
  })
  textChannelSettings: GuildTextChannelSettings

  /**
   * Voice channel settings for the Guild.
   * @type {GuildVoiceChannelSettings}
   * @memberof Guild
   */
  @OneToOne(type => GuildVoiceChannelSettings, guildVoiceChannelSettings => guildVoiceChannelSettings.guild, {
    cascadeAll: true
  })
  voiceChannelSettings: GuildVoiceChannelSettings

  /**
   * Blacklisted Users in the Guild.
   * @type {GuildBlacklistedUser[]}
   * @memberof Guild
   */
  @OneToMany(type => GuildBlacklistedUser, guildBlacklistedUser => guildBlacklistedUser.guild)
  blacklistedUsers: GuildBlacklistedUser[]

  /**
   * User warnings in the Guild.
   * @type {UserWarning[]}
   * @memberof Guild
   */
  @OneToMany(type => UserWarning, userWarning => userWarning.guild)
  userWarnings: UserWarning[]

  /**
   * User kicks in the Guild.
   * @type {UserWarning[]}
   * @memberof Guild
   */
  @OneToMany(type => UserKick, userKick => userKick.guild)
  userKicks: UserKick[]

  /**
   * User bans in the Guild.
   * @type {UserBan[]}
   * @memberof Guild
   */
  @OneToMany(type => UserBan, userBan => userBan.guild)
  userBans: UserBan[]

  /**
   * GuildUsers in the Guild, not the Users
   * @type {GuildUser[]}
   * @memberof Guild
   */
  @OneToMany(type => GuildUser, guildUser => guildUser.guild)
  users: GuildUser[]
}
