import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, Index } from 'typeorm'
import { User, UserInfraction } from './'
import { Guild } from '../'

@Entity()
export class UserKick {

  @PrimaryGeneratedColumn()
  id: number

  @Column(type => UserInfraction)
  infraction: UserInfraction

  @ManyToOne(type => Guild, guild => guild.userKicks)
  @Index()
  guild: Guild

  @ManyToOne(type => User, user => user.kicksReceived)
  @Index()
  user: User

  @ManyToOne(type => User, user => user.kicksGiven)
  @Index()
  givenByUser: User
}
