import { createConnection, Connection, getRepository } from 'typeorm'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import {
  User,
  UserBalance,
  UserBan,
  UserKick,
  UserLevel,
  UserProfile,
  UserWarning,
  UserReputation,
  Guild,
  GuildTextChannelSettings,
  GuildVoiceChannelSettings,
  GuildUser,
  GuildBlacklistedUser
} from './schema'

export interface ConnectionOptions {
  host: string
  username: string
  password: string
  database: string
  port: number
}

/**
 * Create a Postgres connection.
 * @param options Postgres connection options
 */
export const connect = (options: ConnectionOptions) => {
  const { username, password, port, database } = options
  const postgresOptions: PostgresConnectionOptions = {
    username,
    password,
    port,
    database,
    type: 'postgres',
    entities: [
      // User Entities
      User,
      UserBalance,
      UserBan,
      UserKick,
      UserLevel,
      UserProfile,
      UserReputation,
      UserWarning,

      // Guild Entities
      Guild,
      GuildBlacklistedUser,
      GuildTextChannelSettings,
      GuildUser,
      GuildVoiceChannelSettings
    ]
  }

  return createConnection(postgresOptions)
}

export * from './schema'
export { Connection, getRepository }
