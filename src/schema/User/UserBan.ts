import { Entity, PrimaryColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User, UserInfraction } from './'

@Entity()
export class UserBan {

  @PrimaryGeneratedColumn()
  id: number

  @Column(type => UserInfraction)
  infraction: UserInfraction

  @Column()
  dateBanned: Date

  @ManyToOne(type => User, user => user.bans)
  user: User
}
