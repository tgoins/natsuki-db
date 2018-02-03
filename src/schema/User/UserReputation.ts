import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './'

@Entity()
export class UserReputation {

  // TODO: Add fields

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => User, user => user.reputation)
  user: User
}
