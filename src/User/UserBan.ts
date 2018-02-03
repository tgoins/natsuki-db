import { Entity, PrimaryColumn, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class UserBan {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  serverId: string

  @Column()
  serverName: string

  @Column()
  reason: string

  @Column()
  dateBanned: Date

  @ManyToOne(type => User, user => user.bans)
  user: User
}
