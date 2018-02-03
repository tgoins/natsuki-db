import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from 'typeorm'
import { UserWarning, UserBalance, UserProfile, UserLevel, UserKick, UserBan, UserGuild, UserReputation } from './'

@Entity('User')
export class User {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  servers: []

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

  @@Column()
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

  @OneToMany(type => UserGuild, userGuild => userGuild.user)
  guilds: UserGuild[]

  @OneToMany(type => UserWarning, userWarning => userWarning.user)
  warnings: UserWarning[]

  @OneToMany(type => UserKick, userKick => userKick.user)
  kicks: UserKick[]

  @OneToMany(type => UserBan, userBan => userBan.user)
  bans: UserBan[]
}
