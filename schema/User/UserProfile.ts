import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './'

@Entity()
export class UserProfile {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  bio: string

  @Column()
  background: string

  @OneToOne(type => User, user => user.profile)
  @JoinColumn()
  user: User
}
