import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Guild } from './'
import { User, UserInfraction, GuildUser } from '../../'

/**
 * A Blacklisted User in a Guild.
 * @export
 * @class GuildBlacklistedUser
 */
@Entity()
export class GuildBlacklistedUser {

  /**
   * The primary key for the table. Auto-generated.
   * @type {number}
   * @memberof GuildBlacklistedUser
   */
  @PrimaryGeneratedColumn()
  id: number

  /**
   * The reason and date the User was blacklisted.
   * @type {UserInfraction}
   * @memberof GuildBlacklistedUser
   */
  @Column(type => UserInfraction)
  infraction: UserInfraction

  /**
   * The User that blacklisted the User
   * @type {User}
   * @memberof GuildBlacklistedUser
   */
  @ManyToOne(type => GuildUser, guildUser => guildUser.blacklistsGiven)
  blacklistedByUser: GuildUser

  /**
   * The Guild that the BlacklistedUser belongs to. Configured automatically.
   * @type {Guild}
   * @memberof GuildBlacklistedUser
   */
  @ManyToOne(type => Guild, guild => guild.blacklistedUsers)
  guild: Guild
}
