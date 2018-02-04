import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User, UserInfraction } from './'

@Entity()
export class UserWarning {

  @PrimaryGeneratedColumn()
  id: number

  @Column(type => UserInfraction)
  infraction: UserInfraction

  @Column()
  dateWarned: Date

  @ManyToOne(type => User, user => user.warnings)
  user: User
}
