import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User, UserInfraction } from './'

@Entity()
export class UserKick {

  @PrimaryGeneratedColumn()
  id: number

  @Column(type => UserInfraction)
  infraction: UserInfraction

  @Column()
  dateKicked: Date

  @ManyToOne(type => User, user => user.kicks)
  user: User
}
