
import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, Index, ManyToOne } from 'typeorm'
import { Guild, GuildBlacklistedUser } from './'
import { User, UserWarning, UserKick, UserBan } from '../../'

/**
 * A User of a Guild
 * @export
 * @class GuildUser
 */
@Entity()
@Index(['guildId', 'userId'], { unique: true })
export class GuildUser {

  /**
   * The primary key for the table. Auto-generated.
   * @type {number}
   * @memberof GuildUser
   */
  @PrimaryGeneratedColumn()
  id: number

  /**
   * The nickname of the User in the Guild.
   * @type {string}
   * @memberof GuildUser
   */
  @Column()
  nickname: string

  /**
   * The date the User joined the Guild.
   * @type {Date}
   * @memberof GuildUser
   */
  @Column()
  dateJoined: Date

  /**
   * The date the User last sent a message in the Guild.
   * @type {Date}
   * @memberof GuildUser
   */
  @Column()
  dateLastMessage: Date

  /**
   * Logs of when the User was warned in the Guild.
   * @type {UserWarning[]}
   * @memberof GuildUser
   */
  @ManyToOne(type => UserWarning, userWarning => userWarning.user)
  warnings: UserWarning[]

  /**
   * Logs of when the User was kicked from the Guild.
   * @type {UserKick[]}
   * @memberof GuildUser
   */
  @ManyToOne(type => UserKick, userKick => userKick.user)
  kicks: UserKick[]

  /**
   * Logs of when the User was banned from the Guild.
   * @type {UserBan[]}
   * @memberof GuildUser
   */
  @ManyToOne(type => UserBan, userBan => userBan.user)
  bans: UserBan[]

  /**
   * The User that the GuildUser belongs to. Configured automatically.
   * @type {User}
   * @memberof GuildUser
   */
  @ManyToOne(type => User, user => user.guilds)
  @Index()
  user: User

  /**
   * The Guild that the GuildUser belongs to. Configured automatically.
   * @type {Guild}
   * @memberof GuildUser
   */
  @ManyToOne(type => Guild, guild => guild.users)
  @Index()
  guild: Guild

  @ManyToOne(type => UserWarning, userWarning => userWarning.user)
  warningsReceived: UserWarning[]

  @ManyToOne(type => UserKick, userKick => userKick.user)
  kicksReceived: UserKick[]

  @ManyToOne(type => UserBan, userBan => userBan.user)
  bansReceived: UserBan[]

  @ManyToOne(type => UserWarning, userWarning => userWarning.user)
  warningsGiven: UserWarning[]

  @ManyToOne(type => UserKick, userKick => userKick.user)
  kicksGiven: UserKick[]

  @ManyToOne(type => UserBan, userBan => userBan.user)
  bansGiven: UserBan[]

  @ManyToOne(type => GuildBlacklistedUser, guildBlacklistedUser => guildBlacklistedUser.blacklistedByUser)
  blacklistsGiven: GuildBlacklistedUser[]
}
