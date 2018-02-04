import { Column } from 'typeorm'

export class UserInfraction {

  @Column()
  givenByUserId: string

  @Column()
  givenByUserName: string

  @Column()
  serverId: string

  @Column()
  serverName: string

  @Column()
  reason: string
}
