import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Guild } from './'

/**
 * Voice channel settings for a Guild
 * @export
 * @class GuildVoiceChannelSettings
 */
@Entity()
export class GuildVoiceChannelSettings {

  /**
   * The primary key for the table. Auto-generated.
   * @type {number}
   * @memberof GuildVoiceChannelSettings
   */
  @PrimaryGeneratedColumn()
  id: number

  /**
   * The dedicated music text channel for entering music commands.
   * @type {string}
   * @memberof GuildVoiceChannelSettings
   */
  @Column()
  musicTextChannelId: string

  /**
   * The dedicated music voice channel for listening to music.
   * @type {string}
   * @memberof GuildVoiceChannelSettings
   */
  @Column()
  musicVoiceChannelId: string

  /**
   * The default volume for the bot.
   * @type {number}
   * @memberof GuildVoiceChannelSettings
   */
  @Column()
  volume: number

  /**
   * The ID of the voice channel the bot will join if no Users are in a voice channel.
   * @type {string}
   * @memberof GuildVoiceChannelSettings
   */
  @Column()
  lastVoiceChannelId: string

  /**
   * The Guild that the settings belong to. Configured automatically.
   * @type {Guild}
   * @memberof GuildVoiceChannelSettings
   */
  @OneToOne(type => Guild, guild => guild.voiceChannelSettings)
  @JoinColumn()
  guild: Guild
}
