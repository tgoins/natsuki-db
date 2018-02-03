import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class UserKick {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  serverId: string

  @Column()
  serverName: string

  @Column()
  reason: string

  @Column()
  dateKicked: Date

  @ManyToOne(type => User, user => user.kicks)
  user: User
}
