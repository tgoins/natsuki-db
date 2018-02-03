import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class UserBalance {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  balance: number

  @Column()
  netWorth: number

  @Column()
  dateLastClaimed: Date

  @OneToOne(type => User, user => user.balance)
  @JoinColumn()
  user: User
}
