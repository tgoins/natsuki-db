import { Connection } from 'typeorm';
export interface ConnectionOptions {
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
}
/**
 * Create a Postgres connection.
 * @param options Postgres connection options
 */
export declare const connect: (options: ConnectionOptions) => Promise<Connection>;
export * from './schema';
export * from 'typeorm/connection/Connection';
