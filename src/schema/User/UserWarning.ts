import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User, UserInfraction } from './'
import { Guild } from '../'

@Entity()
export class UserWarning {

  @PrimaryGeneratedColumn()
  id: number

  @Column(type => UserInfraction)
  infraction: UserInfraction

  @ManyToOne(type => User, user => user.warningsReceived)
  user: User

  @ManyToOne(type => Guild, guild => guild.userWarnings)
  guild: Guild

  @ManyToOne(type => User, user => user.warningsGiven)
  givenByUser: User
}
