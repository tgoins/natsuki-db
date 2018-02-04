import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from 'typeorm'
import { UserWarning, UserBalance, UserProfile, UserLevel, UserKick, UserBan, UserReputation } from './'
import { GuildUser, GuildBlacklistedUser } from '../../index'

@Entity('User')
export class User {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  levelsEnabled: boolean

  @Column()
  pmNotifications: boolean

  @Column()
  avatar: string

  @Column()
  created: Date

  @Column()
  banned: boolean

  @Column()
  verified: boolean

  @Column()
  verificationToken: string

  @Column()
  lastMessage: Date

  @OneToOne(type => UserBalance, userBalance => userBalance.user, {
    cascadeAll: true
  })
  balance: UserBalance

  @OneToOne(type => UserProfile, userProfile => userProfile.user, {
    cascadeAll: true
  })
  profile: UserProfile

  @OneToOne(type => UserLevel, userLevel => userLevel.user, {
    cascadeAll: true
  })
  level: UserLevel

  @OneToMany(type => UserReputation, userReputation => userReputation.user)
  reputation: UserReputation[]

  @OneToMany(type => GuildUser, guildUser => guildUser.user)
  guilds: GuildUser[]

  @OneToMany(type => UserWarning, userWarning => userWarning.user)
  warningsReceived: UserWarning[]

  @OneToMany(type => UserKick, userKick => userKick.user)
  kicksReceived: UserKick[]

  @OneToMany(type => UserBan, userBan => userBan.user)
  bansReceived: UserBan[]

  @OneToMany(type => UserWarning, userWarning => userWarning.user)
  warningsGiven: UserWarning[]

  @OneToMany(type => UserKick, userKick => userKick.user)
  kicksGiven: UserKick[]

  @OneToMany(type => UserBan, userBan => userBan.user)
  bansGiven: UserBan[]

  @OneToMany(type => GuildBlacklistedUser, guildBlacklistedUser => guildBlacklistedUser.blacklistedByUser)
  blacklistsGiven: GuildBlacklistedUser[]
}
