import { Entity, PrimaryColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User, UserInfraction } from './'
import { Guild } from '../'

@Entity()
export class UserBan {

  @PrimaryGeneratedColumn()
  id: number

  @Column(type => UserInfraction)
  infraction: UserInfraction

  @ManyToOne(type => User, user => user.bansReceived)
  user: User

  @ManyToOne(type => Guild, guild => guild.userBans)
  guild: Guild

  @ManyToOne(type => User, user => user.bansGiven)
  givenByUser: User
}
