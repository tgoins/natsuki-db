import { createConnection } from 'typeorm'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { User, UserBalance, UserBan, UserKick, UserLevel, UserProfile, UserWarning, UserGuild, UserReputation } from './schema'

interface ConnectionOptions {
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
      User,
      UserBalance,
      UserBan,
      UserGuild,
      UserKick,
      UserLevel,
      UserProfile,
      UserReputation,
      UserWarning
    ]
  }

  return createConnection(postgresOptions)
}

export * from './schema'
export * from 'typeorm/connection/Connection'
