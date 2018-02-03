import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './'

@Entity()
export class UserLevel {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  currentLevel: number

  @Column()
  currentExperience: number

  @Column()
  experienceNext: number

  @Column()
  totalExperience: number

  @OneToOne(type => User, user => user.level)
  @JoinColumn()
  user: User
}
