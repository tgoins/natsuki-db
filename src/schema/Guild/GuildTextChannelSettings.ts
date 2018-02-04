import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from './'

/**
 * Text channel settings for a Guild
 * @export
 * @class GuildTextChannelSettings
 */
@Entity()
export class GuildTextChannelSettings {

  /**
   * The primary key for the table. Auto-generated.
   * @type {number}
   * @memberof GuildTextChannelSettings
   */
  @PrimaryGeneratedColumn()
  id: number

  /**
   * The text the bot will say when a User leaves the Guild.
   * @type {string}
   * @memberof Guild
   */
  @Column()
  leaveText: string

  /**
   * The channel ID where the bot will send the leave message.
   * @type {string}
   * @memberof GuildTextChannelSettings
   */
  @Column()
  leaveChannelId: string

  /**
   * The text the bot will say when a User joins the Guild.
   * @type {string}
   * @memberof GuildTextChannelSettings
   */
  @Column()
  joinText: string

  /**
   * The channel ID where the bot will send the join message.
   * @type {string}
   * @memberof GuildTextChannelSettings
   */
  @Column()
  joinChannelId: string

  /**
   * Channel IDs where the bot should listen for commands.
   * @type {string[]}
   * @memberof GuildTextChannelSettings
   */
  @Column()
  commandChannelIds: string[]

  /**
   * Channel IDs where the bot should not monitor messages.
   * @type {string[]}
   * @memberof GuildTextChannelSettings
   */
  @Column()
  ignoredChannelIds: string[]

  /**
   * The Guild that the settings belong to. Configured automatically.
   * @type {Guild}
   * @memberof GuildTextChannelSettings
   */
  @OneToOne(type => Guild, guild => guild.textChannelSettings)
  @JoinColumn()
  guild: Guild
}
