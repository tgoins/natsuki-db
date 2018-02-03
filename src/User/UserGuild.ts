import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './'

@Entity()
export class UserGuild {

  // TODO: Add fields.

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => User, user => user.guilds)
  user: User
}
