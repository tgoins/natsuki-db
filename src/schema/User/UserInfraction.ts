import { Column, ManyToOne } from 'typeorm'
import { Guild, GuildUser } from '../../index'
import { User } from './index'

export class UserInfraction {

  @Column()
  reason: string

  @Column()
  date: Date
}
