import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from 'typeorm'
import { UserWarning } from './UserWarning'
import { UserKick } from './UserKick'
import { UserBan } from './UserBan'
import { UserBalance } from './UserBalance'
import { UserProfile } from './UserProfile'
import { UserLevel } from './UserLevel'

@Entity('User')
export class User {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @SchemaField(Array)
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

  @SchemaField(Array)
  cookies: []

  @SchemaField(Array)
  reputation: []

  @SchemaField(Array)
  favorites: []

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

  @OneToMany(type => UserWarning, userWarning => userWarning.user)
  warnings: UserWarning[]

  @OneToMany(type => UserKick, userKick => userKick.user)
  kicks: UserKick[]

  @OneToMany(type => UserBan, userBan => userBan.user)
  bans: UserBan[]
}
