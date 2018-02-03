import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './'

@Entity()
export class UserWarning {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  serverId: string

  @Column()
  serverName: string

  @Column()
  reason: string

  @Column()
  dateWarned: Date

  @ManyToOne(type => User, user => user.warnings)
  user: User
}
