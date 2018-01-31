import * as mongoose from 'mongoose'
import * as bluebird from 'bluebird'

(mongoose as any).Promise = bluebird

/**
 * Open a MongoDB connection.
 * @param mongoDbUrl MongoDB connection string.
 */
export const connect = (mongoDbUrl: string) => {
  return mongoose.connect(mongoDbUrl)
}

/**
 * Disconnect from all connections.
 */
export const disconnect = () => {
  return mongoose.disconnect()
}
